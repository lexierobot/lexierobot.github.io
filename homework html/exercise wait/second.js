const one = require('./first.js');

function two() {
    timer = setTimeout(function() {
        console.log('promise');}, 1000);
    }

    one().then(two);