/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



function isAnagram(string1, string2){
  if(string1.length!=string2.length){
    return false;
  }

  let simplifiedString1= string1.toLowerCase().split("").sort().join("");
  let simplifiedString2= string2.toLowerCase().split("").sort().join("");
if (simplifiedString1==simplifiedString2){
  return true;
}
else{return false;}



}


















// function isAnagram(str1, str2) {
//   if(str1.length!=str2.length){
//     return false;
//   }

// const string1= str1.toLowerCase().split('').sort().join('');
// const string2= str2.toLowerCase().split('').sort().join('');

// return string1==string2;

// }

module.exports = isAnagram;
