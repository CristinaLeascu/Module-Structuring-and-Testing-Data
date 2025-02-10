// Predict and explain first...
//  =============> write your prediction here
// there will be an error with the declaration of the variable str as is a parameter and declared on line 9 again.

// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

function capitalize(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} 

console.log(capitalize('code'));
// =============> write your explanation here
// =============> write your new code here
