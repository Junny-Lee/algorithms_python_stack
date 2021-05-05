// how to go through objects in JS:
someObj = {}
for (var key in someObj) // loops through keys
for (var value of someObj) // loops through values

for value in dict.values()

for thing in dict
for thing in dict.keys*()

// Monday
/* 
Balance Point
Write a function that returns whether the given
array has a balance point BETWEEN indices, 
where one side’s sum is equal to the other’s. 
*/

function balancePoint(nums) {
    var sum_left = 0
    var sum_right = 0
    for (var i = 0; i < nums.length; i++){
        for (var k = i; k >= 0; k--){
            sum_left += nums[k]
        }
        for (var j = i + 1; j < nums.length; j++){
            sum_right += nums[j]
        }
        if (sum_left == sum_right) {
            return true
        } 
        else {
            sum_left = 0
            sum_right = 0
        }
    }
    return false
}

function balancePoint(nums) {
    var sum_left = 0
    var sum_right = 0
    for (var j = 1; j < nums.length; j++){
        sum_left += nums[j-1]
        console.log("sum_left: ", sum_left)
        for (var i = j ; i < nums.length; i++){
            sum_right += nums[i]
            }
        console.log("sum_right: ", sum_right)
        if (sum_right - sum_left == 0){
            return true
        }
        else {
            sum_right = 0
        }
    }
    return false
}

// shawn's solution
function balancePoint(nums) {
    // fix the variable if you dont want to type it out everytime; if array length changes throughout but want to still do the operations the same number of times
    var len = nums.length;

    // edge case (dont do the work)
    if (len < 2) return false // if one thing in the array

    // SETUP
    var leftSum = nums[0]
    var rightSum = 0

    // WORK 
    for (var i = 1; i < len; i++){
        rightSum += nums[i]
    }

    for (var i = 1; i < len; i++){
        if (leftSum == rightSum) return true
        rightSum -= nums[i]
        leftSum += nums[i]
    }
}

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
console.log(balancePoint(nums1))

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;
console.log(balancePoint(nums2))

/*****************************************************************************/

/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.
*/

// my solution
function balanceIndex(nums) {
    var sum_left = 0
    var sum_right = 0
    for (var i = 0 ; i < nums.length; i++){
        for (var j = 0; j < i; j++){
            sum_left += nums[j]
        }
        for (var k = nums.length -1; k > i; k--){
            sum_right += nums[k]
        }
        if (sum_left == sum_right){
            return i
        }
        sum_left = 0
        sum_right = 0
    }
    return -1
}

// group's solution 
function balanceIndex(nums) {
    var sum_left = 0
    var sum_right = 0
    for (var j = 0; j < nums.length; j++){
        sum_left += nums[j]
        for (var i = j ; i < nums.length; i++){
            sum_right += nums[i]
            }
        if (sum_right - sum_left == 0){
            return j
        }
        else {
            sum_right = 0
        }
    }
    return -1
}

// shawn's solution
function balanceIndex(nums) {
    var len = nums.length;

    //EDGE CASE
    if (len < 3) return -1

    var leftSum = nums[0]
    var rightSum = 0

    // doesn't make sense to have a balanceIndex at 0.
    // index 1 also doesn't make sense because nums[0] is in leftSum already
    for (var i = 2; i < len; i++){
        rightSum += nums[i]
    }

    for (var i = 2; i < len; i++){
        if (leftSum === rightSum) return i
        
        rightSum -= nums[i + 1]
        leftSum += nums[i]
    }

    return -1
}

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;
console.log(balanceIndex(nums1))

const nums2 = [9, 9];
const expected2 = -1;
console.log(balanceIndex(nums2))

/*****************************************************************************/

// Tuesday 
/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
*/

function binarySearch(sortedNums, searchNum) {
    var start = 0
    var end = sortedNums.length -1 

    while (start <= end){
        var middle = Math.floor((start + end)/2)
        if (sortedNums[middle] == searchNum) return true
        else if (sortedNums[middle] > searchNum){
            end = middle - 1 
        }
        else{
            start = middle + 1
        }
    }
    return false
}

// Shawn's solution
function binarySearch(sortedNums, searchNum) {
    var found = false;
    var idx = Math.floor(sortedNums.length / 2)

    while (!found){
        if (sortedNums[idx] === searchNum){
            found = true
            break
        }
        
        // BASE CASE 
            // array length of 1 (just one number)
        if (sortedNums.length < 2) break

        if (sortedNums[idx] > searchNum){
            sortedNums = sortedNums.slice(0, idx)
            idx = Math.floor(sortedNums.length / 2)
        }

        if (sortedNums[idx] < searchNum) {
            sortedNums = sortedNums.slice(idx+1, sortedNums.length)
            idx = Math.floor(sortedNums.length / 2)
        }
    }
    return found
}

// shawn's solution (variation) where we don't need a boolean variable
function binarySearch(sortedNums, searchNum) {
    var idx = Math.floor(sortedNums.length / 2)

    while (true){
        if (sortedNums[idx] === searchNum){
            found = true
            break
        }
        
        // BASE CASE 
        if (sortedNums.length < 2) return false

        if (sortedNums[idx] > searchNum){
            sortedNums = sortedNums.slice(0, idx)
            idx = Math.floor(sortedNums.length / 2)
        }

        if (sortedNums[idx] < searchNum) {
            sortedNums = sortedNums.slice(idx+1, sortedNums.length)
            idx = Math.floor(sortedNums.length / 2)
        }
    }
}

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;
console.log(binarySearch(nums1, searchNum1))

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;
console.log(binarySearch(nums2, searchNum2))

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;
console.log(binarySearch(nums3, searchNum3))

/*****************************************************************************/
// Wednesday 

/* 
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array
Bonus: do it in O(n) time (no nested loops, new array ok)
*/

