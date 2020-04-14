# Installation Process 

Now that you've finished setting up OpenCore, you're finally able to boot, main things to keep in mind:

* Make sure the laptop is connected to the charger
   * If the battery isn't properly patched for macOS support, it can be a bit flakey. To avoid headaches make sure to to be plugged in
* Enable BIOS settings optimal for macOS
* Read up on the [Multiboot Guide](https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/)
* And a copy of the ~~OpenCore bible~~ [troubleshooting page](https://dortania.github.io/OpenCore-Desktop-Guide/troubleshooting/troubleshooting.html)
* And a ton of of patience


## Recommended BIOS Settings

With many OEMs you're likely going to be heavily limited in your options, if you can try to find these options and enable them:

**Disable:**

* Fast Boot
* VT-d(can be enabled if you set `DisableIoMapper` to YES)
* Thunderbolt
* Intel SGX
* Intel Platform Trust
* CFG Lock(MSR 0xE2 write protection)

**Enable:**

* VT-x
* Above 4G decoding
* Hyper-Threading
* Execute Disable Bit
* EHCI/XHCI Hand-off
* OS type: Windows 8.1/10 UEFI Mode
   * If OpenCore doesn't show up set this to OtherOS
* DVMT Pre-Allocated(iGPU Memory): 64MB



## macOS Installer

So you've finally got the installer booted, got through the verbose and hit the installer! Now that you've gotten this far,  the main things to keep in mind:

* Drives you wish to install macOS on **must** be both of GUI partition Scheme **and** APFS
* The drive **must** also have a 200MB partition
   * By default, macOS will setup freshly formatted drives with 200MB
   * See the [Multiboot Guide](https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/) for more info on partitioning a Windows Drive

Once you start the installation, you will want to wait until the lappie restarts. You will once again want to boot into opencore, but rather than selecting your USB installer/recovery - you will want to select the macOS installer on the hard drive to continue installation. You should get an apple logo, and after a few minutes you should get a timer at the bottom saying "x minutes remaining". This may be a good time to get a drink or snack as this will take a while. It may restart a couple more times, but if all goes well, it should finally plop you at the "Setup your Mac screen"
* You may want to set OpenCore to be your first boot option and set `Misc->Boot->Timeout` to something like 5-10 seconds to automatically have it go through the installer.


You're in! 🎉
You will want to go through the Post-Installation pages to finish setting up your laptop.

