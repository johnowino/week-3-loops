// Let's take a look at a more traditional way of looping called a for loop.
// The for statement takes three parameters: initialization, condition, and final expression.
var languages = ['HTML', 'CSS', 'Javascript'];
for (var index = 0; index < languages.length; index += 1) {
  console.log('I love ' + languages[index] + '!');
}

// We previously used a forEach() loop to add all the elements of an array together. Let's rewrite that one too with a for loop:
var total = 0;
var summands = [1, 2, 3, 4, 5];
for (var index = 0; index < summands.length; index += 1) {
  total += summands[index];
}
console.log(total);
// 15

// Here's a version of our sum code that uses a for loop but doesn't require an array to loop through:
