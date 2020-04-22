// //Darkmode
// let darkMode = localStorage.getItem('darkMode');
// const darkModeToggle = document.querySelector('#dark-mode');


// //check if dark mode is enabled
// // if enabled, turn it off
// // if disabled, turn it on

// const enableDarkMode = () => {
//     // add the class darkmode to the body
//     document.body.classList.add('darkmode');
//     // update darkmode in localStorage
//     localStorage.setItem('darkMode', 'enabled');
// }

// const disableDarkMode = () => {
//     // remove the class darkmode to the body
//     document.body.classList.remove('darkmode');
//     // update darkmode in localStorage
//     localStorage.setItem('darkMode', 'null');
// };


// darkModeToggle.addEventListener('click', () => {
//     if (darkMode !== 'enabled') {
//         enableDarkMode();
//         console.log(darkMode);
//     } else {
//         disableDarkMode();
//     }
// });


//Fizzbuzz Coding Q
// var i=100;

// function fizzBuzz(i){
//     for (i=1; i<101; i++){
//         if (i%5 == 0 && i%3 == 0){
//             console.log('fizzbuzz')
//         } else if (i%5 == 0){
//             console.log('fizz')
//         } else if (i%3 == 0){
//             console.log('buzz')
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();