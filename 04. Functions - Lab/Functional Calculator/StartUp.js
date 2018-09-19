function calculator(leftOperand, rightOperand, operator) {
    switch (operator) {
        case "+": console.log(leftOperand + rightOperand); break;
        case "-": console.log(leftOperand - rightOperand); break;
        case "*": console.log(leftOperand * rightOperand); break;
        case "/": console.log(leftOperand / rightOperand); break;
    }
}