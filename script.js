let isRunning = false;
let sessionCount = 0;
let timeLeft = 20 * 60; // 20 minutes in seconds
const timerDisplay = document.getElementById("timer-display");
const startPauseBtn = document.getElementById("start-pause-btn");
const resetBtn = document.getElementById("reset-btn");
const sessionCounter = document.getElementById("session-counter");

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
}

function toggleTimer() {
    if (!isRunning) {
        startTimer();
    } else {
        pauseTimer();
    }
}

function startTimer() {
    isRunning = true;
    startPauseBtn.textContent = "Pause";
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            sessionComplete();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    startPauseBtn.textContent = "Start";
    clearInterval(timerInterval);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateTimerDisplay(timeLeft);
    startPauseBtn.textContent = "Start";
}

function sessionComplete() {
    sessionCount++;
    sessionCounter.textContent = `Sessions: ${sessionCount}`;
    // Add logic for short break, long break, and resetting the timer for the next session
}

startPauseBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimerDisplay(timeLeft); // Initial display update
