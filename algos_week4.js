// Monday
/* 
Recursively sum an arr of ints
*/

function sumArr(nums) {
    // BASE CASE
    if (nums.length < 1) return 0 

    // FORWARD PROGRESS
    newArr = nums.slice(1, nums.length)

    // RECURSIVE CALL
    return nums[0] + sumArr(newArr)
}

const nums1 = [1, 2, 3];
const expected1 = 6;
console.log(sumArr(nums1))

/*****************************************************************************/

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

function recursiveSigma(num) {
    // BASE CASE
    if (num <= 0){
        return 0
    }

    // FORWARD PROGRESS
    num = Math.floor(num)
    newNum = num - 1

    // RECURSIVE CALL
    return num + recursiveSigma(newNum)
}

// Shawn's solution
function recursiveSigma(num){
    // EDGE CASE
    if (num < 1) return 0
    // BASE CASE
    if (num == 1) return 1
    // FORWARD PROGRESS / RECURSIVE CALL
    return Math.floor(num) + recursiveSigma(num-1)
}

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)
console.log(recursiveSigma(num1))

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)
console.log(recursiveSigma(num2))

const num3 = -1;
const expected3 = 0;
console.log(recursiveSigma(num3))


/*****************************************************************************/
// Tuesday
/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

function factorial(n) {
    // BASE CASE
    if (n <= 0) return 1

    // FORWARD PROGRESS
    n = Math.floor(n)
    newN = n -1

    // RECURSIVE CALL
    return n * factorial(newN) 
}

// Shawn's solution
function factorial(n){
    var int = parseInt(n) // truncate the decimal (parseInt() gets integer from string)
    
    // BASE CASE
    if (int < 0) int = abs(int) // negative numbers are turned positive
    if (int < 2) return 1 // because 0! = 1! = 1
    // FORWARD PROGRESS AND RECURSIVE CALL - return 
    return int * factorial(int - 1)
}

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6
console.log(factorial(num1))

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720
console.log(factorial(num2))

const num3 = 0;
const expected3 = 1;
console.log(factorial(num3))

/*****************************************************************************/

/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

function fibonacci(num) {
    // EDGE CASE
    if (num == 0) return 0

    // BASE CASE
    if (num == 1){
        zeroIdxVal = 0
        firstIdxVal = 1
        return zeroIdxVal + firstIdxVal
    }

    // FORWARD PROGRESS & RECURSIVE CALL
    nextIdxVal = fibonacci(num - 1) + fibonacci(num - 2)
    return nextIdxVal
}

// shawn's solution
function fibonacci(num){
    // EDGE CASE
    if (num < 0) return null

    // BASE CASE
    if (num < 2) return num

    // FORWARD PROGRESS AND RECURSIVE CALL
    return fibonacci(num - 1) + fibonacci(num - 2)
}

// shawn's second solution with memoization
    // the keys are the position in the fibonacci sequence (0:0)
    // the values are the values at the positions (1:1)
    // we are saving the past calculations so we aren't redoing it many times
    // memo is an object that we are storing into
function fibMemoized(num, memo = {0:0, 1:1}){
    if (num < 0) return null

    if (memo[num] !== undefined) return memo[num]

    memo[num] = fibMemoized(num - 1, memo) + fibMemoized(num - 2, memo)

    return memo[num]
}

const num1 = 0;
const expected1 = 0;
console.log(fibonacci(num1))
console.log(fibMemoized(num1))

const num2 = 1;
const expected2 = 1;
console.log(fibonacci(num2))
console.log(fibMemoized(num2))

const num3 = 2;
const expected3 = 1;
console.log(fibonacci(num3))
console.log(fibMemoized(num3))

const num4 = 3;
const expected4 = 2;
console.log(fibonacci(num4))
console.log(fibMemoized(num4))

const num5 = 4;
const expected5 = 3;
console.log(fibonacci(num5))
console.log(fibMemoized(num5))

const num6 = 8;
const expected6 = 21;
console.log(fibonacci(num6))
console.log(fibMemoized(num6))


/*****************************************************************************/
// Wednesday
    // did the iterative version of binary search last Tuesday (week 3)
