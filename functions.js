// function
// palindromeornot(str){
//     var a=str.split("")
//     b=a.reverse().join("")
//     if (str==b){
//         console.log("this is palindrome")
//     }
//     else{
//         console.log("this is not palindrome")
//     }
// }
// palindromeornot ("anna")



// //4.Number palindrome. ...//ispalNUM(545)
// function
// palindromeornot(num){
//     var a=num.split("")
//     b=a.reverse().join("")
//     if(num==b){
//     console.log("this is palindrome number")
//     }
//     else{
//         console.log("this is not palindrome number")
//     }
//     }
//     palindromeornot("545")


// //5.Max/min number from an array
// x=[76,78,98,5]
// y=x.sort()
// console.log("Max Number is :"+y[y.length-1]+"Min Number is:" +y[0])


//6.Two string anagram---//isAnagram("listen","silent")->true---Manikanta
function
anagramornot(a,b){
    str1=a.toLowerCase().split("").sort().join("")
    str2=b.toLowerCase().split("").sort().join("")

         if(str1==str2){
            console.log("this is anagram")
         }
         else{
            console.log("this is not anagram")
         }
         }
         anagramornot("listen","silent")


// //7.Find the second min/max number from an array.---{4,781,8,99,103}));
// x=[76,78,98,5]
// y=x.sort()
// console.log(" SecMaxnumber is :" +y[y.length-2]+ "SecMin Number is:"+y[1])


// //8.Swap values of two variables
// var a=10,b=20
// b=b-a
// a=a+b
// console.log(a,b)


// //9.Remove duplicates from a string
// function
// removeduplicharacter(str) {
//     var answer ="";
//     var freq = [];
//     for(i=0;i<structuredClone.length;i++){
//         let char =str[i];
//         if(freq[char]){
//             freq[char]++;
//         } else{
//             freq[char]=1
//             answer=answer+char;
//         }
//         }
//     return answer;
// }
// console.log(removeduplicharacter("abbggyujkklii"))


// //10.count letters(Map)---countLetters("aauuchhh")
// function
// countLetters(str){
//     var letterCount = {};
//     //Iterate through each character in the sring
//     for (var i = 0; i < str.length; i++){
//         var char = str[i];
//         //check if the charecter is a letter
//         if (/[a-zA-Z]/.test(char)){
//             //update the letter count
//             if(letterCount[char]){
//                 letterCount[char]++;
//             }else{
//                 letterCount[char]= 1;
//             }
//             }
//         }
//         return letterCount;
//     }
//     //Example usage
//     var inputString = "aauuchhh";
//     var result = countLetters(inputString);
//     console.log(result);


// //11..FizzBuzz.print numbers from 1to100
// //     -if a number is divisible by 3 print Fizz
// //      -if a nimber is divisible by 5 print Buzz
// //      -if a number is divisible by both 3and 5 print FizzBuzz
// for (let i = 1; i<=100; i++){
//     if (i % 3 == 0 && i % 5== 0){
//         console.log("fizzbuzz");
//     }
//     else if (i % 5 == 0){
//         console.log("buzz");
//     }
//     else if (i % 3 ==0){
//         console.log("fizz");
//     }
//     else {
//         console.log(i)
//     }
//     }


//      //12..Even or Odd
//     function
//     evenOrOdd(number){
//          if (number % 2 ===0){
//                 return "Even";
//         }else {
//              return "Odd";
//          }
//      }
//     // Example usage
//     console.log(evenOrOdd(8));
//     console.log(evenOrOdd(11));

    
    
//      //14..Write program to find occurance of each character aruna
//      function
//      countCharacters(str){
//         const charCount = {};

//         for (let char of str) {
//              charCount[char] = (charCount[char]||0) + 1;
//         }
//         return charCount;
//      }

//      const inputString= "chandana";
//      const result = countCharacters(inputString);
//      console.log(result);


    





