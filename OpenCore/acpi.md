# Getting started with ACPI

Last edited: January 30, 2020

## A quick explainer on ACPI and how to make SSDTs

So what are DSDTs and SSDTs? Well, these are tables present in your firmware that outline hardware devices like USB controllers, CPU threads, embedded controllers, system clocks and such. A DSDT(Differentiated System Description Table) can be seen as the body holding most of the info with smaller bits of info being passed by the SSDT(Secondary System Description Table)

> So why do we care about these tables?

macOS can be very picky about the devices present in the DSDT and so our job is to correct it. The main devices that need to be corrected for macOS to work properly:

* Embedded controllers(EC) ACPI patch
  * All semi-modern intel machines have an EC exposed in their DSDT, with many AMD systems also having it exposed. These controllers are not compatible with macOS be default so we need to rename to something macOS would like to work with
* Plugin type SSDT
  * This is used to enable native CPU power management on **Intel** Haswell and newer CPUs, the SSDT will connect to the first thread of the CPU
* AWAC system clock.
  * This applies to all Coffee Lake 9th gen series laptops, the specific issue is that newer laptops ship with AWAC clock enabled. This is a problem because macOS cannot communicate with AWAC clocks, so this requires us to either force on the Legacy RTC clock or if unavailable create a fake one for macOS to play with
* NVRAM SSDT
  * Coffee Lake 9th gen series don't declare the FW chip as MMIO in ACPI and so XNU ignores the MMIO region declared by the UEFI memory map. This SSDT brings back NVRAM support
* GPIO SSDT
   * Used for creating a stub to allow VoodooI2C to connect onto
* XOSI SSDT
   * Used for rerouting OSI calls to this SSDT, mainly used for tricking our hardware into thinking its booting Windows so we get better trackapd support
* IRQ SSDT and ACPI patch
   * Needed for fixing IRQ conflicts within the DSDT, macOS will not boot on many laptops due to this

## What SSDTs do each platform need

Please see the **specific ACPI section of your config.plist**, all SSDTs needed are covered there with a breif explainer.


# SSDTs: The easy way

So here we'll be using a super simple tool made by CorpNewt: [SSDTTime](https://github.com/corpnewt/SSDTTime)

What this tool does is dumps your DSDT from your firmware, and then creates SSDTs based off your DSDT. **This must be done on the target machine running either Windows or Linux**

So what **can't** SSDTTime do?:

* **EC Renames**: We'll need to manually look at our DSDT to find the ACPI path
* **AWAC and RTC0 SSDTs**: Need to find the correct ACPI path
* **PMC SSDT**: Need to find the correct ACPI path
* **GPIO SSDT**: Luckily this is universal accross all laptops so a prebuilt can be used
* **XOSI SSDT**: Same as GPIO, they're universal so a prebuilt can be used

For EC renames, AWAC/RTC0 and PMC SSDTs, follow the "SSDTs: The long way"

## Running SSDTTime

Run the `SSDTTime.bat` file as Admin on the target machine and you should see something like this:

