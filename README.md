# Overview

[![GitHub Repository](https://img.shields.io/badge/GitHub-vanilla--laptop--guide-blue?style=flat-square&logo=github)](https://github.com/dortania/vanilla-laptop-guide)

So you want to Hackintosh a laptop...
Are you willing to spend ~~hours~~ days troubleshooting various parts of your laptop?
If so, here's the Vanilla Laptop Guide for you.

This guide will explain everything you need to know to Hackintosh a laptop.
It's called the "Vanilla Laptop Guide" because it isn't specific to any particular laptop.
(You will find other guides whose descriptions are tailored to specific computers.
These are good, but won't cover the full set of options available.)

This is **not** a quick way to get a cheap MacBook -
this should only be seen as a hobby project.

Never rely on your Hackintosh unless you completely understand what you're doing
*and* know how to fix things when things break.
If you need a daily driver MacBook, we recommend looking at the used market on eBay, Facebook, etc.
For those who are masochists, want a challenge, or want to see how far you can get, this guide is for you!

This guide is a work in progress, and describes the OpenCore 0.5.9 bootloader,
which is current as of May 2020.

## Before you begin

### **KNOW YOUR HARDWARE**

We can't stress this enough. If you don't know your hardware and don't know how to find it, Hackintoshing probably isn't for you. Device Manager, [Speccy](https://www.ccleaner.com/speccy) and Google are your friends here.

### **READ TWICE AND CAREFULLY BEFORE ASKING**

This is not a very welcoming community for people who are not willing to do a lot of study on their own and learn from other's findings.
We will not spoon-feed information to make things work.
Read The Fucking Manual and work your way through all the pages and do some intense googling.

## Hackintosh Overview

The process of installing a Hackintosh has three major steps,
each with its own highly detailed instructions.
The steps are outlined below:

1. Collect the all the necessary software on a USB drive.
This memory stick will be used to boot the target hardware
and install the macOS operating system.

   * [Retrieving the macOS installer from Apple](/preparations/installer-overview.md)
   * [Install OpenCore bootloader](/preparations/opencore-efi.md)
   * [Gathering Kexts/Drivers](/OpenCore/ktext.md)
   * [Modifying ACPI](https://dortania.github.io/Getting-Started-With-ACPI/)
   * [Configuring OpenCore](/OpenCore/config.md)

2. [Install macOS](/installation/installation-process.md) This is the process of actually installing the macOS operating system on the device.
Tasks include:

   * Setting Boot Options for the computer
   * Booting the target hardware from the USB drive
   * Formatting the target's internal drive
   * Installing macOS on the target device

3. [Post-Install](/post-install/)
Copy certain files from the USB drive to the target's
internal drive so they will be used for all subsequent boots.

   * Audio
   * Installing bootloader to hard drive
   * Power Management
   * Security/FileVault
   * Etc.

If you're ready, go to the next page.

Good Luck! 🎊
