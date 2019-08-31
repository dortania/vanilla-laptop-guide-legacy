# macOS limitations

With laptops, there are several limitations regarding hardware that will not work.

* Fingerprint sensors
    * There is no way to emulate the Touch ID sensor as of currently, so fingerprint sensors will not work.
* Discrete GPUs
    * 90% of discrete GPUs will not work because they are wired in a configuration that macOS doesn't support (switchable graphics). With NVIDIA discrete GPUs, this is usually called Optimus. It is not possible to utilize these dGPUs for the internal display, so it is generally advised to disable them and power them off (will be covered later in this guide.) 
    * However, in some cases, the discrete GPU powers any external outputs (HDMI, mini DisplayPort, etc.), which may or may not work; in the case that it will work, you will have to keep the card on and running. 
    * However, there are some laptops which rarely do not have switchable graphics, so the discrete card can be used (if supported by macOS), but the wiring and setup usually causes issues. 
* AMD CPU laptops
    * AMD CPU laptops, while theoretically able to work, are not practical for the following reasons:
        * No CPU power management, so battery life will be bad
        * Non-native support, requiring kernel patches, resulting in delayed updates
        * No support for AMD integrated graphics (Radeon R5, R7, etc.)
* Most WiFi cards
    * Most WiFi cards that come with laptops are not supported as they are usually Intel/Qualcomm.
    * If you are lucky, you may have a supported Atheros card, but support only runs up to High Sierra (Mojave works with AirportAtheros40 from High Sierra, but not with Catalina).
    * The best option is getting a Broadcom card; see MykolaG's [WiFi buyer's guide](https://khronokernel-7.gitbook.io/wireless-buyers-guide/) for recommendations.
* Samsung PM981 NVMe SSDs
    * These SSDs are not compatible (causing kernel panics) and they need updated firmware for a fix; however, since it is a OEM SSD Samsung does not release firmware to end users and no OEM has been found shipping firmware with a fix.
    * On a related note, Samsung 970 EVO Plus NVMe SSDs also had the same problem but it was fixed in a firmware update; get the update (Windows via Samsung Magician or bootable ISO) [here](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/).
* Thunderbolt USB C ports
    * (Hackintosh) Thunderbolt support is currently still iffy in macOS, even more so with Alpine Ridge controls, which most current laptops have. There have been attempts to keep the controller powered on, which allows Thunderbolt and USB C hotplug to work, but it comes at the cost of kernel panics and/or USB C breaking after sleep. If you want to use the USB C side of the port and be able to sleep, you must plug it in at boot and keep it plugged in.
    * Note: this does not apply to USB C only ports - only Thunderbolt 3 and USB C combined ports.
