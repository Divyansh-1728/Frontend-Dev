"use strict";

const outputArea = document.getElementById("output");

outputArea.textContent += "Start\n";

setTimeout(() => {
  outputArea.textContent += "setTimeout macrotask\n";
}, 0);

Promise.resolve().then(() => {
  outputArea.textContent += "Promise microtask\n";
});

outputArea.textContent += "Synchronous Log\n";

outputArea.textContent += "End\n";

/*
Explanation:

- Synchronous logs run immediately in order.
- Promise microtasks run after synchronous code but before any macrotasks (setTimeout).
- setTimeout callback runs last because it is a macrotask.

Order: Start -> Synchronous Log -> End -> Promise microtask -> setTimeout macrotask
*/
