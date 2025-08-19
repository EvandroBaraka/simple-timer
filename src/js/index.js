const inputs = document.querySelectorAll('.input-timer')
const inputHour = document.getElementById('hour')
const inputMinute = document.getElementById('minute')
const inputSecond = document.getElementById('second')
const buttonStart = document.getElementById('start')
const buttonPause = document.getElementById('pause')
const buttonReset = document.getElementById('reset')
const buttonDarkmode = document.getElementById('btn-toggler')
const itensDarkmode = document.querySelectorAll('.darkmode')

var counter //Inicializa a variável que recebe o timer para ser usada em outras funções
var darkmode = true

buttonStart.addEventListener('click', () => { startCounter(inputSecond.value, inputMinute.value, inputHour.value) })
buttonPause.addEventListener('click', () => { pauseCounter() })
buttonReset.addEventListener('click', () => { resetCouter() })
buttonDarkmode.addEventListener('click', () => { darkmodeChange(itensDarkmode) })


//Validador de campos
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let type = e.target.dataset.type;

        if (value !== '') {
            let number = value;
            let max = (type === 'hour') ? 99 : 59;

            if (number > max) {
                number = max;
            }

            value = number.toString();
        }

        e.target.value = value;

        if (value.length === 2 && index < inputs.length - 1) {
            inputs[index + 1].select();
        }
    });

    input.addEventListener('blur', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let type = e.target.dataset.type;

        let number = parseInt(value || '0');
        let max = (type === 'hour') ? 99 : 59;

        if (number > max) {
            number = max;
        }

        e.target.value = number.toString().padStart(2, '0');
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            e.preventDefault();
            inputs[index - 1].focus();
        }
    });
});


function startCounter(seconds, minutes, hours) {
    if (seconds == 0 && minutes == 0 && hours == 0) {
        return
    }

    buttonStart.setAttribute('disabled', '')
    counter = setInterval(() => {
        if (seconds >= 0) {
            seconds -= 1
            inputSecond.value = seconds.toString().padStart(2, '0')
        }

        if (seconds == -1 && minutes > 0) {
            seconds = 59
            inputSecond.value = seconds.toString().padStart(2, '0')
            minutes -= 1
            inputMinute.value = minutes.toString().padStart(2, '0')
        }

        if (seconds == -1 && minutes == 0 && hours > 0) {
            seconds = 59
            inputSecond.value = seconds.toString().padStart(2, '0')
            minutes = 59
            inputMinute.value = minutes.toString().padStart(2, '0')
            hours -= 1
            inputHour.value = hours.toString().padStart(2, '0')
        }

        if (seconds == 0 && minutes == 0 && hours == 0) {
            clearInterval(counter)
            buttonStart.removeAttribute('disabled')
        }

    }, 1000)
}


function pauseCounter() {
    clearInterval(counter)
    buttonStart.removeAttribute('disabled')
}


function resetCouter() {
    clearInterval(counter)
    buttonStart.removeAttribute('disabled')
    inputSecond.value = '00'
    inputMinute.value = '00'
    inputHour.value = '00'
}


function darkmodeChange(itens) {
    (darkmode) ? darkmode = false : darkmode = true


    itens.forEach(item => {
        item.classList.toggle('darkmode')
        item.classList.toggle('lightmode')
    });
}