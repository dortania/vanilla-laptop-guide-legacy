# Troubleshooting

You will want to [view the troubleshooting page from the desktop guide for things not listed below](https://dortania.github.io/OpenCore-Desktop-Guide/troubleshooting/troubleshooting.html)

### Keyboard works but trackpad does not

Make sure that VoodooInput is listed *before* VoodooPS2 and VoodooI2C kexts.

### Scrambled Screen

![Scrambled Screen](/images/install/Scrambled.jpg)
Enable CSM in your UEFI settings. This may appear as "Boot legacy Roms" or other legacy setting.
