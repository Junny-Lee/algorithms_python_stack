// Re-doing algos because it was hard this week!

/*
Acroynms
Create a function that, given a string, returns the string's acronym 
(first letter of each word capitalized).
Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

function acronymize(str) {
    var words = str.split(" ")
    var acronym = ""
    for (var i = 0; i < words.length; i++){
        if (words[i] != ""){
            acronym += words[i][0].toUpperCase()
        }
    }
    return acronym
}

console.log(acronymize(str1));
console.log(acronymize(str2));

/********************************************************/
/*
String: Reverse
Given a string, 
return a new string that is the given string reversed
*/
// strings are immutable
// strings are 0 indexed 

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

// STRINGS ARE IMMUTABLE!!!!!! CAN'T FLIP WITH TEMP VARIABLE LIKE I CAN WITH NUMBERS. MUST DO += TO EMPTY STRING!
function reverseString(str) {
    var newStr = ""
    for (var i = str.length -1; i >= 0; i-- ){
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString(str1));
console.log(reverseString(str2));


/********************************************************/
/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

function parensValid(str) {
    var sum = 0
    for (var i = 0; i < str.length; i++){
        if (str[i] == "("){
            sum++
        }
        else if (str[i] == ")"){
            sum -= 1
        }
        if (sum < 0){   // this means parenthesis are out of order 
            return false
        }
    }
    console.log("sum now is: ", sum)
    if (sum == 0){
        return true
    }
    else{
        return false
    }
}

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;
//console.log(parensValid(str1))

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.
console.log(parensValid(str2))

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.
console.log(parensValid(str3))

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing
console.log(parensValid(str4))


/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

var example = "["
console.log(example.includes('['))

function bracesValid(str) {
    var stack = []
    var opens = "({["
    var closeToOpen = {
        "}" : "{",
        ")" : "(",
        "]" : "[",
    }
    for (var i = 0 ; i < str.length; i++){
        if (opens.includes(str[i])){
            stack.push(str[i])
        }
        else if (str[i] in closeToOpen){
            if (closeToOpen[str[i]] === stack[stack.length -1]){
                stack.pop()
            }
            else {
                return false
            }
        }
    }
    return stack.length === 0
}

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;
console.log(bracesValid(str1))

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;
console.log(bracesValid(str2))

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;
console.log(bracesValid(str3))


/*****************************************************************************/

/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. - palindrome = string that is same forwards and backward
Do not ignore spaces, punctuation and capitalization
 */

function isPalindrome(str) {
    for (var i = 0; i < str.length/2; i++){
        if (str[i] != str[str.length - 1 - i]){
            return false
        }
    }
    return true
}


function isPalindromeOneLine(str) {
    var splitStr = str.split("")
    console.log(splitStr)
    var reverseStr = splitStr.reverse()
    console.log(reverseStr)
    var joinedStr = reverseStr.join("")
    console.log(joinedStr)
    return str === joinedStr

    // one liner:
    // return str === str.split("").reverse().join("")
}

const str1 = "a x a";
const expected1 = true;
// console.log(isPalindrome(str1))
console.log(isPalindromeOneLine(str1))

const str2 = "racecar";
const expected2 = true;
// console.log(isPalindrome(str2))
console.log(isPalindromeOneLine(str2))

const str3 = "Dud";
const expected3 = false;
// console.log(isPalindrome(str3))
console.log(isPalindromeOneLine(str3))

const str4 = "oho!";
const expected4 = false;
// console.log(isPalindrome(str4))
console.log(isPalindromeOneLine(str4))

/*****************************************************************************/

/* 
Longest Palindrome
For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
Strings longer or shorter than complete words are OK.
All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

function isPalindromeOneLine(str) {
    return str === str.split("").reverse().join("")
}

function longestPalindromicSubstring(str){
    var longestPalindrome = str[0]
    for (var i = 0 ; i < str.length; i++){
        for (var j = i; j < str.length + 1; j++){
            var subStr = str.slice(i,j)
            if (subStr.length > longestPalindrome.length && isPalindromeOneLine(subStr)){
                longestPalindrome = subStr;
            }
        }
    }
    return longestPalindrome
}

const str1 = "what up, daddy-o?";
const expected1 = "dad";
console.log(longestPalindromicSubstring(str1))

const str2 = "uh, not much";
const expected2 = "u";
// console.log(longestPalindromicSubstring(str2))

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";
// console.log(longestPalindromicSubstring(str3))


/*****************************************************************************/
/* 
Given an arr and a separator string, output a string of every item in the array separated by the separator.

No trailing separator at the end
Default the separator to a comma with a space after it if no separator is provided
*/

function join(arr, separator){
    var str = ""
    for (var i = 0; i < arr.length-1; i++){
        str += arr[i] + separator
    }
    str += arr[arr.length-1]
    return str
}

const arr1 = [1,2,3];
const separator1 = ", "
const expected1 = "1, 2, 3";
var joinedArr1 = join(arr1, separator1)
console.log(joinedArr1)

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";
var joinedArr2 = join(arr2, separator2)
console.log(joinedArr2)

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";
var joinedArr3 = join(arr3, separator3)
console.log(joinedArr3)

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";
var joinedArr4 = join(arr4, separator4)
console.log(joinedArr4)

const arr5 = [];
const separator5 = ", ";
const expected5 = "";
var joinedArr5 = join(arr5, separator5)
console.log(joinedArr5)


/*****************************************************************************/

/* 
Book Index
Given an arry of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

function bookIndex(nums) {
    var count = 0
    var returnStr = ""
    var i = 0
    while (i < nums.length){
    // for (var i = 0; i < nums.length; i++){
        if (nums[i] + 1 != nums[i+1]){
            returnStr = returnStr + nums[i] + ", "
            i++
            count = 0
        }
        else{
            while (nums[i] + 1 == nums[i+1]){
                count++
                i++
            }
            returnStr = returnStr + nums[i-count] + "-" + nums[i] + ", "
            i += count
            count = 0
        }
    }
    var final = returnStr.slice(0, returnStr.length-2)
    return final
}

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";
console.log(bookIndex(nums1))
