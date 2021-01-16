function countDivisors(n) {
    let count = 0;
    let sqrt = Math.floor(Math.sqrt(n));
    for (let i = 1; i <= sqrt; i++) {
        if (n%i==0) {
            count+=2;
        }
    }
    if (sqrt*sqrt == n) count--;
    return count;
}
var num = 1;
while (countDivisors(num*(num+1)/2) <= 500) {
    num++;
}
console.log(num*(num+1)/2);