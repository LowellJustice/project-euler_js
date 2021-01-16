var sumOfSquared = 0;
for(let i = 1; i <= 100; i++) {
    sumOfSquared+=Math.pow(i, 2);
}
var squaredSum = Math.pow(100*(100+1)/2, 2);
console.log(squaredSum - sumOfSquared);