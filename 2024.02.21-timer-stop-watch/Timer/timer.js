let seconds = 600;
let running = false;
let finished = false;
let timer;

const startButton = document.querySelector('.start');

const displayTime = () => {
    document.querySelector('.minutes').textContent = Math.floor(seconds / 60);
    document.querySelector('.seconds').textContent = seconds % 60;
}

const start = (e) => {
    // Ar programa baigėsi?
    if(finished)
        return;

    // Mygtuko teksto paėmimas
    const text = e.target.textContent;
    // Mygtuko teksto priskyrimas su ternary operatorium
    e.target.textContent = text === 'Start' ? 'Stop' : 'Start';

    if(running) {
        clearInterval(timer);
        running = false;
        return;
    }

    running = true;
    
    timer = setInterval(() => {
        seconds--;
        // Minutės
        // console.log(Math.floor(seconds / 60));
        // Sekundės
        // console.log(seconds % 60);

        displayTime();
        
        if(seconds === 0) {
            clearInterval(timer);
            startButton.textContent = 'OK';
            finished = true;
        }
    }, 1000);
}

const reset = (e) => {
    seconds = 600;
    running = false;
    finished = false;
    startButton.textContent = 'Start';
    displayTime();
}

displayTime();