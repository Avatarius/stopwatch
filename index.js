`use strict`;

class Timer {

  constructor() {
    this.isRunning = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.centisecond = 0;
    this.hours_span = document.querySelector('.stopwatch__timer-hours');
    this.minutes_span = document.querySelector('.stopwatch__timer-minutes');
    this.seconds_span = document.querySelector('.stopwatch__timer-seconds');
    this.centisecond_span = document.querySelector('.stopwatch__timer-centisecond');
  }

  _setTime() {

    this.centisecond++;
    if (this.centisecond > 99) {
      this.seconds++;
      this.centisecond = 0;
    }

    if (this.seconds > 59) {
      this.minutes++;
      this.seconds = 0;
    }

    if (this.minutes > 59) {
      this.hours++;
      this.minutes = 0;
    }
  }

  _pan(num) {
    const result = (num >= 10) ? num : '0' + num;
    return result;
  }

  render() {
    if (this.isRunning) this._setTime();

    let hours = this._pan(this.hours);
    let minutes = this._pan(this.minutes);
    let seconds = this._pan(this.seconds);
    let centisecond = this._pan(this.centisecond);

    this.hours_span.textContent = hours;
    this.minutes_span.textContent = minutes;
    this.seconds_span.textContent = seconds;
    this.centisecond_span.textContent = centisecond;
  }


  startTimer() {
    if (!this.isRunning) {
      this.render();
      this.timer = setInterval(() => this.render(), 10);
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
    this.centisecond = 0;
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
