// Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją rand(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let seconds = rand(0, 59);
let minutes = rand(0, 59);
let hours = rand(0, 23);

document.write(`<h3>Pries 300 sekundziu: ${hours} : ${minutes} : ${seconds}</h3>`);

let randomSeconds = rand(0, 300);
document.write(randomSeconds);

let newSeconds = randomSeconds + seconds;
let addMinutes = Math.floor(newSeconds / 60);

if(newSeconds > 59) {
    seconds = newSeconds - (addMinutes * 60);
}

minutes = minutes + addMinutes;

if (minutes > 59) {
    minutes = minutes - 60;
    hours++;
}

if (hours >= 24) {
    hours = 0;
}

document.write(`<h3>Po 300 sekundziu: ${hours} : ${minutes} : ${seconds}</h3>`);
