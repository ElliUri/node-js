const fs = require("fs");

// write json file

const obj = {
    "course": "node js 2024",
    "sprints": 12, 
    "tasks": 165,
    "tags": ["fs", "file", "database"]
}

fs.writeFileSync('./d_04/j_01.json', JSON.stringify(obj), {"encoding": "utf8", flag: "w"})