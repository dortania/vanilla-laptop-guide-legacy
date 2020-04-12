# Installer creation

So what components do we need to create a bootable USB?
We need:

* A macOS installer.app (or recovery image for internet install)
* A bootloader (For this guide, we'll be focusing on OpenCore)

The installer can be split into 2 categories: Full macOS installers and Recovery Installers

* Full macOS installers are completely contained and require no network connection. They're generally 8GB+ and require you to have macOS running on something (Windows and Linux do not natively support writing HFS+, and we won't be going over the hacky ways to do so)
* Recovery Installers are a very small part of the normal macOS installer, only containing very core essentials to boot and the rest of the OS being downloaded once you boot it. This requires no HFS+ write support so it can be easily created on Linux, Windows and even Android if you so desire.

And for the bootloader, this is what we use to trick macOS into thinking it's running on a genuine Mac, by patching many parts of both our system and macOS. For this guide, we'll be using [OpenCore](https://github.com/acidanthera/OpenCorePkg/releases). OpenCore is just one of many bootloaders in the hack world - what makes this one special is:

* Support much more sophisticated system patching meaning better overall stability with updates
* Uses modern kext injection being OS agnostic, compared to the hacky injections used by its predecessors (i.e. Clover)
* Implements much better overall security and native support for FileVault
* Created and maintained by the godfather of Hackintoshing, [vit9696](https://github.com/vit9696), and co-written by [Download-Fritz](https://github.com/Download-Fritz)
