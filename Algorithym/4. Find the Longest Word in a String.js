/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length*/


function findLongestWord(str) {
//   return str.length;
  var newStr;
  var maxLength = 0;
  newStr = str.split(' ');
  for(var i = 0;i<newStr.length;i++){
//     var longestWord = "";
    if(newStr[i].length > maxLength){
      maxLength = newStr[i].length;
    }
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
