const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

// delay 4 seconds
function init() {
    setTimeout(() => {
        //set loader opacity and display
        loader.style.opacity = 0;
        loader.style.display = 'none';

        //set main style to block display
        main.style.display = 'block';
        //set opacity to 1 after 5 milisecond delay
        setTimeout(() => main.style.opacity = 1, 50);
    }, 4000)
}

init();