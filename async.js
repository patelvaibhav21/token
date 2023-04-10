// To handle asynchronous JavaScript code, you can use callbacks, Promises, or the 
// async / await syntax.Here are examples of how to handle an asynchronous operation with each of 
// these approaches:

// --------------------------CALLBACKS-------------------------------------------
// Callbacks are a way to handle asynchronous code that involves passing a function to another 
// function as an argument to be called once the asynchronous operation completes.Here's an example:

function fetchData(callback) {
    setTimeout(() => {
      callback("data");
    }, 3000);
  }
  
  fetchData(data => {
    console.log(data); // logs "data" after one second
  });
  
// In this example, fetchData simulates an asynchronous operation by using setTimeout to delay the execution of the callback function by one second. The callback function is
// passed as an argument to fetchData and is called once the asynchronous operation completes.

// ---------------------------------------PROMISES-----------------------------------------
// Promises provide a cleaner and more structured way to handle asynchronous code by returning a Promise object that 
// represents the completion (or failure) of the asynchronous operation. Here's an example:

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("data");
      }, 3000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log(data); // logs "data" after one second
    })
    .catch(error => {
      console.error(error);
    });
// In this example, fetchData returns a Promise object that resolves to "data" after one second. We can then use the then method of the 
// Promise to handle the resolved value, and the catch method to handle any errors that occur.



//----------------------------------------------- ASYNC/AWAIT------------------------------------
// Async/await is a newer syntax for handling asynchronous code that allows you to write asynchronous code in a synchronous style. It uses the async keyword to define a function that returns a Promise, and the await
// keyword to pause the execution of the function until the Promise resolves. Here's an example:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 3000);
  });
}

async function myAsyncFunction() {
  try {
    const data = await fetchData();
    console.log(data); // logs "data" after one second
  } catch (error) {
    console.error(error);
  }
}

myAsyncFunction();
// In this example, myAsyncFunction is defined as an async function that uses the await keyword to pause its execution until the fetchData Promise resolves. The resolved value is then assigned to the data variable, which can be used synchronously in the function. Any errors that occur during
// the execution of the function can be caught and handled using a try/catch block.
