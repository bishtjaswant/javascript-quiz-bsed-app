let dt= new Date( new Date().setTime(0) );

let time = dt.getTime();
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((time % (1000 * 60)) / 1000);


console.log(time);

setInterval(() => {
    if (seconds <=59) {
        seconds++;
    } else {
        minutes++;
         seconds=0;

    }
    let formatted_second= seconds < 10 ? `0${seconds}`: `${seconds}`;
    let formatted_minutes= minutes < 10 ? `0${minutes}`: `${minutes}`;
    document.querySelector('.timer').innerText=`${formatted_minutes}:${formatted_second}`;
    console.log(seconds,minutes);
}, 1000);