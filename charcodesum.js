const s = "TypeScript3.9";

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let sum = 0;

for (let i = 0; i < s.length; i++) {
  if (isPrime(i)) {
    sum += s.charCodeAt(i);
  }
}

console.log(sum);
