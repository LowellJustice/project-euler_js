function reverse(s){
    return s.split("").reverse().join("");
}
function isPalindrome(num) {
    if (num.toString() == reverse(num.toString())) return true;
    return false;
}

var max = 0;
for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        if (isPalindrome(i*j) && i*j > max) {
            max = i*j;
        }
    }
}
console.log(max);