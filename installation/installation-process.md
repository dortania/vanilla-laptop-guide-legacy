# Installation Process 

Now that you've finished setting up OpenCore, you're finally able to boot, main things to keep in mind:

* Make sure the laptop is connected to the charger
   * If the battery isn't properly patched for macOS support, it can be a bit flakey. To avoid headaches make sure to to be plugged in
* Enable BIOS settings optimal for macOS
* Read up on the [Multiboot Guide](https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/)
* And a copy of the ~~OpenCore bible~~ [troubleshooting page](https://desktop.dortania.ml/troubleshooting/troubleshooting.html)
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