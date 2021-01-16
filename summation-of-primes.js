function isPrime(num) {
    for(var i = 2; i*i <= num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
var sum = 0;
for (let i = 0; i < 2000000; i++) {
    if (isPrime(i)) sum+=i;
}
console.log(sum);