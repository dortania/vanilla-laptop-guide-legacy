# Preparing an offline installer (macOS only)

What you need:

* A macOS installer.app, from the App Store
* OpenCorePkg
  * You can download a [prebuilt release](https://github.com/acidanthera/OpenCorePkg/releases) (recommended, comes with needed EFI drivers)
  * Or build it manually with `./macbuild.tool`
  * You want the DBG (debug) build, as it makes it easier to debug issues. Afterwards, you can switch to a REL (release) build.
