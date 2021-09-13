import React from 'react';
import { Component } from 'react';

class Time extends Component {
constructor(props) {
    super(props);
    this.state = {
      getTime: this.getTime(),
    }
  }
  
  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    if(this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  setTimer() {
    //clearTimeout(this.timeout); //this will be in componentWillUnmount()
    this.timeout = setTimeout(this.updateClock.bind(this), 0);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }
  }
render() {
    const {hours, minutes, seconds, ampm} = this.state;
    return (
    <section class="body-font bg-gray-900 mt-10">
        <div class="flex flex-col text-center w-full mb-20">
        <p class="sm:text-2xl text-xl font-medium  mx-auto leading-relaxed text-gray-400"><b className="sm:text-2xl text-xl font-medium title-font mb-4 text-white">LAST UPDATE:</b> {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:
          {minutes > 9 ? minutes : `0${minutes}`}:
          {seconds > 9 ? seconds : `0${seconds}`} {ampm} (IST)</p>
        </div>
        </section>
        )
}
}

export default Time;