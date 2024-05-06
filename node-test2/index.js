// Подключаем модули для работы с ФС - файловой системой
const fs = require("fs")
const path = require("path");

// Проверяем существование папки fs.existSync()
function f01() {
    const pathToDir = "./test"
    if(fs.existsSync(pathToDir)){
        console.log("yes");

    } else {
        console.log("no");
    }
}

// f01()

// Проверка существования файла 
function f02() {
    const pathToFile = "./test/potter.doc"
    if(fs.existsSync(pathToFile)){
        console.log("yes");

    } else {
        console.log("no");
    }
}
// f02()

// вычисление размера файла
function f03() {
    const pathToFile = "./test/Pharrell Williams - Happy.mp3"
    const fileInfo = fs.statSync(pathToFile)

    console.log(fileInfo.size);

}
// f03();


// Имя и расширение файла
function f04() {
    const pathToFile = "./test/Pharrell Williams - Happy.mp3"
    console.log(path.extname(pathToFile));
    console.log(path.dirname(pathToFile));
    console.log(path.parse(pathToFile));
    console.log(path.basename(pathToFile));

}
// f04()

// Получаем файлы и папки в директории 
function f05() {
    const pathToDir = "."
    const allFiles  = fs.readdirSync(pathToDir);
    console.log(allFiles);

    let out  = "";
    allFiles.forEach(item => out += item + "\n");
    console.log(out);
}
// f05();

// Получить абсолютный  путь 
const directoryPath = path.join(__dirname, 'test')
console.log(directoryPath);
console.log(__dirname);