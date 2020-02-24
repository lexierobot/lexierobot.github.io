var timer;

function one() {
    timer = setTimeout(function(){
        console.log(1);}, 8000);
}
one();
two();
module.exports = one;
module.exports = two;