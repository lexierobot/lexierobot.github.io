var timer;

function one() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('hello');
        resolve()}, 10000);
    });
    
}

function two() {
    timer = setTimeout(function() {
        console.log('promise');}, 1000);
    }

    one().then(two);
  