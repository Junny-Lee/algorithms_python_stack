/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/


const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) {
    var uniqueCount = 0
    var encodedString = ""
    for(var i = 0; i < str.length ;i++){
        var checkVal = str[i]
        var j = i
        while (j < str.length){
        if (str[j] === checkVal){
            uniqueCount++
            j++
        } 
        else {
            break
        }
        
        }
        encodedString+= str[i]
        encodedString+= uniqueCount
        i+= uniqueCount - 1
        uniqueCount = 0
    }
    if (encodedString.length < str.length ){
        return encodedString
    }
    return str
}
    console.log(encodeStr(str1))
    console.log(encodeStr(str2))
    console.log(encodeStr(str3))
    console.log(encodeStr(str4))

/*****************************************************************************/

/* 
    String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
    var decodedString = ""
    for (var i = 0; i < str.length ;i=i+2){
        for (var j = 0; j < str[i+1]; j++){
        decodedString += str[i]
        }
    }
    return decodedString
}

console.log(decodeStr(str1))


function decodeStr(str){
    // SETUP
    var decoded = ""

    // WORK
    for (var i = 0; i < str.length; i ++){
        var n = parseInt(str[i])
        // can be a number
        // or it can be NaN
        // NaN == false
        if (n) {
            decoded += str[i-1].repeat(n)
        }
    }
    // RETURN
    return decoded
}


/*****************************************************************************/
/* 
Given an array of strings
return a sum to represent how many times each array item is found (a frequency table)
Useful methods:
Object.hasOwnProperty("keyName")
- returns true or false if the object has the key or not
Python: key in dict
*/

function frequencyTableBuilder(arr) {
    var object = {}
    for (var i = 0; i < arr.length; i++){
        var letter = arr[i]
        if (object.hasOwnProperty(letter)){ // if letter exists in obj
            object[letter] += 1 // object.letter += 1 doesn't work
        }
        else {  // if letter doesn't exist in obj yet 
            object[letter] = 1
        }
    }
    return object
}

// Shawn's solution
function frequencyTableBuilder(arr) {
    // SETUP
    var table = {}
    // WORK
    for (var i = 0; i < arr.length; i++){
        if (table.hasOwnProperty(arr[i])){
            table[arr[i]]++
        }
        else {
            table[arr[i]] = 1
        }
    }
    //RETURN
    return table
}

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
console.log(frequencyTableBuilder(arr1))

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};
console.log(frequencyTableBuilder(arr2))

const arr3 = [];
const expected3 = {};
console.log(frequencyTableBuilder(arr3))

/*****************************************************************************/

/* 
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

function reverseWordOrder(wordsStr) {
    var wordsArr = wordsStr.split(" ")
    var returnStr = ""
    for (var i = wordsArr.length - 1; i >= 0; i--){
        returnStr += wordsArr[i]
        returnStr += " "
    }
    returnStr = returnStr.slice(0, returnStr.length - 1)
    return returnStr
}

// shawn's solution:
// this only has two loops!
function reverseWordOrder(wordsStr) {
    var wordsArr = wordsStr.split(" ") // first loop
    var returnStr = ""
    // second loop
    for (var i = wordsArr.length - 1; i >= 0; i--){
        returnStr += wordsArr[i]
        // not add a space at the end of the string
        if (i !== 0){
            returnStr += " "
        }
    }

    return returnStr
}

function reverseWordOrderOneLine(wordStr){
    // split(), reverse(), join() are all loops
    // this function uses 3 loops total
    return wordStr.split(" ").reverse().join(" ")
}

// note: the top one might be more efficient than the oneLiner since the latter one did more work
// never judge code by its length! 


const str1 = "This is a test";
const expected1 = "test a is This";
console.log(reverseWordOrder(str1))


/*****************************************************************************/

/* 
    Given a string,
    return a new string with the duplicates excluded
*/

//shawn's solution 
function stringDedupe(str){
    // SETUP
    var distinctStr = ""
    var seen = {} 

    // WORK
        // undefined turns to False in a boolean
    // starting at the end allows us to include the last occurrence of the duplicate character
        // if we had a string "heleolo" => helo (if we start from the back)
        // if we started from the beginning, we would delete the first occurrence of duplicates
    for (var i = str.length - 1; i >= 0; i--) {
        if (!seen[str[i]]) {
            distinctStr += str[i]
            seen[str[i]] = true
        }
    }
    // RETURN
    return distinctStr
}


// found online
function find_unique_characters( string ){
    var unique='';
    for(var i=0; i<string.length; i++){
        if(unique.indexOf(string[i])==-1){
            unique += string[i];
        }
    }
    return unique;
}

const str2 = "helloo";
const expected2 = "helo";
console.log(stringDedupe(str2))

const str1 = "abcABC";
const expected1 = "abcABC";
console.log(stringDedupe(str1))

/*****************************************************************************/

/* 
    Given a string containing space separated words
    Reverse each word in the string.
    If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
    var arr = str.split(" ")
    var arrWord = []
    var newStr = ""
    for (var i = 0 ; i < arr.length; i ++){
        arrWord[i] = arr[i].split("").reverse().join("")
    }
    for (var j =0; j < arrWord.length; j++){
        newStr += arrWord[j]
        if (j != arrWord.length -1){
            newStr += " "
        }
    }
    return newStr
}

// shawn's solution
function reverseWords(str){
    // SETUP
    var words = str.split(" ")
    var wordsReversed = ""

    // WORK
    for (var word of words){
        var reversedWord = ""
        for (var i = word.length - 1; i >=0; i--){
            reversedWord += word[i]
        }

        // add a space in front of the word if it's not the first word
        if (wordsReversed.length > 0){
            reversedWord = " " + reversedWord
        }

        wordsReversed += reversedWord
    }

    // RETURN
    return wordsReversed
}


const str1 = "hello";
const expected1 = "olleh";
console.log(reverseWords(str1))

const str2 = "hello world";
const expected2 = "olleh dlrow";
console.log(reverseWords(str2))


/*****************************************************************************/

