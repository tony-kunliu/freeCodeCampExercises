
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  
  
  // Only change code above this line.
  if(!wasThatTrue) {
   // var statement2= "no, that was false";
    return "No, that was false";
  }

}

// Change this value to test
trueOrFalse(false);



//
// Comparison with the Equality Operator
// There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value.

// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value at the right of the operator to a variable in the left.


// Setup
function testEqual(val) {
  if (val == 12) { // Change this line, "="" is not "==" in every way.
    // === mean type and value are both the same.
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);



function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }
  
  if (val>=10 && val <20) {  // Change this line
    return "10 or Over";
  }
  else

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);



function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }
  
  if (val<55&&val>=25) {  // Change this line
    return "Under 55";
  }
  else
  return "55 or Over";
}

// Change this value to test
testLessThan(10);



function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val<=24&&val>12) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  else

  return "25 or More";
}

// Change this value to test
testLessOrEqual(10);