/*
Recursive Binary Search
Input: SORTED array of ints, int value
Output: bool representing if value is found
Recursively search to find if the value exists, do not loop over every element.
Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/

// works but shorter version that i did below this function
// function binarySearch(sortedNums, searchNum) {
//     // BASE CASE
//     if (sortedNums.length <= 1) return false

//     // FORWARD PROGRESS & RECURSIVE CALL
//     var startIdx = 0
//     var endIdx = sortedNums.length - 1
//     var middleIdx = Math.floor((startIdx + endIdx)/2)

//     if (searchNum == sortedNums[middleIdx]){
//         return true
//     }

//     else if (searchNum < sortedNums[middleIdx]){
//         sortedNums = sortedNums.slice(0, middleIdx)
//         // case where length is two, check both
//         if (sortedNums.length == 2){
//             if (searchNum == sortedNums[0] || searchNum == sortedNums[1]) return true
//             else return false
//         }
//         else return binarySearch(sortedNums, searchNum)
//     }

//     else {
//         sortedNums = sortedNums.slice(middleIdx+1, sortedNums.length-1)
//         // case where length is two, check both
//         if (sortedNums.length == 2){
//             if (searchNum == sortedNums[0] || searchNum == sortedNums[1]) return true
//             else return false
//         }
//         else return binarySearch(sortedNums, searchNum)
//     }
// }

// my solution:
function binarySearch(sortedNums, searchNum) {
    // BASE CASE
    if (sortedNums.length < 1) return false

    // FORWARD PROGRESS & RECURSIVE CALL
    var startIdx = 0
    var endIdx = sortedNums.length - 1
    var middleIdx = Math.floor((startIdx + endIdx)/2)

    if (searchNum == sortedNums[middleIdx]){
        return true
    }

    else if (searchNum < sortedNums[middleIdx]){
        sortedNums = sortedNums.slice(0, middleIdx+1)
        return binarySearch(sortedNums, searchNum)
    }

    else {
        sortedNums = sortedNums.slice(middleIdx, sortedNums.length-1)
        return binarySearch(sortedNums, searchNum)
    }
}

// re-polished my solution
function binarySearch(sortedNums, searchNum) {
    // Base case
    if (sortedNums.length < 1) return false

    // Forward progress & Recursive call 
    var middleIdx = Math.floor((0 + sortedNums.length - 1) / 2)

    if (searchNum == sortedNums[middleIdx]) return true
    else if (searchNum < sortedNums[middleIdx]){
        sortedNums = sortedNums.slice(0, middleIdx)
        return binarySearch(sortedNums, searchNum)
    }
    else {
        sortedNums = sortedNums.slice(middleIdx+1, sortedNums.length)
        return binarySearch(sortedNums,searchNum)
    }
}

// dana's group's solution
function binarySearch(sortedNums, searchNum) {
    var mid = Math.floor(sortedNums.length / 2)

    // Base case
    if (sortedNums.length === 1 && sortedNums[0] != searchNum) {
        return false
    }
    // Number is equal to the middle element
    if ((searchNum === sortedNums[mid])) {
        return true
    }
    //Number is less than the middle element, so search left
    else if (searchNum < sortedNums[mid]) {
        return binarySearch(sortedNums.slice(0, mid), searchNum)
    //Number is greater than the middle element, so search right
    } else if (searchNum > sortedNums[mid]) {
        return binarySearch(sortedNums.slice(mid), searchNum)
    }
}

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;
console.log(binarySearch(nums2, searchNum2))

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;
console.log(binarySearch(nums1, searchNum1))

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;
console.log(binarySearch(nums3, searchNum3))

const nums4 = [3];
const searchNum4 = 3;
const expected4 = true;
console.log(binarySearch(nums4, searchNum4))
/*****************************************************************************/
// Thursday
/* 
Recursively reverse a string
helpful methods:
str.slice(beginIndex[, endIndex])
returns a new string from beginIndex to endIndex exclusive
*/

function reverseStr(str) {
    // EDGE CASE
    if (str.length == 0) return ""

    // BASE CASE
    if (str.length == 1) return str[0]

    // FORWARD PROGRESS & RECURSIVE CALL
    return str[str.length - 1] + reverseStr(str.slice(0, str.length-1))
}

// shawn's solution:
function reverseStr(str) {
    // BASE CASE - EDGE CASE
    if (str.length < 2) return str

    // FORWARD PROGRESS & RECURSIVE CALL
    var strLessFirst = str.slice(1)
    return reverseStr(strLessFirst) + str[0]
}

const str1 = "abc";
const expected1 = "cba";
console.log(reverseStr(str1))

const str3 = "Hello World!";
const expected3 = "!dlroW olleH";
console.log(reverseStr(str3))

const str2 = "";
const expected2 = "";
console.log(reverseStr(str2))


