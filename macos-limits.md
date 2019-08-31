# macOS limitations

With laptops, there are several limitations regarding hardware that will not work.

* Fingerprint sensors
    * There is no way to emulate the Touch ID sensor as of currently, so fingerprint sensors will not work.
* Discrete GPUs
    * 90% of discrete GPUs will not work because they are wired in a configuration that macOS doesn't support (switchable graphics). With NVIDIA discrete GPUs, this is usually called Optimus. It is not possible to utilize these dGPUs for the internal display, so it is generally advised to disable them and power them off (will be covered later in this guide.) 
    * However, in some cases, the discrete GPU powers any external outputs (HDMI, mini DisplayPort, etc.), which may or may not work; in the case that it will work, you will have to keep the card on and running. 
    * However, there are some laptops which rarely do not have switchable graphics, so the discrete card can be used, but the wiring and setup usually causes
* AMD CPU laptops
    * AMD CPU laptops, while theoretically able to work, are not practical for the following reasons:
        * No CPU power management, so battery life will be bad
        * Non-native support, requiring kernel patches, resulting in delayed updates
        * No support for AMD integrated graphics (Radeon R5, R7, etc.)
* Most WiFi cards
    * Most WiFi cards that come with laptops are not supported as they are usually Intel/Qualcomm.
    * If you are lucky, you may have a supported Atheros card, but support only runs up to High Sierra (Mojave works with AirportAtheros40 from High Sierra, but not with Catalina).
    * The best option is getting a Broadcom card; see MykolaG's [WiFi buyer's guide](https://khronokernel-7.gitbook.io/wireless-buyers-guide/) for recommendations.