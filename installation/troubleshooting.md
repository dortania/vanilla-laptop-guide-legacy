# Troubleshooting

You will want to [view the troubleshooting page from the desktop guide for things not listed below](https://dortania.github.io/OpenCore-Desktop-Guide/troubleshooting/troubleshooting.html)

### Keyboard works but trackpad does not

Make sure that VoodooInput is listed *before* VoodooPS2 and VoodooI2C kexts.

### Stuck at `gIOLockState (3...`

* Double check that ig-platform-id and device-id are valid.
* CSM is off in UEFI/BIOS
* Trying various [WhateverGreen Fixes](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)
  * `-igfxmlr` boot argument. This can also manifest as a "Divide by Zero" error.

### Scrambled Screen

![Scrambled Screen](/images/install/Scrambled.jpg)
Enable CSM in your UEFI settings. This may appear as "Boot legacy ROMs" or other legacy setting.

### VoodooI2C Troubleshooting

Check the order that your kexts load - make they match what is shown under [Gathering Files](/OpenCore/ktext.md):

1. VoodooGPIO, VoodooInput, and VoodooI2CServices in any order (In VoodooI2C.kext/Contents/PlugIns)
2. VoodooI2C
3. Satellite/Plugin Kext

Make sure you have both _OSI to XOSI enabled as well, and SSDT-XOSI under ACPI -> Add
