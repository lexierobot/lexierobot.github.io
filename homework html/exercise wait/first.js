var timer;

function one() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('hello');
        resolve()}, 10000);
    });
}

module.exports = one;