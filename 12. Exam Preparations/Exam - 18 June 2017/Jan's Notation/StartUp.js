function notation(input) {
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        if (Number.isInteger(input[i])) {
            numbers.push(input[i]);
        } else {
            if (numbers.length >= 2) {
                let num2 = numbers.pop();
                let num1 = numbers.pop();

                switch (input[i]) {
                    case '+': numbers.push(num1 + num2); break;
                    case '-': numbers.push(num1 - num2); break;
                    case '*': numbers.push(num1 * num2); break;
                    case '/': numbers.push(num1 / num2); break;
                }
            } else {
                console.log(`Error: not enough operands!`);
                return;
            }
        }
    }
    if (numbers.length === 1) {
        console.log(numbers.join(''));
    } else {
        console.log(`Error: too many operands!`);
    }
}
