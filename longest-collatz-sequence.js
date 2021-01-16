let maxTerms = 0;
let maxNumber = 0;
for (let i = 100000; i < 1000000; i++) {
    let n = i;
    let terms = 1;
    while (n != 1) {
        if (n%2==0) {
            n = n/2;
        } else {
            n = 3*n + 1;
        }
        terms++;
    }
    if (terms > maxTerms) {
        maxTerms = terms;
        maxNumber = i;
    }
}
console.log(maxNumber);