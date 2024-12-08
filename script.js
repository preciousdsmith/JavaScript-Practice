/*Return the Nth Even Number
Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.*/


function nthEven(n){
 return 2 * (n-1);
}


/*Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True */


String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
}




/*This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?*/

a = "code";
b = "wa.rs";
var name = a + b;

/*Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]*/

function greet(name){
    return `Hello, ${name} how are you doing today?`;
    }

    /*Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34*/

function opposite(number) {
    return(-number);
}

/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/

function smallEnough(a, limit){
    return Math.max(...a) <= limit
}


/*Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.*/


function reverseWords(str) {
return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
}).join(' ');
}