// Increment the counter within setTimeout() , adding one every second.
// Resolve the Promise with the value of the counter and the value of the
// variable that was in the function argument


function delayWithTimeout(time, value) {
    let counter = 0;
  
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        counter++;
        console.log(`Counter: ${counter}`);
      }, 1000);
  
      setTimeout(() => {
        clearInterval(intervalId);
        resolve({ counter, value });
      }, time);
    });
  }
  const duration = 5000; // 5 seconds
  const myValue = "Hello, World!";
  
  delayWithTimeout(duration, myValue)
    .then((result) => {
      console.log("Counter and Value:", result);
    });
    