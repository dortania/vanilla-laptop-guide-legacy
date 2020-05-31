# Installing macOS on the Internal Drive

Now that you've finished copying the OpenCore and installer files to the
USB drive, you can now install the OS on your Hackintosh.
The main things to keep in mind:

* Connect the laptop to the charger.
If the battery isn't properly patched for macOS support, it can cause weird behaviors.
To avoid headaches, plug in your device
* Read up on the [Multiboot Guide](https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/)
if you want multiple OS's on the disk
* Keep a copy of the [troubleshooting page](https://dortania.github.io/OpenCore-Desktop-Guide/troubleshooting/troubleshooting.html) handy
* Summon a ton of patience

## Double checking your USB Drive

A final look at your EFI setup:

| Good EFI          |  Bad EFI |
:-------------------------:|:-------------------------:
![](/images/installation/install-md/good-efi.png)  |  ![](/images/installation/install-md/bad-efi.png) |
|  **EFI folder found on EFI partition** | *EFI folder missing* |
|  **ACPI Files are compiled (.aml)** | *ACPI Files are not compiled (.dsl)* |
|  **DSDT is not included** | *DSDT is included* |
|  **Removed unneeded Drivers (.efi)** | *Retains all default Drivers* |
|  **Only files with `.kext` suffix in the Kexts folder** | *Includes source code and folders* |
|  **`config.plist` found in /EFI/OC folder** | *Neither renamed or placed the .plist in right location* |
|  **Only includes required kexts** | *Downloaded every kext listed* |

## Set the Boot Options

Before you boot the target computer, check the user manual or Google a bit to find
the function (Fn) key to access the BIOS and boot menu:
it's commonly one of these keys: Esc, F2, F10 or F12.

Now put the USB stick into the target computer and **start it up!**

Immediately and repeatedly press the Fn key (from above) until you see
the computer boot up and display a "Boot Options" page.
(This page goes by many names: Boot Options, Boot Menu, BIOS Setup, etc. but provides the same capabilities,
even though the settings are in different places on various computers.)

## Recommended BIOS Settings

From the Boot Options page, you now must find and disable/enable the following settings.
With many BIOS settings your options may be heavily limited.

> *What do these "heavy limits" actually imply for people?
Is it a problem? Or do they set as many as they can, and forge ahead? -richb*

**Disable:**

* Fast Boot
* VT-d (can be enabled if you set `DisableIoMapper` to YES)
* Thunderbolt(For initial install, as Thunderbolt can cause issues if not setup correctly)
* Intel SGX
* Intel Platform Trust
* CFG Lock (MSR 0xE2 write protection)

**Enable:**

* VT-x
* Above 4G decoding
* Hyper-Threading
* Execute Disable Bit
* EHCI/XHCI Hand-off
* OS type: Windows 8.1/10 UEFI Mode
  * If OpenCore doesn't show up, set this to OtherOS
* DVMT Pre-Allocated(iGPU Memory): 64MB

## Booting the OpenCore USB Drive

> *Is a second boot required before proceeding with this step? -richb*

After setting the Boot Options (above), the laptop will still default to booting from the internal drive (with Windows, for now).

At the Boot Options page, you'll likely be greeted with the following boot options:

1. Windows
2. macOS Base System (External) *or* Install macOS Catalina (External)
3. OpenShell.efi
4. Reset NVRAM

Use **Option 2.**
Depending how the installer was made, it may be listed as either
**"macOS Base System (External)"** (Recovery Installer) or
**"Install macOS Catalina (External)"** (full installer).

Choose **Option 2** and you will see the computer begin to boot up.
You will likely see hundreds of log entries scroll past on the screen.
This is OK: it is helpful for troubleshooting if the computer doesn't start right up.
(Once the computer is fully working, you can turn off this *verbose* mode.)

If you now see the macOS installer, this is a major accomplishment!

The next steps are formatting the internal drive, and then installing macOS.

## Formatting the internal drive

From the macOS Installer, use **Disk Utility** to format the internal drive of the laptop.

* macOS **requires** GUID Partition Table (GPT) scheme.
  * Catalina, Mojave, and High Sierra (10.13 to 10.15) **default** to using APFS
  * High Sierra on spinning hard drives (not SSD) and all Sierra users will need to use macOS Journaled (HFS+)
* The drive **must** also have a 200MB partition.
By default, macOS Disk Utility sets up freshly formatted GPT drives with this 200MB partition.
* If you wish to have multiple operating systems on the drive,
see the [Multiboot Guide](https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/)
for more info on partitioning a drive for Windows.

After formatting the internal drive, quit **Disk Utility** to go back to the main Installer.

## Installing macOS

Begin the macOS installation to the (newly-formatted) internal drive in the obvious way.

The normal macOS installation process will cause the laptop to restart, possibly several times.
The computer will boot into OpenCore, but rather than selecting your USB installer/recovery,
select the macOS installer on the hard drive to continue installation.
You should get an Apple logo, and after a few minutes you should get a timer at the bottom saying "x minutes remaining".
This may be a good time to get a drink or snack as this will take a while.
The computer may restart a couple more times, but if all goes well, it should finally see the "Setup your Mac screen"

> *Should the following advice be part of the initial setup?
It seems that it simplifies the newcomer's life -
the restarts can be unattended although slightly slower.
After they get the Hackintosh running, if they get tired of waiting the 5-10 seconds,
they'll be smart enough to know they can Google to remove the timeout... -richb*

* You may want to set OpenCore to be your first boot option and set `Misc->Boot->Timeout` to something like 5-10 seconds to automatically have it go through the installer.

You're in! 🎉
Go through the [Post-Installation](../post-install/README.md) pages to finish setting up your laptop.
