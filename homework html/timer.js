//Counting down to July 9 2020

//declare var myDate(countdown in html) that I'm counting down to

//140 Days until July 9

var daysLeft = 140;
var timer = setInterval(function(){
    if (daysLeft <= 0){
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Too Late, Lexie's 30!";
    } else {
        document.getElementById("countdown").innerHTML = daysLeft - timer;
    }
})

//Now INSTEAD of this I need to display that timer with days, hours, minutes, seconds as a countdown.

//make the Stop Time button display another message.....

var countdown = new Date('July 9, 2020 00:00:00').getTime();
var bdayTimer = setInterval(function(){

    document.getElementById("countdown").innerHTML = "Time's up!"
    //
})
//use clearInterval() to stop the timer
// if the time has run out, display "Too late, lexie's 30"