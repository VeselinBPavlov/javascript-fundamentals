function solve(arr) {
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, '', (a, b) => a + b);

    function aggregate(array, initialValue, func) {
        for (let i = 0; i < array.length; i++) {
            initialValue = func(initialValue, array[i]);
        }
        console.log(initialValue);
    }
}