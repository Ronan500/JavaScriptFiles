// Nested for loops....


function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }

  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



/*
  If you have a multi-dimensional array, you can use the same
  logic as the prior waypoint to loop through both the array
  and any sub-arrays.

*/
