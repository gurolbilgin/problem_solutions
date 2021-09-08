// Does the Triangle Fit into the Triangular Hole?
// Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

// Examples
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
// Notes
// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.

//------------- method 1

function doesTriangleFit(a, b) {
  function validate(x) {
    if (x[0] + x[1] > x[2] && x[0] + x[2] > x[1] && x[2] + x[1] > x[0])
      return true;
  }

  if (validate(a) && validate(b)) {
    if (a[0] <= b[0] && a[1] <= b[1] && a[2] <= b[2]) return true;
  } else return false;
}

console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));

//------------method 2 (array destructering)

doesTriangleFit = (brick, hole) => {
  let [a, b, c] = brick;
  let [d, e, f] = hole;
  console.log(a);
  console.log(b);
  console.log(e);
  let result =
    a + b > c &&
    a + c > b &&
    b + c > a &&
    d + e > f &&
    d + f > e &&
    e + f > d &&
    a <= d &&
    b <= e &&
    c <= f
      ? true
      : false;
  return result;
};
