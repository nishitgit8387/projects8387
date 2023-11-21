function calculate(operator) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '%':
                result = (num1 / 100) * num2;
                break;
            case '=':
                result = "Please select an operator (+, -, *, /, %)";
                break;
            default:
                result = "Invalid operator";
        }
        document.getElementById('result').innerHTML = 'Result: ' + result;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
    }
}

