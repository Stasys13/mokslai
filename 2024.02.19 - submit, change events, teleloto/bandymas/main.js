const phrases = ['What is my IP',
    'How many weeks in a year',
    'How many ounces in a cup',
    'How to screenshot on Mac',
    'When is the Super Bowl',
    'When is Easter',
    'When is Father\'s Day',
    'What is Juneteenth',
    'How do I register to vote',
    'When is Thanksgiving'
];

//Į laukelį vartotojas įvedinėja tekstą. 
//Kiekvieno mygtuko paspaudimo metu atlikite paiešką ar vedamas tekstas 
//atitinką kažkurį(iuos) klausimus. 
//Jeigu taip išveskite pasiūlymų sąrašą, kuriame būtų ne daugiau nei 5 
//pasirinkimai su automatiškai siūloma fraze. 
//Paspaudus ant frazės paieškos laukelyje užpildykite pasirinktą sakinį.



const onClickSearch = (e) => {
    const enteredText = document.querySelector(`input`).value  
    const filteredPhrases = phrases.filter(onePhrase => onePhrase.toLowerCase().includes(enteredText.toLowerCase()))
//  console.log(filteredPhrases)
 ""
  //filter metodas
// const array = [];
//     for(let i = 0; i < phrases.length; i++) {
//         if (phrases[i].toLowerCase().includes(enteredText.toLowerCase())) {
//             array.push(phrases[i])
//             console.log(array)
//         }
//     };
""

const shortList = filteredPhrases.slice(0, 5) 
let markup = ``;
shortList.forEach((onePhrase) => markup = markup + (`<li>${onePhrase}</li>`))

// console.log(markup)
document.querySelector(`.autocomplete`).innerHTML = markup;


document.querySelectorAll(`li`).forEach((li) => li.addEventListener(`click`, choose))
// .addEventListener(`click` , choose)

// console.log(document.querySelectorAll(`li`))
// console.log(document.querySelector('li'))
// [li, li,li, li, li]
// `<li>Fraze</li>`
}

function choose (e) {
    e.target.textContent
    console.log(document.querySelector(`input` ))
   document.querySelector(`input`).value =  e.target.textContent
   document.querySelector(`.autocomplete`).innerHTML = `` ;
}
    
  
    


