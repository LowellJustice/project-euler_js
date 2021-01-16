 function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
var max = 0;
for (let i = 0; i < Math.sqrt(600851475143); i++) {
    if (600851475143 % i == 0 && isPrime(i)) max = i;
}
console.log(max);