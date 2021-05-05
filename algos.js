// Tuesday (day 2 4/6)

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

// str1.split("") => [" ", "t", "h", "e"]
// str1.split(" ") => ["there's", "no", "free", "lunch"]

function acronymize(str) {
    // set up
    var acronym = "";
    var words = str.split(" ");

    // work 
    for (var i = 0; i < words.length; i++) {
        if (words[i][0] != undefined){
            acronym += words[i][0];
        }
    }
    // acronym.toUpperCase(); // not working? //.toUpperCase doesn't change the original string - needs a new string
	var string_ = acronym.toUpperCase(); //.toUpperCase doesn't change the original string - needs a new string
    
    //return
    return string_;
}

console.log(acronymize(str1));
console.log(acronymize(str2));

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

function acronymize2(str){
    var acronym2 = "";
    for (var i = 0; i < str.length-1; i++){
        if (str[i] == " "){
            acronym2 += str[i+1];
        }
        else if (i == 0){
            acronym2 += str[0];
        }
    }
    return acronym2
}

console.log("acronym2 is: " + acronymize2(str1));
console.log("acronym2 is: " + acronymize2(str2));

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

function reverseString(str) {
	var reversed = ""; // always need a new string because strings are immutable! 
	for (var i = str.length - 1; i >= 0; i--){
        reversed += str[i];
        // .push() is only for arrays
	}
	return reversed
}

console.log(reverseString(str1));
console.log(reverseString(str2));


/********************************************************/
/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
    parensArr = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == "(" || str[i] == ")"){
        parensArr.push(str[i])
        }
    }
    if (parensArr[parensArr.length - 1] == "(" || parensArr[0] == ")"){
        return false
    }
    else if (parensArr.length % 2 == 1){ // if number of parens is odd
        return false
    }
    else{  // number of parens is even && the last one is not opening
        var openingCounter = 0;
        var closingCounter = 0;
        for (var i = 0; i < parensArr.length; i++){
            if (parensArr[i] == "("){
                openingCounter++;
            }
            else{
                closingCounter++;
            }
        }
        if (openingCounter != closingCounter){
            return false
        }
        else{
            return true
        }
    }
}


// good solutions very efficient

function parensValid(str) {
    // SETUP
    let parenthesisTrack = 0
    //WORK
    for(let i = 0; i < str.length ;i++){
        if (str[i] === "("){
        parenthesisTrack++
    }
        else if (str[i] === ")"){
        parenthesisTrack--
    }
        if (parenthesisTrack < 0){
        // Return if negative - this means there was a closing paren without an opening
        return false 
        }
    }
    // RETURN
    return parenthesisTrack === 0
}

// loop through string
// +1 for every opening bracket 
// -1 for every closing bracket 
// each time it finds a bracket, it checks to see if the value is negative 
// if so it immediately returns false
// at the end of the string, check and see if the value is 0
// if it is not 0, return false 
// else return true 

var str1 = "Y(3(p)p(3)r)s";
console.log(parensValid(str1))

var str2 = "N(0(p)3";
console.log(parensValid(str2))

var str3 = "N(0)t ) 0(k";
console.log(parensValid(str3))

var str4 = "a(b))(c";
console.log(parensValid(str4))

/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

function bracesValid(str) {
    parensArr = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == "(" || str[i] == ")"){
        parensArr.push(str[i])
        }
    }
    return parensArr
}

var str11 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"; //  ({}[({})])[{}] TRUE
console.log(bracesValid(str11))

var str22 = "D(i{a}l[ t]o)n{e";     // ({}l[]){ FALSE
console.log(bracesValid(str22))

var str33 = "A(1)s[O (n]0{t) 0}k"; // ()[(]{)} FALSE
console.log(bracesValid(str33))

// good solution 
function bracesValid(str) {
    // SETUP
    var stack = [];
    var opens = "({[";
    var closeToOpen = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    // WORK
    for (var i = 0; i < str.length; i++) {
        if (opens.includes(str[i])) {
        // checking if current char is an opening brace
        stack.push(str[i]);
        } else if (str[i] in closeToOpen) {
            // checking if current char is a closing brace
            // checking if the current closing brace matches what is at the end of the stack
            // if they match, its a valid brace closure
            if (closeToOpen[str[i]] === stack[stack.length - 1]) {
                stack.pop();
              // if they do not match, it is invalid brace so return false
            } else {
                return false;
            }
        }
    }
    // RETURN
    return stack.length === 0;
}
  // const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";

