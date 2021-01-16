var fib1 = 0;
var fib2 = 1;
var sum = 0;
while (fib2<4000000||fib1<4000000) {
    var temp = fib1;
    fib1=fib2;
    fib2=temp+fib2;
    if (fib2%2==0) {
        sum+=fib2;
    }
}
console.log(sum);