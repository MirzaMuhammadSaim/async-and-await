// Create a function that takes one argument. Return the result of a new
// Promise, setting a setTimeout() function that will contain the resolve
// instance.

function delayWithTimeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timeout complete!");
    }, time);
  });
}
const duration = 2000; // 2 seconds

delayWithTimeout(duration)
  .then((result) => {
    console.log(result);
  });

  