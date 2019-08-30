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
        * No internal graphics support
        * No CPU power management, so battery life will be bad
        * Non-native support, requiring kernel patches, resulting in delayed updates