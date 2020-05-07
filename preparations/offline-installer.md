# Preparing a Full macOS Installer (requires macOS)

This procedure describes how to create a "full macOS installer" that contains the
entire operating system, with no further downloads necessary.
What you need:

* A macOS computer
* A full macOS installer.app, downloaded from the App Store (instructions below)
* [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg)
  * You can download a [pre-built release](https://github.com/acidanthera/OpenCorePkg/releases) (recommended, comes with needed EFI drivers)
  * Or build it manually with `./macbuild.tool`
  * You want the DBG (debug) build, as it makes it easier to debug issues. Afterwards, you can switch to a REL (release) build.
* [AppleSupportPkg](https://github.com/acidanthera/AppleSupportPkg)
  * Same as above, except usually you don't need the debug version as usually there aren't any issues.
* A plist editor (you should already have one by now. ie. [ProperTree](https://github.com/corpnewt/ProperTree))

##### Note for legacy users

* If you want to use OpenCore on a system without UEFI, please follow the [Legacy Install](/extras/legacy.md) section first, after you can continue following the **Base folder structure** section

To start we'll want to grab ourselves a copy of macOS, you can skip this and head to formatting the USB if you're just making a bootable OpenCore stick and not an installer. For everyone else, you can either download macOS from the App Store or with gibMacOS

## Downloading macOS Installer

Use the [gibMacOS](https://github.com/corpnewt/gibMacOS)
(see the [Recovery Installer page for details](./online-installer.md)
and run the `gibMacOS.command`:

![](/images/preparations/offline-installer/gib.png)

From this, we get a nice list of macOS installers. If you need beta versions of macOS, you can select `C. Change Catalog`.
For this example we'll choose 1:

![](/images/preparations/offline-installer/gib-process.png)

This is going to take a while as we're downloading the entire 8GB+ macOS installer,
so highly recommend reading the rest of the guide while you wait.

Once finished, we'll next want to run the `BuildmacOSInstallApp.command`:

![](/images/preparations/offline-installer/gib-location.png)

It's gonna ask for the macOS installer files, at the moment they're in pieces in the `macOS Downloads` folder found in gibMacOS

Once it's done, you can find it with the rest of the files. I recommend moving it to your applications folder to make things a bit easier with the next section.

![](/images/preparations/offline-installer/gib-done.png)

## Preparing the USB Drive

Now format the USB drive.
Use macOS Disk Utility to erase the entire USB drive (click View > Show All Devices, then select your USB drive),
and give it the name `MyVolume`,
using `Mac OS Extended (Journaled)` and `GUID Partition Map`.

![Formatting the USB](/images/preparations/offline-installer/format-usb.png)

This creates 2 partitions: one named `MyVolume` and a second (hidden) one called `EFI`
which is where your firmware checks for boot files.

## Copying macOS onto the USB Drive

Next run the `createinstallmedia` command provided by [Apple](https://support.apple.com/en-us/HT201372),
(be sure to adjust the volume name if it's not `MyVolume` and the path to the installer if it's not Catalina or not in the Applications folder):

```text
sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
```

This will take some time so may want to grab a coffee or continue reading the guide.
(To be realistic, you shouldn't be following this guide step by step without reading the whole thing first.)

You can also replace the `createinstallmedia` path with that of where your installer's located, same idea with the drive name.

## Mounting the EFI partition

Before you can proceed, you must mount the EFI system partition that was automatically created when formatting with GUID.
That partition is unmounted by default.
This is where our friend [MountEFI](https://github.com/corpnewt/MountEFI) comes in:

![MountEFI](/images/preparations/offline-installer/mount-efi-usb.png)

You'll notice that once we open the EFI partition, it's empty.

![Empty EFI partition](/images/preparations/offline-installer/base-efi.png)

You are ready to continue and [add OpenCore files to the USB installer.](./opencore-efi.md)
