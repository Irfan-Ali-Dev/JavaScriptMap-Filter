console.log("Hello Map & Filter");

console.log("Solution # 1");
let eachNum = [1, 2, 3, 4, 5];
const eachNumR = eachNum.map(num => num * 2);
console.log(eachNumR);

console.log("Solution # 2");
let upFruits = ["apple", "banana", "cherry"];
const upcase = upFruits.map(upFruits => upFruits.toUpperCase());
console.log(upcase);

console.log("Solution # 3");
let extName = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
const extNameR = extName.map(extName => extName.name);
console.log(extNameR);

console.log("Solution # 4");
let wordLenght = ["dog", "elephant", "tiger"];
const wordLenghtR = wordLenght.map(wordLenght => wordLenght.length);
console.log(wordLenghtR);

console.log("Solution # 5");
let task = ["task1", "task2", "task3"];
const taskDone = task.map(task => task + "-Done");
console.log(taskDone);

console.log("Solution # 6");
let sqrEachNum =  [2, 4, 6, 8];
const sqrEachNumR = sqrEachNum.map(sqrEachNum => sqrEachNum * sqrEachNum);
console.log(sqrEachNumR);

console.log("Solution # 7");
let arrPrices = [250, 400, 600, 800];
const arrPricesR = arrPrices.map(arrPrices => `$${arrPrices}`);
console.log(arrPricesR);

console.log("Solution # 8");
let sDates = [new Date("2024-01-01"), new Date("2024-06-15"), new Date("2024-12-31")];
const sDatesFormatted = sDates.map(sDates => sDates.toDateString());
console.log(sDatesFormatted);

console.log("Solution # 9");
let bolNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bolNumsR = bolNums.map(bolNums => bolNums % 2 === 0);
console.log(bolNumsR);

console.log("Solution # 10");
let append = ["dog", "elephant", "tiger", "dog", "elephant", "tiger"];
const appendR = append.map((append, index) => append + `-${index}` );
console.log(appendR);

