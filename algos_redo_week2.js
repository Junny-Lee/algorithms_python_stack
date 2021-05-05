/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

function encodeStr(str) {
    var shortenedStr = ""
    var count = 1
    var i = 0
    while (i < str.length){
        var letter = str[i]
        var j = i + 1
        while (str[i] == str[j]){
            count++
            j++
        }
        if (str[i] != str[j]){
            shortenedStr += str[i]
            shortenedStr += count
            i = j
            count = 1;
        }
    }
    if (str.length <= shortenedStr.length){
        return str
    }
    else {
        return shortenedStr
    }
}

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";
console.log(encodeStr(str1))

const str2 = "";
const expected2 = "";
console.log(encodeStr(str2))

const str3 = "a";
const expected3 = "a";
console.log(encodeStr(str3))

const str4 = "bbcc";
const expected4 = "bbcc";
console.log(encodeStr(str4))

/*****************************************************************************/

/* 
    String Decode  
*/


function decodeStr(str) {
    var expandedStr = ""
    for (var i = 0; i < str.length; i+=2){
        for (var j = 0; j < str[i+1]; j++){
            expandedStr += str[i]
        }
    }
    return expandedStr
}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";
console.log(decodeStr(str1))

/*****************************************************************************/


/* 
Given a string,
return a new string with the duplicates excluded
*/

function stringDedupe(str) {
    var returnStr = ""
    for (var i = 0; i < str.length; i++){
        if (returnStr.includes(str[i]) == false){
            returnStr += str[i]
        }
    }
    return returnStr
}

const str1 = "abcABC";
const expected1 = "abcABC";
console.log(stringDedupe(str1))

const str2 = "helloo";
const expected2 = "helo";
console.log(stringDedupe(str2))


/*****************************************************************************/

/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

function reverseWords(str) {
    var wordsArr = str.split(" ")
    var reversedWordsStr = ""

    for (var i = 0; i < wordsArr.length; i++){
        var wordsStr = wordsArr[i].split("")
        for (var j = wordsStr.length - 1; j >=0; j--){
            reversedWordsStr += wordsStr[j]
        }
        if (i != wordsArr.length -1 ){
            reversedWordsStr += " "
        }
    }
    return reversedWordsStr
}

const str1 = "hello";
const expected1 = "olleh";
console.log(reverseWords(str1))

const str2 = "hello world";
const expected2 = "olleh dlrow";
console.log(reverseWords(str2))

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";
console.log(reverseWords(str3))

/*****************************************************************************/