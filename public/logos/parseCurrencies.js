const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname);

let currencyJSON = {};
currencyJSON.currencies = [];

let filesList;
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  filesList = files.filter(function (e) {
    return path.extname(e).toLowerCase() === ".svg";
  });

  filesList.forEach(function (file) {
    let cur = {};
    let file2 = file.replace("-logo.svg", "");
    let index = file2.lastIndexOf("-");
    console.log(
      file2.slice(0, index) + " * " + file2.slice(index + 1) + " * " + file
    );
    cur.name = file2.slice(0, index);
    cur.symbol = file2.slice(index + 1);
    cur.logo = "/logos/" + file;
    cur.address = [];
    currencyJSON.currencies.push(cur);
  });
  console.log("Final JSON : " + JSON.stringify(currencyJSON));
});
