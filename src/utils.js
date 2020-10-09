export const fib = (n) => {
  pre: {
    Number.isInteger(n);
    n > 0;
  }

  if (n === 0) {
    return 1;
  } else {
    return n + fib(n - 1);
  }

  post: {
    Number.isInteger(it);
    it > 0;
  }
};
