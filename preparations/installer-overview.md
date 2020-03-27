# Installer creation

So what components do we need to create a bootable USB?
We need:

1. a macOS installer.app (or recovery image for internet install)
2. a bootloader (Clover)

We need a macOS installer.app for an offline install, as this will be the installer that we will use to install macOS. A recovery image can also booted, if you'd like to download the rest of the files over the internet, or if you don't have macOS to make the installer from.

We also need a bootloader to boot macOS, as we don't have Macs. We will be using Clover for this.
