# Requirements

Before you start tinkering with your laptop, prepare the following:

## Requirements for your knowledge and attitude

1. _**[CRUCIAL]**_ A functioning brain, patience and the willingness
to take the time to get this working.
   * Building a Hackintosh is detailed, fussy work.
Don't start working on this if you have deadlines or important work.
We are not responsible for the waste of time or any data lost during this process.
2. _**[CRUCIAL]**_ **A BASIC KNOWLEDGE OF COMMAND LINES AND HOW TO USE A TERMINAL/COMMAND PROMPT**
   * This is not just [CRUCIAL], this whole guide depends on your ability to do this.
We won't be able to help if you don't know how to `cd` to a directory or delete a file.
3. _**[CRUCIAL]**_ **A LOT OF GOOGLE SKILL**
   * If you see an error message, type it into Google to see where it leads you.
Since every computer model is different, this Guide can only give general instructions.
You may need to track down many different leads/clues/hints to find a solution.

## Requirements for the Hackintosh Computer

1. _**[CRUCIAL]**_ A machine that is compatible as seen in the _**Compatibility**_ section.
2. _**[CRUCIAL]**_ Having selected a computer, **KNOW YOUR HARDWARE**
   * Your CPU name and generation
   * Your RAM size (and slots used if needed)
   * Your GPUs (All of them, Intel, AMD, Nvidia. You may have 2 GPUs, only the Intel one will work, [except in very rare cases.](https://dortania.github.io/GPU-Buyers-Guide/misc/discrete-laptops.html))
   * Your storage devices (HDD/SSD, NVMe/AHCI/RAID/IDE configuration. Note: Only AHCI/SATA will work. Other configurations may be harder to get by. RST users need to disable it, it can be named Intel Rapid Storage, RST or RAID)
   * Your screen resolution
   * Your audio codec
   * Your laptop model
   * Your **Ethernet chipset**
   * Your WLAN/Bluetooth chipset
3. _**[CRUCIAL]**_ A USB drive/memory stick with a  minimum of:
   * 16GB USB if you're going to create a full (offline) installer <!-- Apple now says Catalina requires 12GB -->
   * 4GB USB if you're going to create a recovery (online) installer
   * > *Should this Android choice even be listed? Just use a $5 USB stick... Or move this to the Extra's page*
   * Note: if you have a rooted android phone, look for DriveDroid, and make sure you have a shared internal storage (no separate /data partition) - usually all phones made after 2012 should be like this, so if yours is fairly new it will handle it just fine.
4. _**[CRUCIAL]**_ An **Ethernet connection** (no WiFi dongles, Ethernet USB adapter may work depending on macOS support) and you must know your LAN card's model (and your internet speed)
   * You must either have a physical Ethernet port, or a macOS compatible Ethernet dongle/adapter.
   * > *The following examples should be moved to the Extra's page...*
   * Some people report success with other techniques, although these are considerably more difficult.
   * For example, we hear about success with a compatible WiFi card, using an Android phone, to tether with USB, or [_Carcraftz_](https://github.com/Carcraftz) says iOS users can do this as well but you need the TetherMe tweak on a jailbroken iPhone. Unfortunately if you are not on the right version (any iOS version up to 12.1.2) this is not possible. :/
5. A **fast internet connection**
   * Users have complained of slow or failed downloads.
These are mainly due to slow or unstable internet.
   * This is crucial for the online method, offline can get away without it.

## A Windows/macOS/Linux computer for building the USB drive

You'll need a computer to create the USB drive and collect the software. It could be:

* macOS running Sierra or newer
* Windows (Windows 10, 1703 or newer)
* Linux (recent) with Python 2.7 or later
* For a Recovery/online installer, there must be **15GB** of free space on the drive you're working on.
* For a Full/offline installer, there must be **30GB** of free space on the macOS drive.
* The Recovery/online and Full/offline installer pages describe additional software needed.

<strike>
### For Full/offline installer

* A macOS environment:
  * Macintosh (recommended)
  * Hackintosh
  * Virtual Machine (much more difficult, but if you have to, then you gotta use what you have)
* 30GB of free space
* **Python** 2.7 or greater (you already have that on macOS)
* **ProperTree** [Recommended]: a simple tool to edit plist files, from /u/CorpNewt [https://github.com/corpnewt/ProperTree](https://github.com/corpnewt/ProperTree)
  * Or text editor: Notepad++, Sublime Text, VSCode...
    * Note: on October/fall 2018 Windows Update, the native Notepad can work too. Older versions of Windows must use a 3rd party text editor. If you don't know what this is, get one of the text editors above.

### For Recovery/online installer

* **Python** 2.7 or greater:
  * For Windows, get it from [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/) Enable "Add to PATH" during the install
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
</strike>
