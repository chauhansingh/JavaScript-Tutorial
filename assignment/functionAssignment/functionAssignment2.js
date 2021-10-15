// program to find factriol of given no. using recurssion calls
// it will take more stack memory space at rum time as num value will increase  
function findFactriol(num) {
    if(num == 1) {
        return 1;
    }
    else
        return num * findFactriol(num-1);   
}

/*console.log(findFactriol(3));
console.log(findFactriol(7));*/

// witout recurssion it will take less memory at run time
function findFactriol1(num1) {
    let factorialValue = 1;
    while((num1-1)) {
        factorialValue = factorialValue * num1;
        num1--;
    }
    return factorialValue;
}

console.log(findFactriol1(4));
console.log(findFactriol1(7));