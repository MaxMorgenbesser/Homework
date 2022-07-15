function assignGrade(grade) {
  switch (true) {
    case grade > 90:
      letter = "A";
      break;
    case grade > 80:
      letter = "B";
      break;
    case grade > 70:
      letter = "C";
      break;
    case grade > 60:
      letter = "D";
      break;
    default:
      letter = "F";
      break;
  }
  return letter
}
//console.log(assignGrade(88))

function numTrue(array){
    count=0
    for (let i =0;i <array.length;i++){
        if (array[i]==true){
            count+=1
        }
       
    }
    return count
}
//console.log(numTrue([true,false,true]))

function toUpper (str){
    upperStr=str.toUpperCase()
    return upperStr
}
//console.log(toUpper('WHat a time to be alive'))

function score(two,three){
    totalScore=((two *2)+(three*3))
    return totalScore
}
//console.log(score(5,7))

function maxMin(arr){
nArr=arr.sort((a,b) =>a-b)
 return `${nArr[0]} is the smallest and ${nArr[nArr.length-1]} is the largest number`
}
console.log(maxMin([1,7,2,3]))