function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
document.write(`<h1>Pirma uzduotis</h1>`);
let vardas = `Stasys`;
let pavarde = `Mosteika`;

let gimimometai =1983;
let data = 2024;

let amzius = data - gimimometai;


let rezultatas = `As esu: ${vardas} ${pavarde}. Man yra ${amzius}.`;

document.write(`<h3>As esu: Stasys Mosteika. Man yra 41.</h3>`)
console.log(rezultatas);

document.write(`<h1>Penkta uzduotis</h1>`)
let c = rand(1,6);
console.log(c)
document.write(`Rezultatas: <h${c}>${c}</h${c}>`);



document.write(`<h1>Antra uzduotis</h1>`)
let a = rand(0, 4); 
let b = rand(0, 4);
console.log(a, b)
document.write(`<h3>Gautos reikšmės: ${a} ${b}</h3>`)
let result;

if(a > b) {
    if(b !== 0) {
       result = a / b;
    } else result = `dalyba is nulio negalima`;

} else if (b > a) {
    if(a !== 0) {
       result = b / a;
    } else result = `dalyba is nulio negalima`;

} else  {
    result = 'reiksmes lygios';
}

if(typeof result === 'number') {
    document.write(result.toFixed(2));
} else {
    document.write(result);

}
document.write(`<h1>Ketvirta uzduotis</h1>`)

let random1 = rand(0, 2);
let random2 = rand(0, 2);
let random3 = rand(0, 2);
let random4 = rand(0, 2);
console.log(random1, random2, random3, random4);
document.write(`<h3>Gautos reiksmes: ${random1} 
                                     ${random2}
                                     ${random3}
                                     ${random4}</h3>`);

let zeroes = 0;
let ones = 0;
let twos = 0;

if(random1 === 0 ) {
   zeroes++;
} else if (random1 === 1) {
    ones++;
} else {
    twos++;
}

if(random2 === 0 ) {
    zeroes++;
} else if (random2 === 1) {
    ones++;
} else {
    twos++;
}

if(random3 === 0 ) {
    zeroes++;
} else if (random3 === 1) {
    ones++;
} else {
    twos++;
}

if(random4 === 0 ) {
    zeroes++;
} else if (random4 === 1) {
    ones++;
} else {
    twos++;
}

console.log(`Nuliu: ${zeroes} 
Vienetu: ${ones}
Dvejetu: ${twos}`
)

document.write(`Nuliu: ${zeroes} 
Vienetu: ${ones}
Dvejetu: ${twos}`
)

document.write(`<h1>Trecia uzduotis</h1>`)

let random01 = rand(0, 25);
let random02 = rand(0, 25);
let random03 = rand(0, 25);
console.log(random01, random02, random03,);

// random01 = 3;
// random02 = 6;
// random03 = 8;

// if(random01 <= random02) {
//     if(random02 <= random03) {
//         console.log(`Vidurinis skaičius yra ${random02}`);    
//     }
// }
// else {
//     if(random01 <= random03) {
//         console.log(`Vidurinis skaičius yra ${random01}`);
//     } else {
//         if(random03 >= random02) {
//             console.log(`vidurinis skaicius yra ${random03}`);
//         } else {
//             console.log(`Vidurinys skaicius yra ${random02}`);
//         }
//     }
// }

rezultatas = 0;


if(random02 <= random01) {
      if (random01 <= random03) {
        rezultatas = random01;
      }

} else {
    if(random02 >= random01) {
       if (random01 >= random03)
       rezultatas = random01;    
    }

}

if(random01 <= random02) {
    if (random02 <= random03) {
        rezultatas = random02;
    }

} else {
  if(random01 >= random02) {
      if (random02 >= random03)
      rezultatas = random02;   
  }

}

if(random01 <= random03) {
    if (random03 <= random02) {
        rezultatas = random03;
    }

} else {
  if(random01 >= random03) {
      if (random03 >= random02)
      rezultatas = random03;  
  }

}

document.write(`Vidurinis skaivius yra ${rezultatas}`);