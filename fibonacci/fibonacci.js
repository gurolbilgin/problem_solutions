
// let n = 3;
// const goldenRatio = 1.618;

// let result = (goldenRatio ** n - (1 - goldenRatio) ** n) / Math.sqrt(5);
// result = Math.ceil(result);

// console.log(result);



function fibonacci(num) {
    if (num == 0) 
    return num
    
        let x = 0, y = 1, z, resultArray = [1];
        
        for (i = 2; i <= num; i++) {
            z = x + y;
            x = y;
            y = z;
            
            resultArray.push(y)
        
        }
        console.log(resultArray);// we are collecting every step's number in an array
        return y;
       
}

console.log(fibonacci(3));