var fib = module.exports = function(n) {
  if (n < 0)       { throw new Error('Eh?') }
  else if (n == 0) { return 0 }
  else if (n == 1) { return 1 }
  else if (n == 2) { return 1 }
  else             { return fib(n - 1) + fib(n - 2) }
}