/*****************************************************************************/

/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

// our group. almost works
function sumToOneDigit(num) {
    // EDGE CASE
    if (parseInt(num) == NaN) return null 

    // BASE CASE
    if (num < 10) return num

    // FORWARD PROGRESS & RECURSIVE CALL
    num = num.toString()
    strArr = num.split("")
    last_digit = strArr[strArr.length-1] 
    strArr.pop() 
    if (parseInt(last_digit) + parseInt(sumToOneDigit(strArr)) < 10){
        return parseInt(last_digit) + parseInt(sumToOneDigit(strArr))
    }
    else {
        newArr = parseInt(last_digit) + parseInt(sumToOneDigit(strArr)) // newArr = 10
        strArr = strArr.toString() // ['1', '1']
        secondStrArr = strArr.split("")
        last_digit = secondStrArr[secondStrArr.length-1] // string '8'
        // console.log("last_digit: " , last_digit) // 1
        // console.log("secondStrArr: " , secondStrArr) // ['1']
        return parseInt(last_digit) + parseInt(sumToOneDigit(secondStrArr))
    }
}

// // shawn's solution
// function sumToOneDigit(num) {
//     // EDGE CASE
//     if (isNaN(parseInt(num))) return null
//     // BASE CASE
//     if (num < 10) return num
//     // FORWARD PROGRESS / WORK
//     var strNum = num.toString()
//     var sum = 0;
//     for (var strDigit of strNum){
//         sum += parseInt(strDigit)
//     }
//     // RECURSIVE CALL
//     return sumToOneDigit(sum)
// }

// // garrett's and dana's group: so nicely done
// function sumToOneDigit(num) {
//     // BASE CASE
//     if (num <= 9) return num;
//     if (typeof(num) != "number" ) return null

//     return sumToOneDigit(num%10 + Math.floor(sumToOneDigit((num/10))));
// }

const num1 = 5;
const expected1 = 5;
console.log(sumToOneDigit(num1))

const num2 = 10;
const expected2 = 1;
console.log(sumToOneDigit(num2))

const num3 = 25;
const expected3 = 7;
console.log(sumToOneDigit(num3))

const num4 = 38;
const expected4 = 2;
console.log(sumToOneDigit(num4))

const num5 = "dog"
const expected5 = null;
console.log(sumToOneDigit(num5))

// doesn't work. how do you get more digits to work?
const num6 = 379;
const expected6 = 1;
console.log(sumToOneDigit(num6))

// doesn't work
const num7 = 12345;
const expected7 = 6;
console.log(sumToOneDigit(num7))

/*****************************************************************************/
//Friday
/*
Given an array nested with unknown amount of arrays,
return the integers all under ONE array.
*/


function recursiveFlatten(arr) {
    for (var i=0;i<arr.length;i++){
        if (Array.isArray(arr[i])){
            arr = arr.slice(0,i).concat(recursiveFlatten(arr[i])).concat(arr.slice(i+1))
        }
    }
    return arr
}

// another group's solution
function recursiveFlatten(arr) {
    let result = []
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...recursiveFlatten(arr[i]))
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// shawn's solution
function recursiveFlatten(arr){
    var returnArr = []

    for (var i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            returnArr = returnArr.concat(recursiveFlatten(arr[i]))
        }
        else { // if current index is not an array
            returnArr.push(arr[i])
        }
    }

    return returnArr
}

const arr1 = [1, 2, 3, 4, 5, 6];
const expected1 = [1, 2, 3, 4, 5, 6];
console.log(recursiveFlatten(arr1))

const arr2 = [1, 2, [4, 5], 6];
const expected2 = [1, 2, 4, 5, 6];
console.log(recursiveFlatten(arr2))

const arr3 = [1, 2, [3, 4, [5]], 6];
const expected3 = [1, 2, 3, 4, 5, 6];
console.log(recursiveFlatten(arr3))

const arr4 = [1, 5, [3, 4, [5]], 6];
const expected4 = [1, 5, 3, 4, 5, 6];
console.log(recursiveFlatten(arr4))

/* 
Two useful built in functions:
Array.isArray() : returns true if argument is an array
- Array.isArray([1, 2, 3]) => true
- Array.isArray([4, 5, 6]) => true
- Array.isArray(1) => false

Array.concat() : concatenates two arrays together
- arr1.concat(arr2) => [1, 2, 3, 4, 5, 6, 1, 2, [4, 5], 6]
*/