`use strict`;

class Timer {

  constructor() {
    this.isRunning = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.hours_span = document.querySelector('.stopwatch__timer-hours');
    this.minutes_span = document.querySelector('.stopwatch__timer-minutes');
    this.seconds_span = document.querySelector('.stopwatch__timer-seconds');
  }

  _setTime() {
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    } else {
      this.seconds++;
    }

    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
  }

  render() {
    if (this.isRunning) this._setTime();

    let hours = (this.hours >= 10) ? this.hours : '0' + this.hours;
    let minutes = (this.minutes >= 10) ? this.minutes : '0' + this.minutes;
    let seconds = (this.seconds >= 10) ? this.seconds : ('0' + this.seconds);


    this.hours_span.textContent = hours;
    this.minutes_span.textContent = minutes;
    this.seconds_span.textContent = seconds;
  }


  startTimer() {
    if (!this.isRunning) {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
      this.isRunning = true;
    }

  }

  stopTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
  }

  resetTimer() {
    this.stopTimer();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.render();
    this.isRunning = false;
  }
}


const start_button = document.querySelector('.stopwatch__button_start');
const stop_button = document.querySelector('.stopwatch__button_stop');
const reset_button = document.querySelector('.stopwatch__button_reset');


const timer = new Timer();

start_button.addEventListener('click', () => timer.startTimer());
stop_button.addEventListener('click', () => timer.stopTimer());
reset_button.addEventListener('click', () => timer.resetTimer());
