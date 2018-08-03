// Accessing Nested Objects...

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
                              /*Accessing nested object here with dot and bracket notation... */

var gloveBoxContents = myStorage.car.inside["glove box"];


/*
 The sub-properties of objects can be accessed by
 chaining together the dot or bracket notation.

*/
