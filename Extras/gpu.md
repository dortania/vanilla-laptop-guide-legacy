# List of extra iGPU data

* [Ivy Bridge](/Extras/gpu.md#ivy-bridge)
* [Haswell](/Extras/gpu.mdhaswell)
* [Broadwell](/Extras/gpu.md#broadwell)
* [Skylake](/Extras/gpu.md#skylake)
* [Kaby Lake](/Extras/gpu.md#kaby-lake)
* [Coffee Lake / Comet Lake](/Extras/gpu.md#coffee-lake-comet-lake)
* [Ice Lake](/Extras/gpu.md#ice-lake)


## Ivy Bridge

| iGPU | device-id | AAPL,ig-platform-id | Port Count | Stolen Memory | Framebuffer Memory | Video RAM | Connectors |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Intel HD Graphics 4000 | 66010001 | 01006601 | 4 | 96MB | 24MB | 1536MB | LVDSx1 HDMIx1 DPx2 |
| Intel HD Graphics 4000 | 66010002 | 02006601 | 1 | 64MB | 24MB | 1536MB | LVDSx1 |
| **Intel HD Graphics 4000 1** \* | 66010003 | 03006601 | 4 | 64MB | 16MB | 1536MB | LVDSx1 DPx3 |
| **Intel HD Graphics 4000 2** | 66010004 | 04006601 | 1 | 32MB | 16MB | 1536MB | LVDSx1 |
| Intel HD Graphics 4000 | 66010008 | 08006601 | 3 | 64MB | 16MB | 1536MB | LVDSx1 DPx2 |
| **Intel HD Graphics 4000 3** | 66010009 | 09006601 | 3 | 64MB | 16MB | 1536MB | LVDSx1 DPx2 |

#### Special Notes:

* For these cards, no `device-id` property is required.
* 1 : to be used with 1366 by 768 displays or lower \(main\)
* 2 : to be used with 1600 by 900 displays or higher \(main\)
* 3 : to be used with some devices that have `eDP` connected monitor \(contrary to classical LVDS\), must be tested with 1 and 2 first then try this.
* VGA is _not_ supported \(unless it's running through a DP to VGA internal adapter, which apparently only rare devices will see it as DP and not VGA, it's all about luck.\)
* For `04006601` platform, as you can tell, it has only one output, which is not enough for external connectors \(HDMI/DP\), you may need to add these extra parameters \(credit to Rehabman\)

  | Key | Type | Value | Explanation |
  | :--- | :--- | :--- | :--- |
  | `framebuffer-patch-enable` | Number | `1` | _enabling the semantic patches in principle_ \(from WEG manual\) |
  | `framebuffer-memorycount` | Number | `2` | Matching FBMemoryCount to the one on `03006601` \(1 on `04` vs 2 on `03`\) |
  | `framebuffer-pipecount` | Number | `2` | Matching PipeCount to the one on `03006601` \(3 on `04` vs 2 on `03`\) |
  | `framebuffer-portcount` | Number | `4` | Matching PortCount to the one on `03006601` \(1 on `04` vs 4 on `03`\) |
  | `framebuffer-stolenmem` | Data | `00000004` | Matching STOLEN memory to 64MB \(0x04000000 from hex to base 10 in Bytes\) to the one on `03006601` Check [here](https://www.tonymacx86.com/threads/guide-alternative-to-the-minstolensize-patch-with-32mb-dvmt-prealloc.221506/) for more information. |
  | `framebuffer-con1-enable` | Number | `1` | This will enable patching on _connector1_ of the driver. \(Which is the second connector after con0, which is the eDP/LVDS one\) |
  | `framebuffer-con1-alldata` | Data | `02050000 00040000 07040000 03040000 00040000 81000000 04060000 00040000 81000000` | When using `all data` with a connector, either you give all information of that connector \(port-bused-type-flag\) or that port and the ones following it, like in this case. In this case, the ports in `04` are limited to `1`: `05030000 02000000 30020000` \(which corresponds to port 5, which is LVDS\) However on `03` there are 3 extra ports: `05030000 02000000 30000000` \(LVDS, con0, like `04`\) `02050000 00040000 07040000` \(DP, con1\) `03040000 00040000 81000000` \(DP, con2\) `04060000 00040000 81000000` \(DP, con3\) Since we changed the number of PortCount to `4` in a platform that has only 1, that means we need to define the 3 others \(and we that starting with con1 to the end\).  |

* Some laptops from this era came with a mixed chipset setup, using Ivy Bridge CPUs with Sandy Bridge chipsets which creates issues with macOS since it expects a certain IMEI ID that it doesn't find and would get stuck at boot, to fix this we need to fake the IMEI's IDs in these models
  * To know if you're affected check if your CPU is an intel Core ix-3xxx and your chipset is Hx6x \(for example a laptop with HM65 or HM67 with a Core i3-3110M\)
  * In your config add a new PciRoot device named `PciRoot(0x0)/Pci(0x16,0x0)`
    * Key: `device-id`
    * Type: Data
    * Value: `3A1E0000`

## Haswell

| iGPU | device-id | AAPL,ig-platform-id | Port Count | Stolen Memory | Framebuffer Memory | Video RAM | Connectors |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Intel HD Graphics 4400 | 160a000c | 0c00160a | 3 | 64MB | 34MB | 1536MB | LVDSx1 DPx2 |
| **Intel HD Graphics 5000 1** | 260a0005 | 0500260a | 3 | 32MB | 19MB | 1536MB | LVDSx1 DPx2 |
| **Intel HD Graphics 5000 2** | 260a0006 | 0600260a | 3 | 32MB | 19MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Graphics 5100 | 2e0a0008 | 08002e0a | 3 | 64MB | 34MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Pro Graphics 5200 | 260d0007 | 0700260d | 4 | 64MB | 34MB | 1536MB | LVDSx1 DPx2 HDMIx1 |
| Intel Iris Pro Graphics 5200 | 260d0009 | 0900260d | 1 | 64MB | 34MB | 1536MB | LVDSx1 |
| Intel Iris Pro Graphics 5200 | 260d000e | 0e00260d | 4 | 96MB | 34MB | 1536MB | LVDSx1 DPx2 HDMIx1 |
| Intel Iris Pro Graphics 5200 | 260d000f | 0f00260d | 1 | 96MB | 34MB | 1536MB | LVDSx1 |

#### Special Notes:

* 1: to be used usually with HD5000, HD5100 and HD5200
  * The device-id of these devices _should_ be supported already by the native macOS drivers.
* 2: to be used usually with HD4200, HD4400 and HD4600.
  * You **must** use `device-id` = `12040000`
* In some cases, just using these values directly would cause some glitches to show up, to mitigate them, we change the size of the cursor byte:
  * `framebuffer-patch-enable` = `1` \(as a Number\)
  * `framebuffer-cursor` = `00009000` \(as Data\)
    * We change the cursor byte from 6MB \(00006000\) to 9MB because of some glitches.

## Broadwell

| iGPU | device-id | AAPL,ig-platform-id | Port Count | Stolen Memory | Framebuffer Memory | Video RAM | Connectors |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Unlisted iGPU | 06160002 | 02000616 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Unlisted iGPU | 0e160001 | 01000e16 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 5600 | 12160003 | 03001216 | 4 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 HDMIx1 |
| Intel HD Graphics 5500 | 16160002 | 02001616 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 5300 | 1e160001 | 01001e16 | 3 | 38MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Pro Graphics 6200 | 22160002 | 02002216 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 6000 | 26160002 | 02002616 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 6000 | 26160005 | 05002616 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| **Intel HD Graphics 6000** \* | 26160006 | 06002616 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Graphics 6100 | 2b160002 | 02002b16 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |

#### Special Notes:

* For HD5300, HD5500 and HD6000, you do not have to specify any `device-id`
* For HD5600 you need `device-id` faked to `26160000`
* In some cases where you cannot set the DVMT-prealloc of these cards to 96MB higher in your UEFI Setup, you may get a kernel panic. Usually they're configured for 32MB of DVMT-prealloc, in that case these values are added to your iGPU Properties

  | Key | Type | Value |
  | :--- | :--- | :--- |
  | `framebuffer-patch-enable` | Number | `1` |
  | `framebuffer-stolenmem` | Data | `00003001` |
  | `framebuffer-fbmem` | Data | `00009000` |

## Skylake

| iGPU | device-id | AAPL,ig-platform-id | Port Count | Stolen Memory | Framebuffer Memory | Video RAM | Connectors |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Intel HD Graphics 530 | 12190000 | 00001219 | 3 | 34MB | 21MB | 1536MB | DUMMY1 DPx2 |
| **Intel HD Graphics 520** | 16190000 | 00001619 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 520 | 16190002 | 02001619 | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| **Intel HD Graphics 530** \* | 1b190000 | 00001b19 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 530 | 1b190006 | 06001b19 | 1 | 38MB | 0MB | 1536MB | LVDSx1 |
| Intel HD Graphics 515 | 1e190000 | 00001e19 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 515 | 1e190003 | 03001e19 | 3 | 40MB | 0MB | 1536MB | LVDSx1 DPx2 |
| **Intel Iris Graphics 540** | 26190000 | 00002619 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Graphics 540 | 26190002 | 02002619 | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Graphics 540 | 26190004 | 04002619 | 3 | 34MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Graphics 540 | 26190007 | 07002619 | 3 | 34MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Graphics 550 | 27190000 | 00002719 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Graphics 550 | 27190004 | 04002719 | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Pro Graphics 580 | 3b190000 | 00003b19 | 3 | 34MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Pro Graphics 580 | 3b190005 | 05003b19 | 4 | 34MB | 21MB | 1536MB | LVDSx1 DPx3 |

#### Special Notes:

* For HD515, HD520, HD530 and HD540, you do not need to use `device-id` faking, they're natively recognised.
  * I would recommend you keep the `AAPL,ig-platform-id` automatically recognised for each device-id by commenting/removing its entry in the config, otherwise it is recommended to choose `00001619`.
* For HD510 you may need to use `device-id`=`02190000` to fake its device-id.
  * You would need also to use `AAPL,ig-platform-id`=`00001B19` or `00001619`
* For HD550 and P530 \(and potentially all HD P-series iGPUs\), you may need to use `device-id`=`16190000`\(recommended\) or `12190000` or `26190000` or `1b190000`
  * The choice of device-id may help with usable screen on boot up and on wake.
    * For example Lenovo ThinkPad P50 with Xeon CPU will only properly work with `1619`.
    * For example Dell Precision 7710 with i7 CPU has issues when set to `1619`, using `1b19` or something else may help.
    * It is also recommended using `2619` with Xeon iGPUs.
  * You may also pair it with a proper `AAPL,ig-platform-id`=`00001619`\(recommended\) or `00001219` or `00002619` or `00001b19`
* In some cases where you cannot set the DVMT-prealloc of these cards to 64MB higher in your UEFI Setup, you may get a kernel panic. Usually they're configured for 32MB of DVMT-prealloc, in that case these values are added to your iGPU Properties

  | Key | Type | Value |
  | :--- | :--- | :--- |
  | `framebuffer-patch-enable` | Number | `1` |
  | `framebuffer-stolenmem` | Data | `00003001` |
  | `framebuffer-fbmem` | Data | `00009000` |

## Kaby Lake, KBL-R

| iGPU | device-id | AAPL,ig-platform-id | Port Count | Stolen Memory | Framebuffer Memory | Video RAM | Connectors |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Intel HD Graphics 620** | 16590000 | 00001659 | 3 | 34MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 620 | 16590009 | 09001659 | 3 | 38MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Unlisted iGPU | 18590002 | 02001859 | 0 | 0MB | 0MB | 1536MB | Connector: |
| **Intel HD Graphics 630** | 1b590000 | 00001b59 | 3 | 38MB | 21MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 630 | 1b590006 | 06001b59 | 1 | 38MB | 0MB | 1536MB | LVDSx1 |
| Unlisted iGPU | 1c590005 | 05001c59 | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 615 | 1e590000 | 00001e59 | 3 | 34MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel HD Graphics 615 | 1e590001 | 01001e59 | 3 | 38MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Plus Graphics 640 | 26590002 | 02002659 | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Plus Graphics 650 | 27590004 | 04002759 | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Plus Graphics 650 | 27590009 | 09002759 | 3 | 38MB | 0MB | 1536MB | LVDSx1 DPx2 |
| **Intel UHD Graphics 617** | C0870000 | 0000C087 | 3 | 34MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel UHD Graphics 617 | C0870005 | 0500C087 | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |

#### Special Notes:

* For `HD615`, `HD620`, `HD630`, `HD640` and `HD650` it is not needed to use a `device-id`, however due to many issues with different setups it is recommended to use:
  * `device-id`=`1b590000` or `16590000`
  * `AAPL,ig-platform-id`=`00001659` or `00001b59` \(you can try whichever works the best, some even try to cross the device-id and the ig-platform-id\)
    * For HD620 users, they can skip the part above \(unless you get issues\)
* For `UHD620` users, you **must** use:
  * `device-id`=`87C00000`
  * `AAPL,ig-platform-id`=`0000C087`
    * **Note:** `UHD630` _**IS NOT**_ KabyLake, it's CoffeeLake \(check next section\).
* For all HD6\*\* \(`UHD` users are not concerned\), there are some small issues with output where plugging anything would cause a lock up \(kernel panic\), here are some patches to mitigate that \(credit Rehabman\):

  * 0306 to 0105 \(will probably explain what it does one day\)

  | Key | Type | Value |
  | :--- | :--- | :--- |
  | `framebuffer-con1-enable` | Number | `1` |
  | `framebuffer-con1-alldata` | Data | `01050A00 00080000 87010000 02040A00 00080000 87010000 FF000000 01000000 20000000` |

  * 0204 to 0105 \(will probably explain what it does one day\)

  | Key | Type | Value |
  | :--- | :--- | :--- |
  | `framebuffer-con1-enable` | Number | `1` |
  | `framebuffer-con1-alldata` | Data | `01050A00 00080000 87010000 03060A00 00040000 87010000 FF000000 01000000 20000000` |

* In some cases where you cannot set the DVMT-prealloc of these cards to 64MB higher in your UEFI Setup, you may get a kernel panic. Usually they're configured for 32MB of DVMT-prealloc, in that case these values are added to your iGPU Properties

  | Key | Type | Value |
  | :--- | :--- | :--- |
  | `framebuffer-patch-enable` | Number | `1` |
  | `framebuffer-stolenmem` | Data | `00003001` |
  | `framebuffer-fbmem` | Data | `00009000` |

## Coffee Lake, Comet Lake

| iGPU | device-id | AAPL,ig-platform-id | Port Count | Stolen Memory | Framebuffer Memory | Video RAM | Connectors |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Intel UHD Graphics 630 | 003E0000 | 0000003E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel UHD Graphics 630 | 923E0000 | 0000923E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel UHD Graphics 630 | 923E0009 | 0900923E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DUMMYx2 |
| **Intel UHD Graphics 630** | 9B3E0000 | 00009B3E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel UHD Graphics 630 | 9B3E0006 | 06009B3E | 1 | 38MB | 0MB | 1536MB | LVDSx1 DUMMYx2 |
| Intel UHD Graphics 630 | 9B3E0009 | 09009B3E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Plus Graphics 655 | A53E0000 | 0000A53E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Plus Graphics 655 | A53E0004 | 0400A53E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel UHD Graphics 630 | A53E0005 | 0500A53E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Intel Iris Plus Graphics 655 | A53E0009 | 0900A53E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |
| Unlisted iGPU | A63E0005 | 0500A63E | 3 | 57MB | 0MB | 1536MB | LVDSx1 DPx2 |

#### Special Notes:

* For `UHD630` you may not need to fake the `device-id`  as long as it's `8086:9B3E`, if it's anything else, you may use `device-id`=`9B3E0000`
* For `UHD620` in a Comet Lake CPU **requires**:
  * `device-id`=`9B3E0000`
  * `AAPL,ig-platform-id`=`00009B3E`


## Ice Lake

| iGPU | device-id | AAPL,ig-platform-id | Port Count | Stolen Memory | Framebuffer Memory | Connectors |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ice Lake HD | FF050000 | 000005FF | 3 | 64MB | 0MB |  LVDSx1 DPx2 |
| Ice Lake HD | 8A710000 | 0000718A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Ice Lake HD | 8A700000 | 0000708A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Iris Plus | 8A510000 | 0000518A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Iris Plus | 8A5C0000 | 00005C8A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Ice Lake HD | 8A5D0000 | 00005D8A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| **Iris Plus** | 8A520000 | 0000528A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Ice Lake HD | 8A530000 | 0000538A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Iris Plus | 8A5A0000 | 00005A8A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Ice Lake HD | 8A5B0000 | 00005B8A | 6 | 64MB | 0MB |  LVDSx1 DPx5 |
| Ice Lake HD | 8A710001 | 0000718A | 5 | 64MB | 0MB |  LVDSx1 DP4 |
| Ice Lake HD | 8A700001 | 0000708A | 5 | 64MB | 0MB |  LVDSx1 DP4 |
| Ice Lake HD | 8A510001 | 0100518A | 3 | 64MB | 0MB |  LVDSx1 DPx2 |
| Ice Lake HD | 8A5C0001 | 01005C8A | 3 | 64MB | 0MB |  LVDSx1 DPx2 |
| Ice Lake HD | 8A5D0001 | 01005D8A | 3 | 64MB | 0MB |  LVDSx1 DPx2 |
| Ice Lake HD | 8A520001 | 0100528A | 5 | 64MB | 0MB |  LVDSx1 DP4 |
| Ice Lake HD | 8A530001 | 0100538A | 5 | 64MB | 0MB |  LVDSx1 DP4 |
| Ice Lake HD | 8A5A0001 | 01005A8A | 5 | 64MB | 0MB |  LVDSx1 DP4 |
| Ice Lake HD | 8A5B0001 | 01005B8A | 5 | 64MB | 0MB |  LVDSx1 DP4 |
| Iris Plus | 8A510002 | 0200518A | 3 | 64MB | 0MB |  LVDSx1 DPx2 |
| Iris Plus | 8A5C0002 | 02005C8A | 3 | 64MB | 0MB |  LVDSx1 DPx2 |
| Iris Plus | 8A520002 | 0200528A | 5 | 64MB | 0MB |  LVDSx1 DP4 |
| Iris Plus | 8A530002 | 0200538A | 5 | 64MB | 0MB |  LVDSx1 DP4 |