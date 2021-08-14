document.body.style.backgroundColor = "#bbb"

const form = document.querySelector('form');
const lanes = form.querySelectorAll('inputs input');
// console.log(lanes);
const triangleArray = [];


// || input.id == "lane-3" && Number(input.value)

const isTriangle = (e) => {
  const input = e.target;
  
  if (input.nextElementSibling && Number(input.value)){
    triangleArray.push(input.value)
    input.nextElementSibling.disabled = false;
    // input.nextElementSibling.focus();
  
  } 
  else if (input.value) {
    triangleArray.push(input.value)
    lanes.disabled = true
   
    // console.log(triangleArray.forEach(  calculate )); 
    console.log(triangleArray);
  }

  // return calculate(a, b, c)

 
}

form.addEventListener('submit', isTriangle);
form.addEventListener('input', Number(input.value) ?  isTriangle : result.innerHTML = invalid);


// const lane1 = document.querySelector('#lane-1').value;
// const lane2 = document.querySelector('#lane-2').value;
// const lane3 = document.querySelector('#lane-3').value;
// const submit = document.querySelector('#submit');
const result = document.querySelector('#result');
const equilateral = "You have a equilateral here";
const isosceles = "You have a isosceles here";
const scalene = "You have a scalene here";
const invalid = "You have an invalid input try another one with 3 numbers";


// submit.addEventListener('click', () => )


function calculate(a, b, c) {
  console.log({a});
  console.log({b});
  console.log({c});
  if (a, b, c > 0 && (a + b >= c || a + c >= b || b + c >= a)) {
  if (a == b == c) return result.innerHTML = equilateral
  else if (a == b || a == c || b == c ) return result.innerHTML = b;
  else if (a != b && a != c && b != c) return result.innerHTML = scalene;
  else result.innerHTML = invalid;
    
}
return result.innerHTML = invalid;

}

// submit.addEventListener("click", checkTriangle(lane1, lane2, lane3))



// submit.addEventListener('click',  (lane1, lane2, lane3) => {
//   if (a, b, c > 0 && (a + b >= c || a + c >= b || b + c >= a)) {
//   if (a == b == c) return result.innerHTML = equilateral
//   else if (a == b || a == c || b == c ) return result.innerHTML = b;
//   else if (a != b && a != c && b != c) return result.innerHTML = scalene;
//   else result.innerHTML = invalid;
    
// }
// return result.innerHTML = invalid;

// })
