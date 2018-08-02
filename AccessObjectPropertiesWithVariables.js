// Accessing Object Properties with Variables.

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};


var playerNumber = 16;
var player = testObj[playerNumber];


/*
  Another use of bracket notation on objects is to access
  a property which is stored as the value of a variable.
  This can be very useful for iterating through
  an object's properties or when accessing a lookup table.
*/


/*
  Note that we do not use quotes around the variable
  name when using it to access the property because we
  are using the value of the variable, not the name.
*/
