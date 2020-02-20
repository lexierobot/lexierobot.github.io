//Counting down to July 9 2020

//declare var myDate(countdown in html) that I'm counting down to
// var countdown = new Date('July 9, 2020 00:00:00').getTime();


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


//Now I need to display that timer with days, hours, minutes, seconds as a countdown.

//make the Stop Time button display another message.....
