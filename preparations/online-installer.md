# Preparing an online installer (MacOS/Windows/Linooox)

This requires a working internet connection on the target machine! If you're using wifi, that means that the wifi card must be compatible with **macOS**. It is possible to use hornDIS to tether with an Android phone if needed.

Using gibMacOS, you can download the recovery image directly from apple servers and put it on a USB. Once booted up, this image can download the macOS installer on to the target hard drive.

[Old Internet-Install Guide](https://internet-install.gitbook.io/macos-internet-install/preparing-your-installer/preparing-your-installer-media)

Requirements:
* 4 GB USB or greater
* [Python 2.7 or greater](https://www.python.org/downloads/)
    * For windows, make sure when installing that "add to PATH" is enabled in the installer.
        * NOTE: If the .bat fails to run, you can run `python <file.py>`
    * For Linooox, install it through whatever package manager in your distro
    * macOS already includes Python
* [GibMacOS](https://github.com/corpnewt/gibMacOS)
    * Clone using git (`git clone https://github.com/CorpNewt/gibmacos.git`)
    _OR_
    * Click `Clone or download` in the top right and `Download ZIP`, then unzip.
    
    ![Hello World](/Images/preparations/CloneOrDownload.jpg)

* 7Zip
    * Graphical version is probably easier in Windows
    

### Getting the Recovery Package

1. Run GibMacOS
    * On Windows, run `gibMacOS.bat`. If it does not recognize Python, you can also run `python gibMacOS.command`
    * Linooox/MacOS - directly run gibMacOS.command
2. Toggle Recovery-Only by entering R and pressing Enter. Make sure it says `Toggle Recovery-Only (Currently on)`
    * This reduces the download size as we only need the recovery package (500 MB) rather than the full release (7-8 GB)
3. Select the release you want to download. In this case, we're downloading 1.15.4, or the latest release of macOS Catalina. It does not matter if `FULL Install` is at the end or not.

    ![Hello World (Again!)](/Images/preparations/gibMacOS.jpg) 

4. You can exit out of gibMacOS once it's done downloading

### Putting macOS on a USB

#### Windows

OpenCore allows us to put the BaseSystem.dmg on the USB with OpenCore, so we only need to format the USB to one Fat32 partition and drop it in. This does require 7Zip installed to 

1. Right click the Start Button on your task bar and run `Disk Management`
2. You should see all of your partitions and disks. On the bottom half, you'll see your devices. Find your USB.
3. You'll want to format the USB to have a Fat32 partition.
    * If you have multiple partitions on the USB, right click each partition and delete volume for your USB (**This will remove data, make sure you have backups and only remove partitions from your USB**)
        * Right click the unallocated space and create a new simple volume. Make sure it is FAT32 and atleast a gigabyte or two big. Name it "EFI"
    * Otherwise, right click the partition on the USB and click `format` and set it to FAT32.
    ![Hello General Kenobi](/Images/preparations/DiskManagement.jpg)
4. In File Explorer, go to your USB and create a new folder at the root called `com.apple.recovery.boot`
4. Again in File Explorer, find the .pkg downloaded by GibMacOS under `macOS Downloads` in the gibMacOS folder.
5. Open the .pkg by right clicking and going under 7zip -> Open Archive
    
    ![Horld Wello](/Images/preparations/7zipWinders.jpg)
6. Open RecoveryHDMeta.dmg (or similar named dmg) then open the folder contained.
7. You should see BaseSystem.dmg and BaseSystem.chunklist. Drag/Copy these to `com.apple.recovery.boot`.

    ![World Hello](/Images/preparations/BaseSystemWinders.jpg)
8. You are ready to continue on and put OpenCore on the USB

#### Linooox

This will go over using gdisk, though you can use other utilties that you are comfortable using. This will create the necessary partitions on the USB.

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
4. Run `mkfs.vfat -F 32 -n "EFI" /dev/<your partition>` to format the 200MB block to FAT32 and to name it "EFI"
5. Mount the USB by running `mount /dev/<your partition> /mnt`
6. `cd` to your USB by running `cd /mnt` and create a folder with `mkdir com.apple.recovery.boot`. This will be where we put the Recovery image.
7. `cd` to the .pkg you downloaded under `macOS downloads` in the gibmacos folder
8. Make sure `p7zip-full` is installed
    * `sudo apt install p7zip-full` for Ubuntu/Ubuntu based
    * `sudo pacman -S p7zip` for Arch
9. Run `7z e -txar *.pkg *.dmg; 7z e *.dmg */Base*`. This extracts the recovery from the pkg by extracting the initial update package, then extracting the BaseSystem damage.

![LINOOOOOOOOOOOOOOOOOOOOOOOOOOOOX](/Images/preparations/LinooxExtract.jpg)
![LINUX](/Images/Preparations/LinooxLS.jpg)

10. Once you find `BaseSystem.dmg` and `BaseSystem.chunklist`, copy these to `com.apple.recovery.boot` on the USB.
11. You are ready to continue and download/configure OpenCore

#### OS Ten (macOS)

1. In finder, find the Recovery package under `macOS downloads`. You may need to enable file name extensions under `Finder > Preferences > Advanced.
2. Rename the extension from `.pkg` to `.dmg`
3. Open the image by double clicking (this will mount said image)
4. Open `Disk Utility`
    1. Select View > Show All Devices (Above the drive list in the top left)
    2. Select your USB *device*
    3. Select Partition
        * If you do not see partition, then select Erase and format it as `MS-DOS(FAT)` and GUID.
    5. Apply
    6. Quit Disk Utility
5. Open the USB and create a folder called `com.apple.recovery.boot`
6. Go to the image you mounted earlier and find `BaseSystem.dmg` and `BaseSystem.chunklist`. Copy these both to `com.apple.recovery.boot`
7. You are ready to continue and put OpenCore on the USB