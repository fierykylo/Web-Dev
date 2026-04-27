const operator = prompt("Enter an operator +, -, *, /");
const num1 = parseFloat(prompt("Enter the first number"));
const num2 = parseFloat(prompt("Enter the second number"));

const calculate = (operator, num1, num2) => {
    if (operator === "+") {
        return num1 + num2;
    } 
    else if (operator === "-") {
        return num1 - num2;
    } 
    else if (operator === "*") {
        return num1 * num2;
    } 
    else if (operator === "/") {
        return num1 / num2;
    } 
    else {
        return "Invalid operator";
    }
};

// 🔥 CALL the function
const result = calculate(operator, num1, num2);
console.log(result);