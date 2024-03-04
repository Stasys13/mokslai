let initialTime = 30;
let seconds = initialTime;
let timer;
let running = false;
let starts =  document.querySelector(`.start`);

const displayTime = () =>  {
    document.querySelector(`.minutes`).textContent = Math.floor(seconds / 60);
    document.querySelector(`.seconds`).textContent = seconds % 60;
}
displayTime();


const start = (e) => {
//   if(document.querySelector(`input`).value <= 0) {
//    console.log(`ivesk laika`)
// return
// }
//  seconds = document.querySelector(`input`).value
   
 
starts.textContent = starts.textContent ==='START' ? 'STOP' : `START`;
    if (running) {
        clearInterval(timer)
        running = false;
        return
    }

    running = true;
   
    timer = setInterval(() => {
        seconds--;
        displayTime()

        if (seconds === 0) {
            starts.textContent = `OK`;
            clearInterval(timer);
            starts.disabled = true;
            return

        }
    }, 1000);
}
const reset = (e) => {
    starts.disabled = false;
    running = false;
    seconds = initialTime;
    starts.textContent = `START`;
    clearInterval(timer)
    displayTime()

}


let sekundes = 0;
let milisekundes = 0;
let taimeris;

function display2() {
    document.querySelector(`.sekundes`).textContent = sekundes;
    document.querySelector(`.milisekundes`).textContent = milisekundes;

}

function startas() {
    taimeris = setInterval(() => {
        milisekundes++;
        display2()
    
       clearInterval(taimeris)
        
    }, 10)
    
}