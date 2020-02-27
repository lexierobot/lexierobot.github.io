const readline = require('readline').createInterface(process.stdin, process.stdout);

module.exports = {
  input(prompt) {
    const promise = new Promise(resolve => {
      readline.setPrompt(prompt);
      readline.prompt();
      readline.on('line', input => {
        if(input.trim() == 'exit') {
          resolve(input);
        }
      })
    })
    return promise;
  }
}