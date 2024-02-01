function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėmis reikšmėmis nuo 0 iki 100. Suskaičiuokite jų aritmetinį vidurkį.
let a = rand(0, 100)
let b = rand(0, 100)
let c = rand(0, 100)
console.log(a, b, c);

let sum = (a + b + c);
let digits = 3;

let average = sum / digits;
document.write(`Pirmas vidurkis : ${average}`);

// Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. 
let suma = 0;
let kiekis = 0;

if  (a > 10 && a < 90 ) {
    suma += a;
    kiekis++;
}

if  (b > 10 && b < 90 ) {
    suma += b;
    kiekis++;
}
if  (c > 10 && c < 90 ) {
    suma += c;
    kiekis++;
}
if(suma === 0 && kiekis === 0) {
    console.log(`Vidurkio nera`)
}

console.log(suma, kiekis);

document.write(`<h3>Antras vidurkis: ${suma / kiekis}</h3>`);






