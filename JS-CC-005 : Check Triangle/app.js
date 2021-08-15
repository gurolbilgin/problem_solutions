document.body.style.backgroundColor = "#bbb"
const inputs = document.querySelector('.inputs');


const button = document.querySelector('button');
const result = document.querySelector('#result');
// const laneA = document.querySelector('#lane-1');
// const laneB = document.querySelector('#lane-2');
// const laneC = document.querySelector('#lane-3');

const laneA = 3
const laneB = 4
const laneC = 5

// console.log(form);

class Triangle {
  constructor(laneA, laneB, laneC) {
    this.laneA = laneA;
    this.laneB = laneB;
    this.laneC = laneC;
  }

  isValid() {
    return  (laneA, laneB, laneC) > 0 && (laneA + laneB >= laneC) || (laneC + laneB >= laneA) || (laneA + laneC >= 0) ? true : false
  }

  calcTriangle() {
   result.innerHTML =  (laneA === laneB && laneB === laneC) && 'equilateral' ||
    (laneA === laneB || laneA === laneC || laneB === laneC) && 'isosceles' || 'scalene';

  }
} 

let triangleType = new Triangle(laneA, laneB, laneC)




// form.addEventListener('input', () => {
// console.log(laneA.value);})
button.addEventListener('click', () => {
  console.log(laneA);
  console.log(laneB);
  console.log(laneC);

  myfunc(laneA, laneB, laneC)  }
);

function myfunc(laneA, laneB, laneC) {
    if (triangleType.isValid()) {
    triangleType.calcTriangle();
    } else {
     result.innerHTML = "invalid triangle"; 
    }  
}






// console.log(triangleType.calcTriangle());
// console.log(triangleType);

// || input.id == "lane-3" && Number(input.value)

// const isTriangle = (e) => {
//   const input = e.target;
  
//   if (input.nextElementSibling && Number(input.value)){
//     triangleArray.push(input.value)
//     input.nextElementSibling.disabled = false;
//     // input.nextElementSibling.focus();
  
//   } 
//   else if (input.value) {
//     triangleArray.push(input.value)
//     lanes.disabled = true
   
//     // console.log(triangleArray.forEach(  calculate )); 
//     console.log(triangleArray);
//   }

//   // return calculate(a, b, c)

 
// }

// form.addEventListener('submit', isTriangle);
// form.addEventListener('input', Number(input.value) ?  isTriangle : result.innerHTML = invalid);




// // submit.addEventListener('click', () => )

// function calculate(a, b, c) {
//   console.log({a});
//   console.log({b});
//   console.log({c});
//   if (a, b, c > 0 && (a + b >= c || a + c >= b || b + c >= a)) {
//   if (a == b == c) return result.innerHTML = equilateral
//   else if (a == b || a == c || b == c ) return result.innerHTML = b;
//   else if (a != b && a != c && b != c) return result.innerHTML = scalene;
//   else result.innerHTML = invalid;
    
// }
// return result.innerHTML = invalid;

// }

// // submit.addEventListener("click", checkTriangle(lane1, lane2, lane3))



// // submit.addEventListener('click',  (lane1, lane2, lane3) => {
// //   if (a, b, c > 0 && (a + b >= c || a + c >= b || b + c >= a)) {
// //   if (a == b == c) return result.innerHTML = equilateral
// //   else if (a == b || a == c || b == c ) return result.innerHTML = b;
// //   else if (a != b && a != c && b != c) return result.innerHTML = scalene;
// //   else result.innerHTML = invalid;
    
// // }
// // return result.innerHTML = invalid;

// // })



// function getTriangleType(a,b,c) {
//   return (a === b && b === c) && 'equilateral' ||
//   (a === b || a === c || b === c) && 'isosceles' ||
//   'scalene';
// }