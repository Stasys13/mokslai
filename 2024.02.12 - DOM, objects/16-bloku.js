function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function handleClick() {
const masyvas = [];
const masyvas2 = [0, 2, 4, 8, 16, 32, 64]
const box = document.querySelector('.box');
console.log(box);
box.innerHTML = "";

for( let i = 0; i < 16; i++ ) {    
  
    let number = masyvas2[rand(0, 6)];
    // 0, 2, 4, 8, 16, 32, 64
    masyvas.push(number);

    if(masyvas[i] === 0) {
       box.innerHTML += `<div style= "background-color: #cdc1b4"></div>`
    } else if (masyvas[i] === 2) {
        box.innerHTML += `<div style= "background-color: #eee4da; color: #766e66">${masyvas[i]}</div>`
    }  else if (masyvas[i] === 4) {
        box.innerHTML += `<div style= "background-color: #eee1c8; color: #766e66">${masyvas[i]}</div>`
    }  else if (masyvas[i] === 8) {
        box.innerHTML += `<div style= "background-color: #f2b27a; color: #f9f6f2">${masyvas[i]}</div>`
    } else if (masyvas[i] === 16) {
        box.innerHTML += `<div style= "background-color: #f2b27a; color: #f9f6f2">${masyvas[i]}</div>`
    } else if (masyvas[i] === 32) {
        box.innerHTML += `<div style= "background-color: #fc5b47; color: #f9f6f2">${masyvas[i]}</div>`   
    } else if (masyvas[i] === 64){
        box.innerHTML += `<div style= "background-color: #f69664; color: #f9f6f2">${masyvas[i]}</div>`
    } 
}
}
document.querySelector("button").addEventListener("click", handleClick);
handleClick();









