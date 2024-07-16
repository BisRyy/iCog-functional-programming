// 3.Implement a higher-order function debounce that takes a function and a delay, returning a new function that limits the rate at which the original function can be invoked.

function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

function greet() {
  console.log("Hello, World!");
}

const greetDebounced = debounce(greet, 1000);
greetDebounced();
greetDebounced();
greetDebounced();

setTimeout(greetDebounced, 1000);
setTimeout(greetDebounced, 3000);