//1
const summation= function (n){
    let theTotal = 0;
    
     for(let i = n ; i>=1 ; i--){
        theTotal += i;
      }
    
    return theTotal
    }
    
    
    summation(5)
    //ans 15

//2
const summationEven= function (){
    let theSum=0;
    for(let i=1; i>=4; i+=2){
    }
    if(i % 2 === 0){
    theSum+=i
    }
    return theSum
    }

    summationEven(5)
 Uncaught ReferenceError

//3
 let avg=[8, 2, 2, 4];

let sum= [8+2+2+4];

sum
[16]
let avgSum= sum/4;

avgSum
//ans 4


//4
let word= ["caterpillar"];
word
["caterpillar"]
word.reverse("caterpillar")
//ans ["caterpillar"]


//5
let array= ["test1", "test2", "test3"];

console.log(array.join("-"));
//ans test1-test2-test3

//6
const countUpAndDown= function(n){
    let theCount=0
    for(let i = n ; i>=1 ; i++){
            theCount += i;
    }
    
    for(let i = n ; i>=1 ; i--){
            theCount += i;
    }
            return theCount
    }
    //ans countUpAndDown(3)

//7
    let pets= ["cat", "rabbit", "dog", "frog"];
    const wordsWithA= pets.find("a");
    console.log(wordsWithA);

//8
let words= ["cat", "rabbit", "dog", "frog"];
undefined
words
["cat", "rabbit", "dog", "frog"]
const wordsWithLetter= (words.find("c", "t", "b", "i", "a", "d", "o", "g", "f", "r"));

//9
function longestWord(str){
    let strSplit= str.split(" The cat in the house");
    let longestWord= 0;
    for(let i=0; i< strSplit.length; i++){
    if(strSplit[i].length>longestWord){
    longestWord=strSplit[i].length;
    }
    return longestWord;
    }

//10
function largestEvenNumber(n){
    let nSplit= n.split([1,2,3,10,4,7,0]);
    let largestNumber= 0;
    for(let i=0; i< nSplit.length; i++){
    if(nSplit[i].length>largestNumber){
    largestNumber=nSplit[i].length;
    }
    return largestNumber;
    }
        