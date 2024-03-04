// CALLBACK HELL PAVYZDYS

// console.log('Veiksmų pradžia');

// fetch('https://www.google.com')
// .then(resp => resp.text())
// .then(resp => {
//     console.log('Gautas rezultatas iš google')

//     fetch('https://www.15min.lt')
//     .then(resp => resp.text())
//     .then(resp1 => {
//         console.log('Gautas rezultatas iš 15min');

//         fetch('https://www.delfi.lt')
//         .then(resp => resp.text())
//         .then(resp2 => {
//             console.log('Gautas rezultatas iš delfi')
//             
//         });
//     });
// });

// console.log('Veiksmų pabaiga');

// AWAIT PAVYZDYS

// console.log('Veiksmų pradžia');

// let google = await fetch('https://www.google.com');
// google = await google.text();

// console.log('Gautas rezultatas iš google');

// let penkiolikaMin = await fetch('https://www.15min.lt');
// penkiolikaMin = await penkiolikaMin.text();

// console.log('Gautas rezultatas iš 15min');

// let delfi = await fetch('https://www.delfi.lt');
// delfi = await delfi.text();

// console.log('Gautas rezultatas iš delfi');

// console.log('Veiksmų pabaiga');

// ASINCHRONINĖS (async) ARROW FUNKCIJOS PAVYZDYS

// const getResults = async () => {
//     console.log('Veiksmų pradžia');

//     let google = await fetch('https://www.google.com');
//     google = await google.text();

//     console.log('Gautas rezultatas iš google');

//     let penkiolikaMin = await fetch('https://www.15min.lt');
//     penkiolikaMin = await penkiolikaMin.text();

//     console.log('Gautas rezultatas iš 15min');

//     let delfi = await fetch('https://www.delfi.lt');
//     delfi = await delfi.text();

//     console.log('Gautas rezultatas iš delfi');

//     console.log('Veiksmų pabaiga');
// }

// getResults();

// ASINCHRONINĖS (async) klasikinės FUNKCIJOS PAVYZDYS

async function getResults() {
    console.log('Veiksmų pradžia');

    let google = await fetch('https://www.google.com');
    google = await google.text();

    console.log('Gautas rezultatas iš google');

    let penkiolikaMin = await fetch('https://www.15min.lt');
    penkiolikaMin = await penkiolikaMin.text();

    console.log('Gautas rezultatas iš 15min');

    let delfi = await fetch('https://www.delfi.lt');
    delfi = await delfi.text();

    console.log('Gautas rezultatas iš delfi');

    console.log('Veiksmų pabaiga');
}

getResults();