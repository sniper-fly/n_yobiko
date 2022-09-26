"use strict";
function fib2(num) {
  const memory = new Map();
  return _fib(num, memory);
}

function _fib(num, memory) {
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  }
  const cache = memory.get(num)
  if (cache) {
    return cache
  }
  const result = fib(num - 1, memory) + fib(num - 2, memory);
  memory.set(num, result);
  return result;
}

for (let i = 0; i < 100; ++i) {
  console.log(fib2(i));
}
