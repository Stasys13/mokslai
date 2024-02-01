// Kintamasis = Variable
// Funkcija = Function
// Stringas = string
// Skaičius = number

console.log("Labas 'Šaunusis' Pasauli");

let vardas = 'Jonas';

console.log(vardas + ' Pavardenis');

let miestas = 'Vilnius';
let adresas = 'Saltoniškių g. 19';
let telefonas = '+37058161566';

// console.log('Gauti duomenys: ' + miestas + ' ' + adresas + ' ' + telefonas);

// Template literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
let rezultatas = `Gauti duomenys: 
                    Miestas: ${miestas}  
                    Adresas: ${adresas} 
                    Telefonas: ${telefonas}
                `;
console.log(rezultatas);

console.log(miestas, adresas, telefonas);

let x = 18;
let y = 25;

rezultatas = x + y;

console.log(rezultatas);

// Norint patikrinti duomens tipą
console.log(typeof rezultatas);

if(x > y) {
    console.log('X daugiau negu Y');
} 
else if(x === y) {
    console.log('X yra lygu Y');
} else {
    console.log('Y yra daugiau negu X');
}

// Vienas lygybės ženklas nurodo reikšmės priskyrimą, ne tikrinimą
if(x = y) {
    console.log(x);
}

x = false; //Boolean

if(x) {
    console.log('X reikšmė yra teigiama');
} else {
    console.log('X reikšmė yra neigiama');
}

// ! not operatorius
if(!x) {
    console.log('X reikšmė yra neigiama');
} else {
    console.log('X reikšmė yra teigiama');
}

x = 16;

// Vienas lygybės ženklas prieš šauktuką netikrina duomens tipo
// Du lygybės ženklai nurodo duomens tipo tikrinimą
if(x !== 0) {
    console.log('X nelygu nuliui');
}

// Norint išvesti turinį į naršyklės langą
document.write('<h1>Labas Pasauli</h1>');

// Atsitiktinio skaičiaus generavimo funkcija
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Atsitiktinio skaičiaus nuo 0 iki 100 sukūrimas ir priskyrimas prie kintamojo
let a = rand(0, 10); 
let b = rand(0, 10);

if(a > b) {
    document.write('<h3>A yra daugiau negu B</h3>');
} else if(a === b) {
    document.write('<h3>A yra lygu B</h3>')
} else {
    document.write('<h3>B yra daugiau negu A</h3>');
}

// Stringų palyginimas
let gamintojas = 'Samsung';
let produktas = 'Televizorius';
// let ilgis = produktas.length - 1;

// Stringo pozicijų kiekio susigrąžinimas
console.log(produktas.length - 1);

// Paskutinio simbolio paėmimas
console.log(produktas[produktas.length - 1]);

// Pirmo simbolio paėmimas
console.log(produktas[0]);
