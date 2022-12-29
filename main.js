function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "add":
            add(a,b);
            break;
        case "sub":
            subtract(a,b);
        break;
        case "mul":
            multiply(a,b);
        break;
        case "div":
            divide(a,b);
        break;
        default:
            break;
    }
}