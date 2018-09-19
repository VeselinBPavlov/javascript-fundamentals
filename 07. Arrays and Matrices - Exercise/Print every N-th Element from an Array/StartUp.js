function printNElementOfArray(arr) {
    let element = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (i % element ===0) {
            console.log(arr[i]);
        }
    }
}