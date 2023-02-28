const clock = document.getElementById('relogio')
const start = document.getElementById('iniciar')
const freeze = document.getElementById('pausar')
const clean = document.getElementById('zerar')

let clockSec = 0
let clockMin = 0
let clockHour = 0
let timer

function leftZero(clockNumber) {
    return clockNumber < 10 ? `0${clockNumber}` : clockNumber
}

start.addEventListener('click', function startClock() {
    timer = setInterval(() => {
        clockSec++
        clock.innerHTML = `${leftZero(clockHour)}:${leftZero(clockMin)}:${leftZero(clockSec)}`
        if (clockSec == 60) {
            clockSec = 0
            clockMin++
            clock.innerHTML = `${leftZero(clockHour)}:${leftZero(clockMin)}:${leftZero(clockSec)}`
        }
        if (clockMin == 60) {
            clockMin = 0
            clockSec = 0
            clockHour++
            clock.innerHTML = `${leftZero(clockHour)}:${leftZero(clockMin)}:${leftZero(clockSec)}`
        }
    }, 1000);
})

freeze.addEventListener('click', function (e) {
    clearInterval(timer)
})

clean.addEventListener('click', function (e) {
    clearInterval(timer)
    clockSec = 0
    clockMin = 0
    clockHour = 0
    clock.innerHTML = '00:00:00'
})