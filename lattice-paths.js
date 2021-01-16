function calcSum(desiredSize, iterations, curRow) {
    var arr = [1];
    for (let i = 0; i < curRow.length; i++) {
        if (i+1==curRow.length) {
            arr.push(1);
        } else {
            arr.push(curRow[i]+curRow[i+1]);
        }
    }
    if (iterations == desiredSize*2-3) return arr[Math.floor(arr.length/2)];
    return calcSum(desiredSize, iterations+1, arr);
}
console.log(calcSum(20, 0, [1, 2, 1]));