const fs = require("fs");

//read json file

const data = fs.readFileSync('./d_04/j_01.json', {"encoding": "utf8"})
// console.log( data);
let dataObj = JSON.parse(data)
console.log(dataObj);