var str11 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"; //  ({}[({})])[{}] TRUE
console.log(bracesValid(str11))

var str22 = "D(i{a}l[ t]o)n{e";     // ({}l[]){ FALSE
console.log(bracesValid(str22))

var str33 = "A(1)s[O (n]0{t) 0}k"; // ()[(]{)} FALSE
console.log(bracesValid(str33))


/*****************************************************************************/

/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. - palindrome = string that is same forwards and backward
Do not ignore spaces, punctuation and capitalization
 */

function isPalindrome(str) {
    for (var i = 0; i < str.length/2; i++){
        if (str[i] != str[str.length-1-i])
        return false
    }
    return true
}

/* wow so clean. understand the .split and .reverse and .join 
    .split(""), splits the str into individual letters into an array
    .reverse(), reverses the array
    .join(""), re-joins the array of letters back to string 
    string is compared to the original str
*/
function isPalindromeOneLine(str) {
    return str === str.split("").reverse().join("")
}

const str1 = "a x a";
const expected1 = true;
console.log(isPalindrome(str1))

const str2 = "racecar";
const expected2 = true;
console.log(isPalindrome(str2))

const str3 = "Dud";
const expected3 = false;
console.log(isPalindrome(str3))

const str4 = "oho!";
const expected4 = false;
console.log(isPalindrome(str4))

/*****************************************************************************/

/* 
Longest Palindrome
For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
Strings longer or shorter than complete words are OK.
All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

/* group attempt */
// function longestPalindromicSubstring(str) {
//     var temp = "";
//     var tempAnswer = null
//     for (var j = 0; j < str.length; j++){
//         for (var i = str.length-1; i > j; i--){
//             if (str[j] == str[i]){
//                 for (var k = j; k <= i; k++){
//                     temp += str[k]
//                     tempAnswer = isPalindrome(temp)
//                     console.log("here is temp:", temp)
//                 }
//                 if (tempAnswer == true){
//                     console.log("here")
//                     return temp
//                 }
//                 // tempAnswer = isPalindrome(temp)
//                 console.log(tempAnswer)
//             }
//         }
//         temp = ""
//     }
//     return temp  
// } 

function isPalindrome(str) {
    return str === str.split("").reverse().join("")
}

// solution !
function longestPalindromicSubstring(str){
    // SET UP
    var longestPalindrome = str[0];

    // WORK
    // generating every single sub string 1 at a time 
    // check to see if it is a palindrome
    // if it is, we then check its length against longestPalindrome
    for (var i = 0; i < str.length; i++){
        for (var j = i + 1; j < str.length + 1; j++){
            var subStr = str.slice(i,j);
            if (subStr.length > longestPalindrome.length && isPalindrome(subStr)){
                longestPalindrome = subStr;
            }
        }
    }

    // RETURN
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

// our groups solution
// function join(arr, separator){
//     var str = ""
//     str = arr.join(separator)
//     return str
// }

// class solution from Dana
function join(arr, separator){
    var result = "";
    if (separator == ""){
        separator = ", "
    }
    if (arr.length > 0){
        for (var i = 0; i < arr.length-1; i++){
            result += arr[i] + separator
        }
        result += arr[arr.length-1]
    }
    return result
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
    // SETUP
    var str = "";

    // WORK
    for(var i = 0; i < nums.length; i++){
        var j = i + 1; // grab two pointers (i and j)
        while (nums[j] == nums[j-1] + 1){
            j++
        }
        // if j is equal to the i + 1, then the next number is not a sequence
        // determining if there is a sequence or not
        if (j == i + 1){
            str += nums[i]
        }
        // check if there is a sequence 
        // if j is greater than i + 1, then we found a sequence 
        // j is one past the last number in the sequence 
        if (j > i + 1){
            str += nums[i] + "-" + nums[j-1]
            i = j - 1 // we need to move past the sequence 
        }
        // if i is not at nums.length-1, then append a comma & space
        if (i < nums.length-1){
            str += ", "
        }
    }

    // RETURN
    return str;
}

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";
console.log(bookIndex(nums1))