function dedupeSorted(nums) {
    var newArr = []
    newArr.push(nums[0])
    for (var i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i-1]){
            newArr.push(nums[i])
        }
    }
    return newArr
}

const nums1 = [1, 1, 1, 1];
const expected1 = [1];
console.log(dedupeSorted(nums1))

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];
console.log(dedupeSorted(nums2))

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];
console.log(dedupeSorted(nums3))

/*****************************************************************************/

/* 
Array: Mode

Create a function that, given an array of ints,
returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
- return all of them (in an array)
- what if all items occur the same number of times?
- return empty array
*/

function mode(nums) {
    var table = {}
    var returnArr = []
    var highestValue = 0

    if (nums.length == 0) return []
    if (nums.length == 1) return nums

    // make frequency table
    for (var i = 0; i < nums.length; i++){
        if (table.hasOwnProperty(nums[i])){
            table[nums[i]]++
        }
        else {
            table[nums[i]] = 1
        }
    }

    // find the highest value 
    for (var key in table){
        var value = table[key]
        if (value > highestValue){
            highestValue = value
        } 
    }

    //edge case where the values are the same for all the keys
    for (var key in table){
        if (table[key] != highestValue){ // if any of the values in the dictionary are different
             // find all the keys with highestValue
            for (var key in table){
                if (table[key] == highestValue){
                    returnArr.push(key)
                }
            }
            break
        }
    }
    // another way to do the last for loop (not nested):

    // for (var key in table){
    //     if (table[key] != highestValue){
    //         test = true
    //     }
    // }
    // if (test) {
    //     for (var key in table){
    //         if (table[key] == highestValue){
    //             returnArr.push(key)
    //         }
    //     }
    // }

    return returnArr
}

const nums1 = [];
const expected1 = [];
console.log(mode(nums1))

const nums2 = [1];
const expected2 = [1];
console.log(mode(nums2))

const nums3 = [5, 1, 4];
const expected3 = [];
console.log(mode(nums3))

const nums4 = [5, 1, 4, 1];
const expected4 = [1];
console.log(mode(nums4))

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter
console.log(mode(nums5))


/*****************************************************************************/


// Thursday:
/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/
function fewestCoinChange(cents) {
    var coins = {
    }
    if (cents <= 0) return {}

    var quarter = Math.floor(cents / 25)
    cents -= 25 * quarter
    var dime = Math.floor(cents / 10)
    cents -= 10 * dime
    var nickel = Math.floor(cents / 5)
    cents -= 5 * nickel
    var penny = Math.floor(cents / 1)
    cents -= penny

    if (quarter != 0) coins['quarter'] = quarter
    if (dime != 0) coins['dime'] = dime
    if (nickel != 0) coins['nickel'] = nickel
    if (penny != 0) coins['penny'] = penny

    return coins
}

// shawn's solution
function fewestCoinChange(cents) {
    var coins = {}

    if (cents >= 25){
        var quartersCount = Math.floor(cents / 25)
        cents -= quartersCount * 25
        coins['quarter'] = quartersCount
    }
    if (cents >=10){
        var dimesCount = Math.floor(cents / 10)
        cents -= dimesCount * 10
        coins['dime'] = dimesCount
    }
    if (cents >= 5){
        var nickelsCount = Math.floor(cents / 5)
        cents -= nickelsCount * 5
        coins['nickel'] = nickelsCount
    }
    if (cents > 0){
        coins['penny'] = cents
    }
    return coins
}

const cents1 = 25;
const expected1 = { quarter: 1 };
console.log(fewestCoinChange(cents1))

const cents2 = 50;
const expected2 = { quarter: 2 };
console.log(fewestCoinChange(cents2))

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };
console.log(fewestCoinChange(cents3))

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };
console.log(fewestCoinChange(cents4))

/*****************************************************************************/

/* 
Missing Value
You are given an array of length N that contains, in no particular order,
integers from 0 to N . One integer value is missing.
Quickly determine and return the missing value.
*/

function missingValue(unorderedNums) {
    var max = unorderedNums[0]
    // find max
    for (var i = 1; i < unorderedNums.length; i++){
        if (unorderedNums[i] > max) max = unorderedNums[i]
    }
    for (var j = 0; j < max; j++){
        if (unorderedNums.indexOf(j) == -1) return j 
    }
    return null
}

function missingValue(unorderedNums) {
    var max = Math.max(...unorderedNums)
    for (var i = 0; i < max; i++){
        if (unorderedNums.indexOf(i) === -1) return i
    }
    return null
}

const nums1 = [3, 0, 1];
const expected1 = 2;
console.log(missingValue(nums1))

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing
console.log(missingValue(nums2))

/*****************************************************************************/
//  Friday
/* 
Given an array of integers
return the first integer from the array that is not repeated anywhere else
If there are multiple non-repeated integers in the array,
the "first" one will be the one with the lowest index.
*/

function firstNonRepeated(nums) {
    var table = {}
    if (nums.length == 0) return null
    if (nums.length == 1) return nums[0]

    // build frequency table
    for (var i = 0; i < nums.length; i++){
        if (table.hasOwnProperty(nums[i])) table[nums[i]]++
        else table[nums[i]] = 1
    }
    
    for (var key in table){
        if (table[key] == 1){
            return key
        }
    }
}

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;
console.log(firstNonRepeated(nums1))

const nums2 = [3, 5, 5];
const expected2 = 3;
console.log(firstNonRepeated(nums2))

const nums3 = [3, 3, 5];
const expected3 = 5;
console.log(firstNonRepeated(nums3))

const nums4 = [5];
const expected4 = 5;
console.log(firstNonRepeated(nums4))

const nums5 = [];
const expected5 = null;
console.log(firstNonRepeated(nums5))
