const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your favorite color?`, (color) => {
  console.log(`Crazy! ${color} is my favorite color, too!`)

readline.question(`Which Hogwarts House are you in?`, (house) => {
  if(house == 'gryffindor' || house == 'Gryffindor'){
        console.log(`Ah, ${house}! You must be brave at heart.`)
  } else if (house == 'hufflepuff' || house == 'Hufflepuff'){
        console.log(`${house}'s are the most loyal of friends.`)
  } else if (house == 'slytherin' || house == 'Slytherin'){
        console.log(`A cunning ${house}, eh?`)
  } else if (house == 'ravenclaw' || house == 'Ravenclaw'){
        console.log(`lol ${house}'s r total nerdz.`)
  } else {
        console.log('That\'s not a Hogwarts house.');
  }
        readline.close()
      })
});

readline.on('close', function() {
      console.log('\nLater Witches!');
      process.exit(0);
});