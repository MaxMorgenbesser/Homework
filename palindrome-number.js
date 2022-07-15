// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
    let str=String(x)
    strArr=str.split('')
    newArr=[]
    for (let x = strArr.length-1; x > -1 ; x-- ){
    newArr.push(strArr[x])
    }
    console.log(newArr)
    for (let i = 0; i<strArr.length; i++){
    if (strArr[i]!=newArr[i]){
        return false
    }
    }
  return true
};

console.log(isPalindrome(112211))