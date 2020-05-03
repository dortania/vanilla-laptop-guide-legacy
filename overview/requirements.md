# Requirements

Before you start tinkering with your laptop, make sure you have prepared the following:

## Physical requirements

1. _**[CRUCIAL]**_ A functioning brain
2. _**[CRUCIAL]**_ Time and patience.
   * Don't start working on this if you have deadlines or important work. We are not responsible for the waste of time and any data lost during this process.
3. _**[CRUCIAL]**_ **KNOW YOUR HARDWARE**
   * Your CPU name and generation
   * Your RAM size (and slots used if needed)
   * Your GPUs (All of them, Intel, AMD, Nvidia. You may have 2 GPUs, only the Intel one will work, [except in very rare cases.](https://dortania.github.io/GPU-Buyers-Guide/misc/discrete-laptops.html))
   * Your storage devices (HDD/SSD, NVMe/AHCI/RAID/IDE configuration. Note: Only AHCI/SATA will work. Other configurations may be harder to get by. RST users need to disable it, it can be named Intel Rapid Storage, RST or RAID)
   * Your screen resolution
   * Your audio codec
   * Your laptop model
   * Your **Ethernet chipset**
   * Your WLAN/Bluetooth chipset
4. _**[CRUCIAL]**_ **A BASIC KNOWLEDGE OF COMMAND LINES AND HOW TO USE A TERMINAL/COMMAND PROMPT**
   * This is not just [CRUCIAL], this is the basis of this whole guide. Don't come crying to us because you don't know how to `cd` to a directory or delete a file.
5. _**[CRUCIAL]**_ A machine that is compatible as seen in the _**Compatibility**_ section.
6. _**[CRUCIAL]**_ A minimum of:
   * 8GB USB if you're going to follow the offline method
   * 4GB USB if you're going to follow the online method
     * Note: if you have a rooted android phone, look for DriveDroid, and make sure you have a shared internal storage (no separate /data partition) - usually all phones made after 2012 should be like this, so if yours is fairly new it will handle it just fine.
7. _**[CRUCIAL]**_ An **Ethernet connection** (no WiFi dongles, Ethernet USB adapter may work depending on macOS support) and you must know your LAN card's model (and your internet speed)
   * You must either have a physical Ethernet port, or a compatible macOS Ethernet dongle/adapter. In case you have a compatible WiFi card, you can also use that, but it's not recommended.
   * For people who can't use ethernet but have an android phone, you can connect your android phone to WiFi and then tether it using USB.
   * For iOS users: _(taken from_ [_Carcraftz_](https://github.com/Carcraftz)_)_
     * iOS users can do this as well but you need the TetherMe tweak on a jailbroken iPhone. Unfortunately if you are not on the right version (any iOS version up to 12.1.2) this is not possible. :/
8. A **fast internet connection**
   * Users have complained of slow or locked up downloads, that's mainly due to slow or unstable internet.
   * This is crucial for the online method, offline can get away without it.
9. A **Proper OS Installation:**
   * Be it:
     * macOS (a fairly recent one would be better)
     * Windows (Windows 10, 1703 or newer)
     * Linux (with Python 2.7 or later), make sure it's clean and properly functioning.
   * For online installer, **15GB** of free space on the drive you're working on. On Windows, your OS disk (C:) must have 15GB free at least.
   * For offline installer, **30GB** of free space on macOS's drive.
10. Some googling skills, which a lot of you lack sadly.

## Non-physical requirements

### For offline installer

* A macOS environment:
  * Hackintosh
  * Macintosh (recommended)
  * Virtual Machine (not really recommended, but if you have to, then you gotta use what you have)
* 30GB of free space
* **Python** 2.7 or greater (you already have that on macOS)
* **ProperTree** [Recommended]: a simple tool to edit plist files, from /u/CorpNewt [https://github.com/corpnewt/ProperTree](https://github.com/corpnewt/ProperTree)
  * Or text editor: Notepad++, Sublime Text, VSCode...
    * Note: on October/fall 2018 Windows Update, the native Notepad can work too. Older versions of Windows must use a 3rd party text editor. If you don't know what this is, get one of the text editors above.

### For online installer

* **Python** 2.7 or greater:
  * For Windows, get it from [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/) and make sure you enable "Add to PATH" during the install
    * **DO NOT** use the Python release in the Microsoft Store, get it from the official website.
  * For Linux users, install it, if you don't already have it, with your distro's package manager.
  * For macOS users, you already have it installed.
* **ProperTree** [Recommended]: a simple tool to edit plist files, from /u/CorpNewt ([https://github.com/corpnewt/ProperTree](https://github.com/corpnewt/ProperTree))
  * Or text editor: Notepad++, Sublime Text, VSCode...
    * Note: on October/fall 2018 Windows Update, the native notepad can work too. Older versions of windows must use a 3rd party text editor. If you don't know what this is, get a one of the text editors above.
* **gibMacOS**: another sweet tool from /u/CorpNewt ([https://github.com/corpnewt/gibMacOS](https://github.com/corpnewt/gibMacOS))
  * if you have git on windows use it to clone the repository
  * if you don't, press `Clone or Download` button and download as Zip, extract it somewhere
* Other software requirements will be downloaded throughout the guide (OS specific)
