/**
 * Based in on 'Creating a StopWatch in JS' by Saad Quadri https://github.com/saadq
 * video here: https://www.youtube.com/watch?v=jRhB1IG7uAw&t=758s  
 */

class Stopwatch {
    constructor(elem) {
        let time = 0;
        let interval = 0;
        let offset = 0;

        function update() {
            if (this.isOn) {
                time += delta();
            }
            elem.textContent = timeFormatter(time);
        }
        function delta() {
            const now = Date.now();
            const timePassed = now - offset;
            offset = now;
            return timePassed;
        };
        
        function timeFormatter(time) {
            time = new Date(time);
            let minutes = time.getMinutes().toString();
            let seconds = time.getSeconds().toString();
            let milliseconds = time.getMilliseconds().toString();
            if (minutes.length < 2) {
                minutes = '0' + minutes;
            };
            if (seconds.length < 2) {
                seconds = '0' + seconds;
            };
            while (milliseconds.length < 3) {
                milliseconds = '0' + milliseconds;
            };
            return minutes + ':' + seconds;
        };

        this.start = function() {
            interval = setInterval(update.bind(this), 10); //<=== think I understand this 
            offset = Date.now();
            this.isOn = true
            // console.log(`start`,this.isOn);
    };

        this.stop = function() {
            clearInterval(interval);
            interval = 0;
            this.isOn = false
            // console.log(` stop`, this.isOn);
        };
        this.reset = function() {
            time = 0;
            update();
          };
        this.isOn = false;
    } 
}
