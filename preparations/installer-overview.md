# Installer Overview

What components do we need to create a bootable USB installer?

* A USB drive - at least 4 GB (or 16 GB) - see below.
* A bootloader - for this guide, we'll be focusing on OpenCore
* A Full macOS installer.app or Recovery image for internet install

**USB Drive** can be a garden-variety USB 2.0 or better USB drive
has at least 16 GB (for the Full/offline Installer)
or 4 GB (for the Recovery/online installer).

**The bootloader software** tricks macOS into thinking it's running on a genuine Mac,
by supplying software patches for the non-Mac hardware.
This guide describes [OpenCore](https://github.com/acidanthera/OpenCorePkg/releases)
although the USB installer created here could be used for other bootloaders (such as Clover).
What makes OpenCore special is:

* Support much more sophisticated system patching meaning better overall stability with updates
* Uses modern kext injection being OS agnostic, compared to the hacky injections used by its predecessors (i.e. Clover)
* Implements much better overall security and native support for FileVault
* Architected and maintained by the great [vit9696](https://github.com/vit9696), and co-written by [Download-Fritz](https://github.com/Download-Fritz)

**macOS Installer** can be one of two alternatives: Full or Recovery Installer.

* **Full macOS installers** contain the entire macOS image and require no network connection
(so it can be "offline").
These images are generally 8 GB or more, so your USB drive should be at least 16 GB.
You must have a macOS computer to create the Full installer.
(There are hacky ways to make Windows and Linux write HFS+, but we won't be going over them.)
* **Recovery Installers** contain only the core essentials to boot macOS on your computer.
You then must be "online" to download the remainder of macOS and complete this "internet recovery" installation.
This guide provides instructions for creating recovery installers on Linux, Windows and even Android.

**Next Step:** [Create a Full Installer](./offline-installer.md) *or* [Create a Recovery Installer](./online-installer.md)
