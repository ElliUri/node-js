const fs = require("fs")

const text = "Делегируйте вопрос написания \r\n качественных текстов опытным авторам: посты для соцсетей, SEO-оптимизированные статьи на сайт, продающие   \r\n описания для карточек товаров. Закажите перевод или редактуру текстов.";

// write to  file 
const pathToFile = "d02/n_1.txt";

fs.writeFileSync(pathToFile, text, {encoding: "utf-8", flag: "a"});


// write file from array 

const text2 = [
    "привет ",
    "меня",
    "зовут"
]

fs.writeFileSync("./d02/n_2.txt", text2.join("\r\n"), {encoding: "utf8", flag: "w"})