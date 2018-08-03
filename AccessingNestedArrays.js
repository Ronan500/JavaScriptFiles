// Accessing nested arrays....

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

                   /* Here is method to output "pine" ... */

var secondTree = myPlants[1].list[1];



/*
  As we have seen in earlier examples, objects can
  contain both nested objects and nested arrays.
  Similar to accessing nested objects,
  Array bracket notation can be chained
  to access nested arrays.

*/
