# Preparing an offline installer (macOS only)

What you need:

* A macOS installer.app, from the App Store
* [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg)
  * You can download a [prebuilt release](https://github.com/acidanthera/OpenCorePkg/releases) (recommended, comes with needed EFI drivers)
  * Or build it manually with `./macbuild.tool`
  * You want the DBG (debug) build, as it makes it easier to debug issues. Afterwards, you can switch to a REL (release) build.
* [AppleSupportPkg](https://github.com/acidanthera/AppleSupportPkg)
  * Same as above, except usually you don't need the debug version as usually there aren't any issues.
* A plist editor (you should already have one by now)


**Note for legacy users**
* If you want to use OpenCore on a system without UEFI, please follow the [Legacy Install](/extras/legacy.md) section first, after you can continue following the **Base folder structure** section

To start we'll want to grab ourselves a copy of macOS, you can skip this and head to formatting the USB if you're just making a bootable OpenCore stick and not an installer. For everyone else, you can either download macOS from the AppStore or with GibMacOS

## Downloading macOS

Now lets grab [GibMacOS](https://github.com/corpnewt/gibMacOS) and run the `gibMacOS.command`:

![](/Images/preparations/offline-installer/gib.png)

From this, we get a nice list of macOS installers. If you need beta versions of macOS, you can select `C. Change Catalog`. For this example we'll choose 1:

![](/Images/preparations/offline-installer/gib-process.png)

This is going to take a while as we're downloading the entire 8GB+ macOS installer, so highly recommend reading the rest of the guide while you wait.

Once finished, we'll next want to run the `BuildmacOSInstallApp.command`:

![](/Images/preparations/offline-installer/gib-location.png)

It's gonna ask for the macOS installer files, at the moment they're in pieces in the `macOS Downloads` folder found in GibMacOS

Once it's done, you can find it with the rest of the files. I recommend moving it to your applications folder to make things a bit easier with the next section.

![](/Images/preparations/offline-installer/gib-done.png)

## Setting up the installer

Now we'll be formatting the USB to prep for both the macOS installer and OpenCore. We'll want to use MacOS Extended(HFS+) with a GUID partition map. What this will do is create 2 partitions. The main `MyVolume` and a second called `EFI` which is used as a boot partition where your firmware will check for boot files.

![Formatting the USB](/Images/preparations/offline-installer/format-usb.png)

Next run the `createinstallmedia` command provided by [Apple](https://support.apple.com/en-us/HT201372), note that the command is made for USB's formatted with the name `MyVolume`:

```text
sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
```

This will take some time so may want to grab a coffee or continue reading the guide(to be fair you really shouldn't be following this guide step by step without reading the whole thing first)

You can also replace the `createinstallmedia` path with that of where your installer's located, same idea with the drive name.

## Setting up OpenCore's EFI environment

Setting up OpenCore's EFI environment is simple, all you need to do is mount our EFI system partition. This is automatically made when we format with GUID but is unmounted by default, this is where our friend [mountEFI](https://github.com/corpnewt/MountEFI) comes in:

![MountEFI](/Images/preparations/offline-installer/mount-efi-usb.png)

You'll notice that once we open the EFI partition, it's empty. This is where the fun begins.

![Empty EFI partition](/Images/preparations/offline-installer/base-efi.png)