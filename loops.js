// Let's take a look at a more traditional way of looping called a for loop.
// The for statement takes three parameters: initialization, condition, and final expression.
var languages = ['HTML', 'CSS', 'Javascript'];
for (var index = 0; index < languages.length; index += 1) {
  console.log('I love ' + languages[index] + '!');
}