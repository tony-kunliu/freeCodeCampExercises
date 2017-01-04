/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*/
function largestOfFour(arr) {
  // You can do this!
  var str1 = [];
  
  for(var i =0;i<arr.length;i++){
    var num = 0;
    for(var j=0;j<arr[i].length;j++){
      
      if(arr[i][j]>num){
        num =arr[i][j]; 
        
      }                
    }
    str1[i]=num;
  }
  return str1;
}

//   function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = 0;
//     for (var sb = 0; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }

//     results[n] = largestNumber;
//   }

//   return results;
// }
  
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
