const info = {
    image: "nuotrauka.svg",
    name: "Saitama",
    age: 25,
    weight: 70,
    height: 175,
    skills: "Immeasurable Physical Prowess, Supernatural Reflexes and Senses, Invulnerability, Indomitable Will, Enhanced Fighting Skill"
}

document.querySelector('.profile').innerHTML = `<img src="${info.image}">`;

document.querySelector('.name h1').textContent = info.name;
document.querySelector('.age h1').textContent = info.age;
document.querySelector('.weight h1').textContent = info.weight +=`  kg`;
document.querySelector('.height h1').textContent = info.height +=`  cm`;
document.querySelector('.description p').textContent = info.skills;