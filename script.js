Tasks
Promise: then versus catch
Are these code fragments equal? In other words, do they 
behave the same way in any circumstances, for any handler functions?

promise.then(f1).catch(f2);

Versus:

promise.then(f1, f2);

## attempt at solution

// No, they are not equal
// the difference is that if an error happens in f1, then it is handled
// by .catch

// but not here:

// that's because an error is passed down the chain, and in the second
// code piece there's no chain below f1. In other words, .then results
// / errors to the next .then/catch.
// in second example the error would go unhandled.

Error in setTimeout
What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// it won't be triggered because the error is generated later. So 
// the promise can't handle it.

// the implicit try..catch handle the sync errors.

