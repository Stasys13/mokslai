// LOGINIAI OPERATORIAI
console.log('-------------LOGINIAI OPERATORIAI-------------');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Iššaukiant funkciją gali būti perduodami argumentai (arguments)
let pirmasSkaicius = rand(0, 50);
let antrasSkaicius = rand(0, 50);

console.log(pirmasSkaicius, antrasSkaicius);

if(pirmasSkaicius == antrasSkaicius) {
    console.log('Skaičiai yra lygus netikrinant duomens tipo');
}

if(pirmasSkaicius === antrasSkaicius) {
    console.log('Skaičiai yra lygus tikrinant duomens tipą');
}

if(pirmasSkaicius != antrasSkaicius) {
    console.log('Pirmas skaičius nelygus antram netikrinant duomens tipo');
}

if(pirmasSkaicius !== antrasSkaicius) {
    console.log('Pirmas skaičius nelygus antram tikrinant duomens tipą');
}

if(pirmasSkaicius < antrasSkaicius) {
    console.log('Pirmas skaičius yra mažesnis uz antrajį')
}

if(pirmasSkaicius <= antrasSkaicius) {
    console.log('Pirmas skaičius yra mažesnis arba lygus antrajam')
}

if(pirmasSkaicius > antrasSkaicius) {
    console.log('Pirmas skaičius yra didesnis uz antrajį')
}

if(pirmasSkaicius >= antrasSkaicius) {
    console.log('Pirmas skaičius yra didesnis arba lygus antrajam')
}

// Stringų palyginimai
console.log('-------------STRINGŲ PALYGINIMAI-------------');

let pirmojiRaide = 'Alpės';
let antrojiRaide = 'Banglentės';

if(antrojiRaide > pirmojiRaide) {
    console.log('B yra aukščiau nei A');
}

// Kondicijų sujungimas
console.log('-------------AND OPERATORIUS-------------');

// Patikrinkite ar pirmas skaičius yra didesnis nei 25 ir mažesnis nei 40
console.log(`Gauta reikšmė: ${pirmasSkaicius}`);

if(pirmasSkaicius > 25) {
    if(pirmasSkaicius < 40) {
        console.log('Pirmas skaičius yra didesnis nei 25 ir mažesnis nei 40');
    }
}

// && - And (Ir) operatorius skirtas sujungti dviejoms kondicijoms. Rezultatui gauti visos kondicijos turi būti teisingos (True).
if(pirmasSkaicius > 25 && pirmasSkaicius < 40) {
    console.log('Pirmas skaičius yra didesnis nei 25 ir mažesnis nei 40');
}

// Patikrinkite ar pirmas skaicius yra didesnis nei 10, mazesnis nei 35, nelygus 16 ir 18

if( pirmasSkaicius > 10 && 
    pirmasSkaicius < 35 && 
    pirmasSkaicius !== 16 && 
    pirmasSkaicius !== 18
) {
    console.log('Visos keturios sąlygos yra teisingos');
}

// || - Or (Arba) operatorius kuriuo tikriname ar bent viena kondicija yra teisinga
// Patikrinkite ar pirmasSkaicius didesnis nei 25 arba antrasSkaicius yra mazesnis nei 10
console.log('-------------OR OPERATORIUS-------------');
console.log('Gautos reikšmės:', pirmasSkaicius, antrasSkaicius);
if(pirmasSkaicius > 25 || antrasSkaicius < 10) {
    console.log('Pirmas skaičius yra didesnis nei 25 arba antras skaičius yra mažesnis nei 10');
}

console.log('-------------APIMTIS (SCOPES)-------------');
// Global scope (Globali apimtis)
let rezultatas = '';

if(pirmasSkaicius > 10) {
    // Block scope (Bloko apimtis)
    rezultatas = 'Kondicijų pabaiga';
}

// Dar krūva kodo
// ...
// ...
// ...

// Norime atvaizduoti kintamajį
console.log(rezultatas);

console.log('-------------TERNARY OPERATORIUS-------------');

let ternaryOperatorius = pirmasSkaicius > 10 ? 'Pirmas skaičius didesnis nei 10' : false;

console.log(ternaryOperatorius);

console.log('-------------VIENOS EILUTĖS VEIKSMO KONDICIJA-------------');

if(antrasSkaicius > 25) 
    console.log('Antras skaičius didesnis nei 25');
