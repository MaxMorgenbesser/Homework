// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only

var lengthOfLastWord = function(string) {
    let strArr=string.split(' ') 
    strArr=strArr.filter(strArr => strArr !== '')
    return strArr[strArr.length-1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))