var timer;

function one() {
    timer = setTimeout(function(){
        console.log(1);}, 8000);
}

function two() {
    timer = setTimeout(function() {
        console.log(2);}, 3000);
    }

    one();
    two();
  