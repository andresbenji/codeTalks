 // Check if the number is 2, which is the only even prime number.
 if (n == 2) return true;

 // Calculate the maximum possible divisor for the given number.
 var maxDiv = Math.sqrt(n);

 // Check all possible divisors from 2 up to the maximum possible divisor.
 for (var i = 2; i <= maxDiv; i++) {
   // If the number is divisible by a divisor, then it's not a prime number.
   if (n % i == 0) {
     return false;
   }
 }

 // If the number is not divisible by any divisor, then it's a prime number.
 return true;
}

// Test the function with different input values.
console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));