console.log('-----------INCLUDES METODAS----------');
let string = 'Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25.';

// Includes metodas grąžina true arba false atsakymą ar ieškomas žodis egzistuoja nurodytame stringe
if(string.includes('rand() jiems')) {
    console.log('Stringe radome paminėtą funkciją rand()');
}

// 'Labas Pasauli'.includes()

console.log('-----------AT METODAS----------');

string = 'Naudokite funkcija rand().';

// at() metodas grąžina simbolį pagal pateiktą poziciją
console.log(string.at(-4));


console.log('-----------ENDSWITH METODAS----------');
// endsWith() tikrina ar stringas baigiasi nurodytu žodžiu ar fraze
if(string.endsWith('rand().')) {
    console.log('Stringas baigiasi funkcijos pavadinimu');
}

// string[2], skaičius 2 yra pozicija (index) arba indeksas

console.log('-----------INDEXOF METODAS----------');

string = 'Naudokite funkcija rand().';

console.log(`
    Funkcijos pavadinimas prasideda ties: 
    ${string.indexOf('rand()')}
    pozicija
`);

console.log('-----------REPLACE METODAS----------');
// Pakeičia pirma surastą reikšmę norima

string = 'Naudokite funkcija rand(). Funkcija rand() yra labai gera.';

let naujasStringas = string.replace('rand()', 'random()');

console.log(naujasStringas);

console.log('-----------REPLACEALL METODAS----------');
// Pakeičia visas surastas reikšmes norimomis

string = 'Naudokite funkcija rand(). Funkcija rand() yra labai gera.';

naujasStringas = string.replaceAll('rand()', 'random()');

console.log(naujasStringas);

console.log('-----------SKAIČIŲ APVALINIMAS----------');
// Math yra globalus objektas
// Jeigu turim skaičių po kablelio jį žymime tašku
let skaicius = 3.514151151;
let rezultatas = Math.round(skaicius);
// Suapvalinimas iki sveikojo skaičiaus
console.log(`Suapvalintas skaičius iki sveikojo pagal matematinę taisyklę ${rezultatas}`);

// Suapvalinimas iki žemesnio sveikojo skaičiaus
skaicius = 3.99999999;
rezultatas = Math.floor(skaicius);

console.log(`Suapvalintas skaičius floor metodu: ${rezultatas}`);

// Suapvalinimas iki aukštesnio sveikojo skaičiaus
skaicius = 3.00000001;
rezultatas = Math.ceil(skaicius);

console.log(`Suapvalintas skaičius ceil metodu: ${rezultatas}`);

// Suranda mažiausią skaičių
let maziausias = Math.min(55, 15, 88, 105, 12, 65); //Skaičių kiekis neribotas
// Suranda didžiausią skaičių
let didziausias = Math.max(55, 15, 88, 105, 12, 65); 

console.log(`Mažiausias skaičius yra: ${maziausias}`);
console.log(`Didžiausias skaičius yra: ${didziausias}`);

