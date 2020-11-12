//const fs = require("fs");
const path = require("path");
const fs = require('fs-extra');

var files = ["package.json"];
var folders = ["node_modules"];
var destFolders = ["dist", "layer", "nodejs"];

let dest = __dirname;
for (const folder of destFolders) {
  dest = path.join(dest, folder);
  
  if (!fs.existsSync(dest)){
    fs.mkdirSync(dest);
  }  
}

for (const file of files) {
  const srcFile = path.join(__dirname, file);
  const destFile = path.join(dest, file);
  fs.copyFileSync(srcFile, destFile);
}

for (const folder of folders) {
  const srcFolder = path.join(__dirname, folder);
  const destFolder = path.join(dest, folder);
  fs.copySync(srcFolder, destFolder);
}
