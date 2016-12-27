
// Declare your variable here
//the right way to define a global variable
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  //if an variable defined withou a var keyword, then the variable would be automatically defined as a global variable
  // /Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.
  oopsGlobal = 5;
  
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//Local Scope and Functions

function myLocalScope() {
 var myVar = "use strict";
  
  
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope



//Global vs Local Scope in Functions





