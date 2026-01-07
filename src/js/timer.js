let intervalId = null

export function startTimer(
    { hours, minutes, seconds },
    onTick,
    onFinish
) {
    stopTimer()

    if (intervalId) return

    intervalId = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            stopTimer()
            onFinish?.()
            return
        }

        if (seconds === 0) {
            seconds = 59
            if (minutes === 0) {
                minutes = 59
                hours--
            } else {
                minutes--
            }
        } else {
            seconds--
        }

        onTick({ hours, minutes, seconds })
    }, 1000)
}

export function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
    }
}
