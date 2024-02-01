function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let a = rand(-10, 10);
let b = rand(-10, 10);
let c = rand(-10, 10);
console.log(a, b, c);

if(a < 0) {
    document.write(`<span style="color: green"> ${a} </span>`);
}
 else if (a === 0) {
    document.write(`<span style="color: red"> ${a} </span>`);
} else {
    document.write(`<span style="color: blue"> ${a} </span>`);
}

if(b < 0) {
    document.write(`<span style="color: green"> ${b} </span>`);
} else if (b === 0) {
    document.write(`<span style="color: red"> ${b} </span>`);
} else {
    document.write(`<span style="color: blue"> ${b} </span>`);
}

if(c < 0) {
    document.write(`<span style="color: green"> ${c} </span>`);
} else if (c === 0) {
    document.write(`<span style="color: red"> ${c} </span>`);
} else {
    document.write(`<span style="color: blue"> ${c} </span>`);
}

