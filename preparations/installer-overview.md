# Installer creation

So what components do we need to create a bootable USB?
We need:

* A macOS installer.app (or recovery image for internet install)
* A bootloader (For this guide, we'll be focusing on OpenCore)


The installer can be split into 2 categories: Full macOS installers and Recovery Installes

* Full macOS installers are completely contained and require no network connection, they're generally 8GB+ and require you to have macOS running on something(Windows and linux do not natively support HFS, and we won't be going over the hacky ways to do so)
* Recovery Installers are a very small part of the normal macOS installer, only containig very core essentials to boot and the rest of the OS being download once you boot it. This requires no HFS write support so can easily be created on Linux, Windows and even Android if you so desire

And for the bootloader, this is what we use to trick macOS into thinking it's running on a genuine Mac, by patching many parts of both our system and macOS. For this guide, we'll be OpenCore. OpenCore is just one of many bootloader in the hack world, what makes this one special is:

* Support much more suffiticated system patching meaning better overal stability with updatess
* Uses modern kext injection being OS agnostic, compared to the hacky injections used by its predesessors(ie. Clover)
* Implements much better overal secuirty and native support for FileVault
* Architected by the god father of Hackintoshes [Vit9696](https://github.com/vit9696) and co-written with [Download-Fritz](https://github.com/Download-Fritz)