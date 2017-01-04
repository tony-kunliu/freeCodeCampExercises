/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
join()
toLowerCase();
toUpperCase();
*/

function titleCase(str) {
//   str = str.toLowerCase();
  var str1 = str.toLowerCase().split(" ");
  function upperCaseFirst(string){
   return string.charAt(0).toUpperCase() + string.substring(1);
}

  for(var i =0;i<str1.length;i++){
    str1[i] = upperCaseFirst(str1[i]);
    
  }
  
  return str1.join(" ");
}

titleCase("sHoRt AnD sToUt");
