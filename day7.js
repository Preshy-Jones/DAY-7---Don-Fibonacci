//  creating an array containing first two iterations of the fibonacci sequence
var fibonacciSequence = [0, 1];

//defining the function with an argument 'n' to get the nth iteration of the fibonacci sequence
function getFibonacci(n) {
    //setting conditional statements to return the first two iterations 
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
        //setting the conditional statement to handle iterations higher than two
    } else {
        //setting up  a conditional statement to return the nth iteration by comparing the length of the array and the argument 'n'
        if (fibonacciSequence.length >= n) {
            //returning the nth term in the array
            return fibonacciSequence[n - 1];
        };
        //calculating the next number in the sequences and adding it to the array
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 2] + fibonacciSequence[fibonacciSequence.length - 1]);
        //returning the defined function thereby setting up a recursion
        return getFibonacci(n);
    };
};

//testing the function
getFibonacci(7);