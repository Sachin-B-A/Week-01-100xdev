function sum(num1, num2,display) {
    let result = num1 + num2;
    display(result,displayResultPassive);
}

function displayResult(data,displaypassive) {
    console.log("Result of the sum is : " + data);
    displaypassive(data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

sum(7, 9, displayResult);
// You are only allowed to call one function after this
// How will you displayResult of a sum