var number = BigInt(Math.pow(2, 1000));
var str = number.toString();
var sum = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] != '.') sum += parseInt(str[i]);
}
console.log(sum);