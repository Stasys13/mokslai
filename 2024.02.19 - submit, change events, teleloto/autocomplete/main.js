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


const filteredValues = (e) => {
    document.querySelector(`input`).textContent = e.target.value;



    const text = e.target.value.toLowerCase();
    const filteredPhrases = phrases.filter(value => value.toLowerCase().includes(text)).slice(0, 5)

    const html = filteredPhrases.map(value => `<li onclick="choose(event)">${value}</li>`).join(``);

    document.querySelector(`.autocomplete`).innerHTML = html;


};

function choose(e) {
    document.querySelector(`input`).value = e.target.textContent;
    document.querySelector(`.autocomplete`).innerHTML = ``;
};


