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

console.log("Solution # 11");
let evenNum = [1, 2, 3, 4, 5, 6];
const evenNumR = evenNum.filter(evenNum => evenNum % 2 === 0);
console.log(evenNumR);

console.log("Solution # 12");
let negNum =  [-3, 4, -1, 7, -5];
const negNumR = negNum.filter(negNum => negNum >= 0 )
console.log(negNumR);

console.log("Solution # 13");
let names4ch =  ["Joe", "Elizabeth", "Tom", "Anna"];
const names4chR = names4ch.filter(names4ch => names4ch.length >= 4)
console.log(names4chR);

console.log("Solution # 14");
let actUsers = [{name: "Alice", active: true}, {name: "Bob", active: false}]
const actUsersR = actUsers.filter(actUsers => actUsers.active == true);
console.log(actUsersR);

console.log("Solution # 15");
let wordNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Fiona", "George"];
const wordNamesR = wordNames.filter(wordNames => wordNames.startsWith("A"))
console.log(wordNamesR);

console.log("Solution # 16");
let g10Num = [5, 8, 10, 15, 20, 22];
const g10NumR = g10Num.filter(g10Num => g10Num > 10)
console.log(g10NumR);

console.log("Solution # 17");
let falsyVal = [0, 1, false, 4, "", 10, null, undefined, NaN, "null"];
const falsyValR = falsyVal.filter(falsyVal => Boolean(falsyVal));
console.log(falsyValR);

console.log("Solution # 18");
let itemsCode = ["write code", "read book", "code review", "exercise"];
const itemsCodeR = itemsCode.filter(itemsCode => itemsCode.includes("code") )
console.log(itemsCodeR);

console.log("Solution # 19");
let nulValue = [1, null, 2, undefined, 3, null];
const nulValueR = nulValue.filter(nulValue => nulValue != null);
console.log(nulValueR);

console.log("Solution # 20");
let price99 = [{name: "Phone", price: 99}, {name: "Tablet", price: 120}];
const price99R = price99.filter(price99 => price99.price < 100);
console.log(price99R);

console.log("Solution # 21");
let reduceNum = [1, 2, 3, 4];
const reduceNumR = reduceNum.reduce((a, b) => a + b);
console.log(reduceNumR);

console.log("Solution # 22");
let reduceMax = [10, 20, 30, 40];
const reduceMaxR = reduceMax.reduce ((a, b) => a > b ? a : b);
console.log(reduceMaxR);

console.log("Solution # 23");
let redFruit = ["apple", "banana", "apple", "orange", "banana"];
// const redFruitR = redFruit.reduce((a,b) => a + a ? a:b = count[redFruit])
const redFruitR = redFruit.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(redFruitR);


console.log("All Completed");