![](https://cdn.discordapp.com/attachments/456913818467958789/669260286007705623/unknown.png)

What are all these options?:

* `1. FixHPET    - Patch out IRQ Conflicts`
   * IRQ patching, mainly needed for X79, X99 and laptop users
* `2. FakeEC     - OS-aware Fake EC`
   * This is the SSDT-EC, required for Catalina users
* `3. PluginType - Sets plugin-type = 1 on CPU0/PR00`
   * This is the SSDT-PLUG, for Intel only
* `4. Dump DSDT  - Automatically dump the system DSDT`
   * Dumps your DSDT from your firmware


What we want to do is select option `4. Dump DSDT` first, then select `1. FixHPET`, and finally `3. PluginType`. This will give us some files, the ones we care about:

* SSDT-PLUG.**aml**
* SSDT-HEPT.**aml**
* oc_patches.plist

**Troubleshooting note**: See [General Troubleshooting](/troubleshooting/troubleshooting.md) if you're having issues running SSDTTime

# SSDTs: The long way

Well now the fun's over, as we still need some files that SSDTTime couldn't make


## Getting a copy of our DSDT

So to start, we'll need to get a copy of your DSDT from your firmware. This can be found in our SSDTTime folder after running `4. Dump DSDT`

## Compiling and decompiling DSDTs and SSDTs

#### macOS

So compiling DSDTs and SSDTs are quite easy with macOS, all you need is [MaciASL](https://github.com/acidanthera/MaciASL). To compile, just File -&gt; SaveAs -&gt; ACPI Machine Language Binary\(.AML\), decompiling is just opening the file in MaciASL.

#### Windows

Compiling and decompiling on windows is fairly simple though, you will need [iasl.exe](https://acpica.org/sites/acpica/files/iasl-win-20180105.zip) and Command Prompt:

```text
path/to/iasl.exe path/to/DSDT.aml
```

![](https://i.imgur.com/IY7HMof.png)

If compiled .aml file is provided, a decompiled .dsl file will be given and vice versa.

#### Linux

Compiling and decompiling with Linux is just as simple, you will need a special copy of [iasl](http://amdosx.kellynet.nl/iasl.zip) and terminal:

```text
path/to/iasl path/to/DSDT.aml
```

If compiled .aml file is provided, a decompiled .dsl file will be given and vice versa.

## Creating ACPI renames SSDTs

### EC Rename

**Finding the right EC patch**

Now that our DSDT is readable, search for `PNP0C09`. Should give you something similar to this:

![](https://i.imgur.com/lQ4kpb9.png)

As you can see our `PNP0C09` is found within the `Device (EC0)` meaning this is the device we want to rename.

> What happens if multiple `PNP0C09` show up

When this happens you need to figure out which is the main and which is not, it's fairly easy to figure out. Check each controller for the following properties:

* `_HID`
* `_CRS`
* `_GPE`

Note that only the main EC needs renaming, if you only have one `PNP0C09` then it is automatically your main regardless of properties. Now lets apply the EC patch!

As you can see from the table below, we'll be renaming our EC listed in the DSDT. Do note you cannot just throw random renames without checking first, as this can cause actual damage to your laptop.

|Comment|Find\*\[HEX\]|Replace\[HEX\]|
|:-|:-|:-|
|change EC0 to EC|4543305f|45435f5f|
|change H\_EC to EC|485f4543|45435f5f|
|change ECDV to EC|45434456|45435f5f|
|change PGEC to EC|50474543|45435f5f|

Inside your config under `ACPI -> Patch`(replace XXXX with the correct EC patch):

| Comment | String | Change XXXX to EC |
| :--- | :--- | :--- |
| Enabled | String | YES |
| Count | Number | 0 |
| Limit | Nuber | 0 |
| Find | Data | xxxxxxxx |
| Replace | Data | 45435f5f |

![](https://cdn.discordapp.com/attachments/456913818467958789/668667268254793728/Screen_Shot_2020-01-19_at_9.04.50_PM.png)

### PLUG SSDT

**Intel CPUs only**

CPU naming is fairly easy to figure out as well, open your decompiled DSDT and search for `Processor`. This should give you a result like this:

![](https://i.imgur.com/U3xffjU.png)

As we can see, the first processor in our list is `PR00`. This is what we'll be applying the `plugin-type=1` property too. Now grab [SSDT-PLUG](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-PLUG.dsl) and replace the default `CPU0` with our `PR00`. Note that there are 2 mentions of `CPU0` in the SSDT.

### AWAC SSDT

**This is required for most Coffee Lake 9th gen laptops, double check if you need by reading below** 

What the [SSDT-AWAC](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-AWAC.dsl) will do is force enable the Legacy RTC device in macOS, the reason we want to do this is that macOS currently does not support AWAC as a system clock. In some rare cases, there is no Legacy RTC device to force enable so we'll need to create a fake RTC device for macOS to play with using [SSDT-RTC0](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-RTC0.dsl)

To determine whether you need [SSDT-AWAC](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-AWAC.dsl) or [SSDT-RTC0](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-RTC0.dsl), open your decompiled DSDT and search for `Device (AWAC)`. If you get a result then you have an `AWAC` system clock present, **if nothing shows then no need to continue and no need for this SSDT**. Otherwise, continue with the next search for `STAS ==`:

![](https://i.imgur.com/uuUF857.png)

As you can see we found the `STAS ==` in our DSDT, this means we're able to force enable our Legacy RTC. In this case, [SSDT-AWAC](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-AWAC.dsl) will be used As-Is with no modifications required. Just need to compile.

For systems where no `STAS` shows up but you do have `AWAC`, you can use [SSDT-RTC0](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-RTC0.dsl) though you will need to check whether your DSDT uses `LPCB`, `LBC` or `LBC0`. 

By default it uses `LPCB`, you can check by just searching for `Name (_ADR, 0x001F0000)`. This address is used for Low Pin Count devices(LPC) but the device name can vary between `LPCB`, `LBC` or `LBC0`. Just search each one in your config and which ever shows up is the one your system uses

![](https://cdn.discordapp.com/attachments/456913818467958789/670148514197667840/Screen_Shot_2020-01-23_at_11.08.30_PM.png)

### PMC SSDT

**This is required for all Coffee Lake 9th gen laptops**
This SSDT brings back NVRAM support and uses the scope `PCI0.LPCB` to check what scope your system has, search your DSDT for `Name (_ADR, 0x001F0000)`. This address is used for Low Pin Count devices(LPC) but the device name can vary between `LPCB`, `LBC` or `LBC0`. Just search each one in your config and which ever shows up is the one your system uses

![](https://cdn.discordapp.com/attachments/456913818467958789/670148514197667840/Screen_Shot_2020-01-23_at_11.08.30_PM.png)



## Cleaning up

Now that we have all our SSDTs compiled, the last thing to do is add our SSDTs to both EFI/OC/ACPI and our config under ACPI -&gt; Add. A reminder that ProperTree users can press the hotkey Cmd/Ctrl+R for automatically adding your SSDTs to the config. A reminder that there is no need to add your DSDT as its already inside your firmware.

But wait, there is one more grueling task: merging oc_patches.plist into our config.plist

Steps to do this:

* Open both files, 
* Delete the `ACPI -> Patch` section from config.plist
* Copy the `ACPI -> Patch` section from patches.plist
* Paste into where old patches were in config.plist
