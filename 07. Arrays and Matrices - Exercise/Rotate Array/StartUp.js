function rotateArray(arr) {
    let tempElemement = '';
    let rotationNumber = arr[arr.length - 1];
    arr.pop();

    for (let i = 0; i < rotationNumber % arr.length; i++) {
        tempElemement = arr[arr.length - 1];
        arr.pop();
        arr.unshift(tempElemement);
    }

    console.log(arr.join(' '));
}