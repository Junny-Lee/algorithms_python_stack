// notes on recursion

function example(){
    console.log("Hello")
    return example() // can do example() here instead of return
}

example() // this will be an infinite loop
// every time a function is called, there is a new piece of memory opened
// you will get a stack overflow error

// different from a while loop that's infinite:
while (true){
    console.log("Hello")
}
// ************************************************************

// example of recursive function:
function multArr(nums){
    // BASE CASE - where should I stop
    if (nums.length < 1) return null

    // FORWARD PROGRESS
    newArr = nums.slice(1, nums.length) // taking off the first element and creating a new array

    // RECURSIVE CALL
    return nums[0] * multArr[newArr]
}