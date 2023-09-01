function Timer(callback, timeInterval, options) {
    this.timeInterval = timeInterval;

    this.start = () =>{
        this.expected = Date.now() + this.timeInterval;
        this.Thetimeout = null;
        if(options.immediate) {
            callback();
            console.log("immediate");
        }
        this.timeout = sesTimeout(this.round, this.timeInterval);
        console.log('timer started');
    }


    this.stop = () => {
        clearTimeout(this.timeout);
        console.log('timer stopped');
    }

    this.round = () => {
        console.log('timeout', this.timeout);
        let drift = Date.now() - this.expected;

        if(drift > this.timeInterval){
            if(options.errorCallback){
                options.errorCallback();
            }
        }
        callback();
        this.expected += this.timeInterval;
        console.log('drift:' , drift);
        console.log('next round time interval:', this.timeInterval - drift);
        this.timeout = setTimeout(this.round, this.timeInterval - drift);
    }
}

export default Timer;




// function Timer(callback, timeInterval, options) {
//     this.timeInterval = timeInterval;
//     this.timeout = null;
//     this.expected = null;
    
//     this.start = () => {
//     this.expected = Date.now() + this.timeInterval;
//     this.timeout = null;
//     if (options && options.immediate) {
//     callback();
//     console.log("immediate");
//     }
//     this.timeout = setTimeout(this.round, this.timeInterval);
//     };
    
//     this.stop = () => {
//     clearTimeout(this.timeout);
//     };
    
//     this.round = () => {
//     let drift = Date.now() - this.expected;
//     if (drift > this.timeInterval) {
//     if (options && options.errorCallback) {
//     options.errorCallback();
//     }
//     }
//     callback();
//     this.expected += this.timeInterval;
//     this.timeout = setTimeout(this.round, this.timeInterval - drift);
//     };
//     }
    
//     export default Timer;