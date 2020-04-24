const fs = require("fs");

process.chdir(__dirname);

console.log("Reading dictionary.txt");
let dictionary = fs.readFileSync("../dictionary.txt", { encoding: "UTF8" })
                    .replace("\r", "").split("\n");

console.log("Sorting...");
dictionary.sort();

console.log("Writing dictionary.txt");
fs.writeFileSync("../dictionary.txt", dictionary.join("\n"));