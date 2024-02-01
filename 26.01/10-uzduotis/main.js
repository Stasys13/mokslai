

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let number1 = rand(1000, 9999);
let number2 = rand(1000, 9999);
let number3 = rand(1000, 9999);
let number4 = rand(1000, 9999);
let number5 = rand(1000, 9999);
let number6 = rand(1000, 9999);

let sorted =  [number1, number2, number3, number4, number5, number6].sort((a, b) => b - a);
let result = sorted.join(` `)
console.log (result);