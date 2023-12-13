// Create an asynchronous function that outputs into the console the
// value of the global counter and the value of the argument of the
// function.

// async function asyncFunction() {
//     const duration = 5000; // 5 seconds
//     const myValue = "Hello, World!";
  
//     const result = await delayWithTimeout(duration, myValue);
//     console.log("Counter and Value:", result.counter, result.value);
//   }
//   asyncFunction();


async function asyncFunction(argValue) {
    const counter = await getCounterValue();
    console.log("Counter:", counter);
    console.log("Argument Value:", argValue);
  }
  
  function getCounterValue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulating asynchronous operation
        const counter = 42; // Example value
        resolve(counter);
      }, 2000); // Example delay of 2 seconds
    });
  }
  
  // Usage
  const argumentValue = "Hello, World!";
  asyncFunction(argumentValue);
  



  
  
  