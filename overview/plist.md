# What are plists?

Plists are "Property list" files that are often used to store a user's settings or information about a Kext. Config.plist is one such file, which is used to tell OpenCore how to behave. If you open a plist, they are usually formatted like an XML file where there is (almost) always keys assigned to values.

The most important part about a plist is that values almost always come in key/value pairs.

```xml
<key>Enabled</key> <!-- Key   -->
<true/>		   <!-- Value -->
```

Enabled is key, which has the value "True"

Values can be any one of four types
* Boolean
  * True/False. Generally written as `<true/>` or `<false/>`
* Integer
  * Whole numbers. Written as `<integer>255</integer>`
* Data
  * This is meant to represent generic data in Hex, though it is stored as base64 in the file.
  * `<data>AQAAAA==</data>` for example represents 01000000 in hex.
* String
  * Any sort of written text. Usually used for comments
  * `<string>External</string>`

In addition, there are 2 other types which are used for organizing data and listing data
* Dictionary
  * Can contain many values which all have their own keys
* Array
  * Can contain many values which don't have keys

Combining the both, we can do something like:
```xml
<key>Specs</key>
<dict>
  <key>CPU</key>
  <string>Intel i3-9100</string>
  <key>RAM</key>
  <array>
    <dict>
      <key>Manufacturer</key>
      <string>Vengeance</key>
      <key>Size</key>
      <integer>4096</integer>
    </dict>
    <dict>
      <key>Manufacturer</key>
      <string>Adata</string>
      <key>Size</key>
      <integer>2046</integer</integer>
    </dict>
  </array>
</dict>
```

There are two additional types:
* Real
* Date  
Though these are not used for OpenCore and thus should not be used in your Config.plist.

ProperTree makes this much easier to deal with. The same example used above looks something like this:

![ProperTree](/images/overview/propertree.jpg) 

Key value pairs are put side by side, so it's clear what value is for what key. Also allows you to right click and add new values easily and drag around entries. In addition, ProperTree also has a utility called "OC Snapshot" which will automatically add in all of your kexts, drivers, and SSDTs from your EFI. OC Snapshot Clear does the same thing but will also delete old kexts/drivers/SSDTs and re-add them all (in case the order gets screwed up).

