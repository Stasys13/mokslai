// OBJEKTO KŪRIMAS
const objektas = {
    // savybe (property)
    // key : value
    ugis: 180,
    svoris: 82,
    // Metodas (method)
    kmi: function() {
        return 'Skaičius'; 
    }
}

console.log(objektas.ugis);

// OBJEKTO SAVYBĖS KEITIMAS
objektas.amzius = 88;

console.log(objektas);

console.log(objektas.profesija);

// TRYNIMAS IŠ OBJEKTO
// delete objektas.ugis;
// console.log(objektas);

// console.log(document.querySelector('.app'));

// ELEMENTO TURINIO MODIFIKAVIMAS
document.querySelector('.app').innerHTML = `
            Ūgis: <strong>${objektas.ugis}</strong>
            Svoris: <strong>${objektas.svoris}</strong>
`;

// PRIDĖJIMAS PRIE ESAMO TURINIO
document.querySelector('.app').innerHTML += `
            Amžius: <strong>${objektas.amzius}</strong>
`;

document.querySelector('.app').classList.add('red');

// BLOKELI& UŽPILDYMAS KVADRATE
const game = document.querySelector('.game');

for(let i = 0; i < 16; i++) {
    game.innerHTML += '<div></div>';
}

