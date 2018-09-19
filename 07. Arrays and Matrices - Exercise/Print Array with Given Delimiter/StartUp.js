function printArray(arr) {
    let delimiter = arr[arr.length - 1];
    let result = "";

    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i];

        if (i !== arr.length - 2) {
            result += delimiter;
        }
    }
    console.log(result);
}