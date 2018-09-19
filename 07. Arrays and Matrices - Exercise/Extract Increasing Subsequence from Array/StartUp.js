function extraxtSeqFromArray(arr) {
    let result = [];
    let maxNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxNum) {
            result.push(arr[i]);
            maxNum = arr[i];
        }
    }

    console.log(result.join('\n'));
}