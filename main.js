/* 

    You need to write two functions.

    A function to add two values together. This function needs to define two parameters - 
    the two numbers that you want to add together.

    A function to multiply a single number by 2. This function takes one parameter - 
    the number you want to multiply by 2.

    In the adding function, add the values of the two parameters and return the result

    In the multiplication function, multiply the value of the single parameter by 2 and 
    return the result.

*/ 

/* After the functions are defined, invoke them in the correct order.

    Invoke the adding function, provide two values as arguments, 
    and the store what gets returned into a variable.

    Then invoke the multiplication function and provide the variable from the previous step 
    as the argument. Store the result into a variable.

    Use console.log() to output the end result of the multiplication function.
    As an example, if you pass 4 and 14 to the first function, then the final output should be 36.
*/ 

/* 

    The plus sign (+) is used to add numbers in JavaScript
    The asterisk (*) is used to multiply numbers in JavaScript

*/ 


const addNumbers = (num1,num2) => {
    const numbersToAdd = num1 + num2
    return numbersToAdd 
}

const sum = addNumbers(5,2) //put any two numbers as the argument; chose 5 and 2 as an example 
console.log(sum) // 7, because 5 + 2

const multiplyValues = (val) => {
    const valuesToMultiply = val * 2
    return valuesToMultiply
} 

const product = multiplyValues(sum) //put the "sum" variable/output as the argument 
console.log(product) // 14, because 7 * 2