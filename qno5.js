// Create a loop to iterate 10 times, incrementing the value and invoking
// the async function, passing the value of the increment variable as the
// parameter in the function.


async function asyncFunction(argValue) {
    const counter = await getCounterValue();
    console.log(`${argValue} counter:${counter}`);
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
  
  // Loop iteration
  for (let i = 1; i <= 10; i++) {
    console.log(`ready ${i} counter:0`);
    const argumentValue = `x value ${i}`;
    asyncFunction(argumentValue);
  }
  