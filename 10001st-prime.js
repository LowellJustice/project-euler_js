function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
let count = 0;
var curNum = 1;
while (count < 10001) {
    curNum++;
    if (isPrime(curNum)) count++;
    
}
console.log(curNum);