// Using objects to lookup.


function phoneticLookup(val) {
  var result = "";
                                    /*This is the object version */

  var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  };

    return lookup[val];

}

phoneticLookup("charlie");





/*

//This is the switch statement version as you can see its less practical but
  does the same thing.

function phoneticLookup(val) {
  var result = "";
                                        //This is the switch version

  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie": 
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }


  return result;
}


phoneticLookup("charlie");





/*

 Objects can be thought of as a key/value storage,
 like a dictionary. If you have tabular data, you can
 use an object to "lookup" values rather
 than a switch statement or an if/else chain.
 This is most useful when you know that your
 input data is limited to a certain range.

*/
