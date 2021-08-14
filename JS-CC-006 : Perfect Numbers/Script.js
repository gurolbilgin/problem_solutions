function perfectNumber(num) {
  const numbers = [];
  const divisableNumbers = [];
  
  const perfect = num + " is a perfect number!"
  const notPerfect = num + " is NOT a perfect number!"


  for (let i = num - 1; i > 0; i--) {
    numbers.push(i)
  }

  numbers.forEach( (number) => {
    if (num % number == 0) divisableNumbers.push(number)
   })

  const total = divisableNumbers.reduce((a, b) => a + b); 

  //  console.log(numbers);
  //  console.log(total);

  const result = num == total ?  perfect : notPerfect

  document.write(result + '<br><br>')
  console.log(result);

}

perfectNumber(6)
perfectNumber(81)
perfectNumber(28)
perfectNumber(496)
perfectNumber(55)
perfectNumber(8128)


