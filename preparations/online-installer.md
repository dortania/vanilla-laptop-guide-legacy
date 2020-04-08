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

Included in gibMacOS is a script which can put the recovery image on to a USB basically automatically. It will install 7-zip and dd if needed when ran. **This will format your USB** so make sure all your data is backed up.

1.  Run `MakeInstall.bat`.
2. **Carefully** choose your drive (look for size, name, or other features). Type in it's number and add the letter `O`, then press enter. `O` tells gibMacOS to download OpenCore rather than Clover.

    ![World Hello](/Images/preparations/MakeInstall.jpg)
    
3. When asked for the recovery package path, add it in.
    * Under the GibMacOS folder, the package should've been downloaded somewhere under `macOS Downloads`.
    * Once found, you can hold `shift` and right click the package. You can then select `Copy as Path` and paste that in.

    ![Hello General Kenobi](/Images/preparations/shiftClick.jpg)

4. It will take a while to write the image to USB. Once done, you can exit out and move on to configuring OpenCore down below.

#### Linooox

This will go over using gdisk, though you can use other utilties that you are comfortable using. This will create the necessary partitions on the USB.

1. Run `lsblk` and note your USB device
2. Run `sudo gdisk /dev/<your USB block>`
    1. Enter `p` to print your block's partitions (and verify it's the correct USB)
    2. Enter `o` to clear the partition table and make a new GPT one
    3. Create a partition by entering `n`
        * Partition Number: Default (Leave blank for default)
        * First Sector: Default
        * Last Sector: `+200M` to create a 200MB partition for your EFI
        * Hex code or GUID: `0700` for Microsoft basic data partition type
    4. Create another partition
        * Partition Number/First Sector/Last Sector: Default
        * Hex code or GUID: `af00` for Apple HFS/HFS+ partition type
    5. Enter `w` to write changes to the USB
    6. Close by entering `q`
3. Verify USB was formatted correctly with `lsblk`
4. Run `mkfs.vfat -F 32 -n "EFI" /dev/<your 200MB partition>` to format the 200MB block to FAT32 and to name it "EFI"
5. `cd` to the .pkg you downloaded under `macOS downloads`
6. Make sure `p7zip-full` is installed
    * `sudo apt install p7zip-full` for Ubuntu/Ubuntu forks
    * `sudo pacman -S p7zip` for Arch
7. Run `7z e -txar *.pkg *.dmg; 7z e *.dmg */Base*; 7z e -tdmg Base*.dmg *.hfs`. This extracts the recovery from the pkg by extracting the initial update package, then extracting the recovery dmg, then extracting the hfs image.
8. Once you find `4.hfs` or `3.hfs`, run `dd if=*.hfs of=/dev/<your USB's second partition> bs=8M --progress`
9. You are ready to continue and download/configure OpenCore

#### OS Ten (macOS)

1. In finder, find the Recovery package under `macOS downloads`. You may need to enable file name extensions under `Finder > Preferences > Advanced.
2. Rename the extension from `.pkg` to `.dmg`
3. Open the image (this will mount said image)
4. Find and double click on `Basesystem.dmg` to mount it
5. Open `Disk Utility`
    1. Select View > Show All Devices (Above the drive list in the top left)
    2. Select your USB *device*
    3. Select Partition
        * If you do not see partition, then select Erase and format it as macOS Extended Journaled and GUID Partition Table.
    4. Make:
        * Minimum 200MB partition named EFI, formatted as MSDOS
        * The rest of the drive formmated as MacOS Extended Journaled
    5. Apply
    6. Select the MacOS Extended Journaled partition and select Restore.
    7. Choose BaseSystem from the list and let it restore.
6. Continue down below to install OpenCore