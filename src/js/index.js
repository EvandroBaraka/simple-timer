import { initFog } from './fog/fogBackground.js'
import { loadTheme, saveTheme, toggleTheme } from './theme.js'
import { startTimer, stopTimer } from './timer.js'

const inputHour = document.getElementById('hour')
const inputMinute = document.getElementById('minute')
const inputSecond = document.getElementById('second')
const buttonStart = document.getElementById('start')
const buttonPause = document.getElementById('pause')
const buttonReset = document.getElementById('reset')
const buttonThemeToggler = document.getElementById('btn-toggler')
const itensDarkmode = document.querySelectorAll('.darkmode')

let darkmode = loadTheme()

toggleTheme(darkmode, itensDarkmode)
initFog(darkmode)

buttonThemeToggler.addEventListener('click', () => {
    darkmode = !darkmode
    toggleTheme(darkmode, itensDarkmode)
    saveTheme(darkmode)
    initFog(darkmode)
})

buttonStart.addEventListener('click', () => {
    const hours = Number(inputHour.value)
    const minutes = Number(inputMinute.value)
    const seconds = Number(inputSecond.value)

    if (hours === 0 && minutes === 0 && seconds === 0) return

    buttonStart.setAttribute('disabled', '')

    startTimer(
        { hours, minutes, seconds },

        // onTick
        ({ hours, minutes, seconds }) => {
            inputHour.value = hours.toString().padStart(2, '0')
            inputMinute.value = minutes.toString().padStart(2, '0')
            inputSecond.value = seconds.toString().padStart(2, '0')
        },

        // onFinish
        () => {
            buttonStart.removeAttribute('disabled')

            const timerEl = document.querySelector('.clock-container')
            timerEl.classList.add('timer-finish')

            timerEl.addEventListener(
                'animationend',
                () => timerEl.classList.remove('timer-finish'),
                { once: true }
            )
        }
    )
})

buttonPause.addEventListener('click', () => {
    stopTimer()
    buttonStart.removeAttribute('disabled')
})

buttonReset.addEventListener('click', () => {
    stopTimer()
    buttonStart.removeAttribute('disabled')

    inputHour.value = '00'
    inputMinute.value = '00'
    inputSecond.value = '00'
})