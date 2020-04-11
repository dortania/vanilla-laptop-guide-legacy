# Preparing an offline installer (macOS only)

What you need:

* A macOS installer.app, from the App Store
* [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg)
  * You can download a [prebuilt release](https://github.com/acidanthera/OpenCorePkg/releases) (recommended, comes with needed EFI drivers)
  * Or build it manually with `./macbuild.tool`
  * You want the DBG (debug) build, as it makes it easier to debug issues. Afterwards, you can switch to a REL (release) build.
* [AppleSupportPkg](https://github.com/acidanthera/AppleSupportPkg)
  * Same as above, except usually you don't need the debug version as usually there aren't any issues.
* A plist editor (you should already have one by now)
