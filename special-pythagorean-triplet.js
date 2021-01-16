var product = 0;
for (let i = 1; i < 332; i++) {
    for(let j = i+1; j < 499; j++) {
        if (i+j<1000 && i < j) {
            let k = 1000-i-j;
            if (k > j) {
                if (Math.pow(i,2) + Math.pow(j,2) == Math.pow(k,2) && i!=0&&j!=0&&k!=0) product = i*j*k;
            }
        }
    }
}
console.log(product);