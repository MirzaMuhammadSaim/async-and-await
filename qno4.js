// Create a variable to capture the returned resolve value from the await
// function. Output that result into the console.


async function asyncFunction(argValue) {
    const counter = await getCounterValue();
    console.log("Counter:", counter);
    console.log("Argument Value:", argValue);
  
    return counter; // Return the counter value
  }
  
  function getCounterValue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulating asynchronous operation
        const counter = 99; // Example value
        resolve(counter);
      }, 2000); // Example delay of 2 seconds
    });
  }
  
  // Usage
  const argumentValue = "Hello, World!";
  asyncFunction(argumentValue)
    .then((result) => {
      console.log("Returned Resolve Value:", result);
    });
  