class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timer = document.querySelector(this.selector);
        this.days = this.timer.querySelector('[data-value="days"]');
        this.hours = this.timer.querySelector('[data-value="hours"]');
        this.mins = this.timer.querySelector('[data-value="mins"]');
        this.secs = this.timer.querySelector('[data-value="secs"]');
        this.start();
    }

    start() {
        this.updateTimer();

        this.intervalId = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const now = new Date();
        const time = this.targetDate - now;

        if (time < 0) {
            clearInterval(this.intervalId);
            return;
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.days.textContent = this.pad(days);
        this.hours.textContent = this.pad(hours);
        this.mins.textContent = this.pad(mins);
        this.secs.textContent = this.pad(secs);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 3, 2025'),
});