/* 
String: Rotate String
Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

function rotateStr(str, n) {
    var returnStr = ""
    for (var i = str.length - n; i < str.length ; i++){
        returnStr += str[i]
    }
    for (var j = 0; j <= str.length - 1 - n; j++){
        returnStr += str[j]
    }
    return returnStr
}

// tyler's one line solution:
function rotateStrOneLiner (str, n){
    return str.slice(str.length - n) + str.slice(0, str.length - n)
}
    // Dana's solution:
    // return str.substring(str.length-n, str.length) + str.substring(0, str.length-n)

const str1 = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";
console.log(rotateStr(str1, rotateAmnt1))

const str2 = "Hello World";
const rotateAmnt2 = 1;
const expected2 = "dHello Worl";
console.log(rotateStr(str2, rotateAmnt2))
console.log(rotateStrOneLiner(str2, rotateAmnt2))

const str3 = "Hello World";
const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";
console.log(rotateStr(str3, rotateAmnt3))

const str4 = "Hello World";
const rotateAmnt4 = 4;
const expected4 = "orldHello W";
console.log(rotateStr(str4, rotateAmnt4))


/*****************************************************************************/

/* 
Create the function isRotation(str1,str2) that
returns whether the second string is a rotation of the first.
*/

function isRotation(s1, s2) {
    var temp = ""
    if (s1 == s2){
        return false
    }
    for (var i = 1; i < s1.length; i++){
        for (var j = s1.length - i; j <= s1.length - 1; j++){
            temp += s1[j]
        }
        for (var k = 0; k <= s1.length - 1 - i; k++){
            temp += s1[k]
        }
        if (temp == s2){
            return true
        }
        else {
            // can do since reassigning: temp = ""
            temp = temp.slice(0,0)
        }
    }
    return false
}

// shorter solution from Tyler:
function isRotationFewLiner(s1,s2){
    if (s1.length !== s2.length || s1 === s2){
        return false
    }
    return (s1+s1).incldues(s2)
}

const strA1 = "ABCD";
const strB1 = "CDAB";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
console.log(isRotation(strA1, strB1))

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order
console.log(isRotation(strA2, strB2))

/*****************************************************************************/

/* 
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Is there a quick way to determine if they aren't an anagram before spending more time?
Given two strings
return whether or not they are anagrams
*/

function isAnagram(s1, s2) {
    var arr1 = s1.toLowerCase().split("")
    var arr2 = s2.toLowerCase().split("")
    if (arr1.length != arr2.length){
        return false
    }
    else {
        for (var i = 0; i < arr2.length; i++){
            var index = arr1.indexOf(arr2[i])
            // index == -1 means letter in arr2 not found in arr1 --> return false
            if (index == -1){
                return false
            }
            else{
                // arr1[index] = arr1[index].slice(0,0)
                arr1[index] = ""
            }
        }
        var str1 = arr1.join("")
        var str2 = arr2.join("")
        if (str1 != ""){
            return false
        }
        else{
            return true
        }
    }
}

// Shawn's solution 
// compares two strings!
function isAnagramOneLine(s1,s2){
    return s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join("")
} 

// another solution from Shawn
function isAnagram(s1, s2){
    if (s1.length !== s2.length) return false

    // create frequency tables
    var s1CharFreq = {}
    var s2CharFreq = {}

    for (var i = 0; i < s1.length; i++){
        var s1Char = s1[i].toUpperCase()
        var s2Char = s2[i].toUpperCase()

        if (s1CharFreq.hasOwnProperty(s1Char)){
            s1CharFreq[s1Char]++
        }
        else{
            s1CharFreq[s1Char] = 1
        }

        if (s2CharFreq.hasOwnProperty(s2Char)){
            s2CharFreq[s2Char]++
        }
        else{
            s2CharFreq[s2Char] = 1
        }
    }
    for (var char in s1CharFreq){
        if (!s2CharFreq.hasOwnProperty(char) || s1CharFreq[char] !== s2CharFreq[char]) return false
        
        if(s1CharFreq[char] !== s2CharFreq[char]) return false
    }
    return true
}

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;
console.log(isAnagram(strA1, strB1))

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;
console.log(isAnagram(strA2, strB2))

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;
console.log(isAnagram(strA3, strB3))

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;
console.log(isAnagram(strA4, strB4))

/*****************************************************************************/

/* 
Given a string that may have extra spaces at the start and the end,
return a new string that has the extra spaces at the start and the end trimmed (removed)
do not remove any other spaces.
*/

function trim(str) {
    var arrayWords = str.split(" ")
    var returnStr = ""
    for (var i = 0; i < arrayWords.length; i++){
        if (arrayWords[i] != ""){
            returnStr += arrayWords[i]
            returnStr += " "
        }
    }
    // remove the last space at the end of the string
    var finalReturnStr = returnStr.slice(0, returnStr.length - 1)
    return finalReturnStr
}

// shawn's solution
function trim(str){
    var startIdx = 0
    var endIdx = str.length - 1

    while (str[startIdx] == " "){
        startIdx++
    }

    while (str[endIdx] == " "){
        endIdx--
    }

    return str.slice(startIdx, endIdx + 1)
}

const str1 = "   hello world     ";
const expected1 = "hello world";
console.log(trim(str1))

const str1 = "   hello world     ";
const expected1 = "hello world";
console.log(str1.trim())