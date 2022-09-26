"use strict";
function fib(num) {
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

for (let i = 0; i < 40; ++i) {
  console.log(fib(i));
}
