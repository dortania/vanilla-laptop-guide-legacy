# Preparing a Recovery installer on Windows/Linux/macOS

An *online Recovery installer* installs only core elements of macOS, then downloads the full OS from the Apple servers. 
This requires a working internet connection - usually Ethernet - on the target machine. 
If you want to use WiFi, ensure your target machine's WiFi card is compatible with **macOS**. 
(It is possible to use HoRNDIS to tether with an Android phone if needed.)

*[We temporarily include a link to the (Clover-based) [Internet-Install Guide](https://internet-install.gitbook.io/macos-internet-install/preparing-your-installer/preparing-your-installer-media)  for reference.]*

Requirements:

* 4 GB USB or greater
* [Python 2.7 or greater](https://www.python.org/downloads/)
  * For Windows, make sure when installing that "add to PATH" is enabled in the installer.
    * NOTE: If the .bat fails to run, you can run `python <file.py>`.
  * For Linux, install it through whatever package manager your distro uses
  * macOS already includes Python
* [**gibMacOS software**](https://github.com/corpnewt/gibMacOS) 
downloads your desired macOS image directly from Apple servers (to ensure authenticity).
  * Clone using git (`git clone https://github.com/CorpNewt/gibmacos.git`)
    _OR_
  * Click `Clone or download` in the top right and `Download ZIP`, then unzip.
    ![gibMacOS download image](/images/preparations/CloneOrDownload.jpg)
* 7-Zip
  * Graphical version is probably easier in Windows

## Getting the Recovery Package

1. Run gibMacOS
    * On Windows, run `gibMacOS.bat`. If it does not recognize Python, you can also run `python gibMacOS.command`
    * Linux/macOS - directly run `gibMacOS.command`
2. Toggle Recovery-Only by entering R and pressing Enter. Make sure it says `Toggle Recovery-Only (Currently on)`
    * This reduces the download size as we only need the recovery package (500 MB) rather than the full release (7-8 GB)
3. Select the release you want to download. In this case, we're downloading 10.15.4, or the latest release of macOS Catalina. It does not matter if `FULL Install` is at the end or not.
    ![gibMacOS screenshot](/images/preparations/gibMacOS.jpg)
4. You can exit out of gibMacOS once it's done downloading.

## Putting macOS on a USB

### Windows

OpenCore allows us to put the BaseSystem.dmg on the USB with OpenCore, 
so we only need to format the USB to one FAT32 partition and drop it in. 
This does require 7-Zip to be installed.

1. Right click the Start Button on your task bar and select `Disk Management`.
2. You should see all of your partitions and disks. On the bottom half, you'll see your devices. Find your USB.
3. You'll want to format the USB to have a FAT32 partition.
    * If you have multiple partitions on the USB, right click each partition and click `Delete Volume` for your USB (**This will remove data, make sure you have backups and only remove partitions from your USB**)
        * Right click the unallocated space and create a new simple volume. Make sure it is FAT32 and at least a gigabyte or two big. Name it "EFI".
    * Otherwise, right click the partition on the USB and click `Format` and set it to FAT32.
    ![Disk Management right click menu](/images/preparations/DiskManagement.jpg)
4. In File Explorer, go to your USB and create a new folder at the root called `com.apple.recovery.boot`.
5. Again in File Explorer, find the .pkg downloaded by gibMacOS under `macOS Downloads` in the gibMacOS folder.
6. Open the .pkg by right clicking and going under 7-Zip -> Open Archive
    ![7-Zip right click menu](/images/preparations/7zipWinders.jpg)
7. Open RecoveryHDMeta.dmg (or similar named dmg) then open the folder contained.
8. You should see BaseSystem.dmg and BaseSystem.chunklist. Drag/copy these to the `com.apple.recovery.boot` folder on your USB.
    ![BaseSystem screenshot](/images/preparations/BaseSystemWinders.jpg)
9. You are ready to continue and [add OpenCore files to the USB installer.](./opencore-efi.md)


### Linux

This will go over using gdisk, though you can use other utilities that you are comfortable using. This will create the necessary partitions on the USB.

1. Run `lsblk` and note your USB device
2. Run `sudo gdisk /dev/<your USB block>`
    1. Enter `p` to print your block's partitions (and verify it's the correct USB)
    2. Enter `o` to clear the partition table and make a new GPT one
    3. Create a partition by entering `n`
        * Partition Number: Default (Leave blank for default)
        * First Sector: Default
        * Last Sector: Default
        * Hex code or GUID: `0700` for Microsoft basic data partition type
    4. Enter `w` to write changes to the USB
    5. Close by entering `q`
3. Verify USB was formatted correctly with `lsblk`
4. Run `mkfs.vfat -F 32 -n "macOS" /dev/<your partition>` to format the partition you created to FAT32 and to name it "macOS"
5. Mount the USB by running `mount /dev/<your partition> /mnt`
6. `cd` to your USB by running `cd /mnt` and create a folder with `mkdir com.apple.recovery.boot`. This will be where we put the Recovery image.
7. `cd` to the .pkg you downloaded under `macOS downloads` in the gibMacOS folder
8. Make sure `p7zip-full` is installed
    * `sudo apt install p7zip-full` for Ubuntu/Ubuntu based
    * `sudo pacman -S p7zip` for Arch
9. Run `7z e -txar *.pkg *.dmg; 7z e *.dmg */Base*`. This extracts the recovery from the pkg by extracting the initial update package, then extracting the BaseSystem damage.
    ![RecoveryHDMetaDmg.pkg extraction](/images/preparations/LinooxExtract.jpg)
    ![File listing](/images/preparations/LinooxLS.jpg)
10. Once you find `BaseSystem.dmg` and `BaseSystem.chunklist`, copy these to `com.apple.recovery.boot` on the USB.
11. You are ready to continue and [add OpenCore files to the USB installer.](./opencore-efi.md)

### macOS

1. In Finder, find the Recovery package under `macOS Downloads`. You may need to enable file name extensions under `Finder > Preferences > Advanced`.
2. Rename the extension from `.pkg` to `.dmg`
3. Open the image by double clicking (this will mount said image)
4. Open `Disk Utility`
    1. Select `View > Show All Devices` (above the drive list in the top left)
    2. Select your USB *device*
    3. Select the FAT32 partition
        * If you do not see any partitions, then select Erase and format it as `MS-DOS (FAT)` and GUID.
    4. Apply
    5. Quit Disk Utility
5. Open the USB and create a folder called `com.apple.recovery.boot`.
6. Go to the image you mounted earlier and find `BaseSystem.dmg` and `BaseSystem.chunklist`. Copy these both to the `com.apple.recovery.boot` folder.
7. You are ready to continue and [add OpenCore files to the USB installer.](./opencore-efi.md)
