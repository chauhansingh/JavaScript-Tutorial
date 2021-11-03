function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
//console.log(add(2,100,4));

//function to calculate speed i/p and o/p follows MKS format i.e is time and distance is in seconds amd meter
let getSpeed = (time, distanse) => distanse / time;
//console.log(getSpeed(30, 90));

//area of circle
let circleArea = (radius) => {
    const PI = 3.14159265
    return radius ** 2 * PI;
}
//console.log(circleArea(4));


//program to calculate factorial
// program to find factriol of given no. using recurssion calls
// it will take more stack memory space at rum time as num value will increase  
let findFactorial = num => {
    if (num == 1) {
        return 1;
    }
    else
        return num * findFactorial(num - 1);
}
// console.log(findFactorial(3));
// console.log(findFactorial(7));

let findFactorial1 = num1 => {
    let factorialValue = 1;
    while ((num1 - 1)) {
        factorialValue = factorialValue * num1;
        num1--;
    }
    return factorialValue;
}
// console.log(findFactorial1(4));
// console.log(findFactorial1(7));

//function to make Fabonacci Series
let makeFabonacci = size => {
    let fabonacciSeries = '';
    let firstElement = 0, secondElement = 1;
    let temp;
    while (size--) {
        fabonacciSeries = fabonacciSeries + firstElement + ' ';
        temp = firstElement + secondElement;
        firstElement = secondElement;
        secondElement = temp;

    }
    return fabonacciSeries;
}
// console.log(makeFabonacci(3));
// console.log(makeFabonacci(7));

//given no. is divisible by 6 or not
let divisibleBySix = num => num % 6 == 0;
// console.log(divisibleBySix(15));
// console.log(divisibleBySix(54));

//funtion to convert time from second to hour
let getHour = time => time / 3600;
// console.log(getHour(300));
// console.log(getHour(7200));

//function to count digit
let countDigit = num => {
    let count = 0;
    while (num) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}
// console.log(countDigit(123));
// console.log(countDigit(112343));

//funtion to find the hundreth digit
let findHundredthDigit = num => {
    let hundredthDigit;
    let count = 3;
    while (count--) {
        hundredthDigit = num % 10;
        num = parseInt(num / 10);
    }
    return hundredthDigit;
}
// console.log(findHundredthDigit(12345));
// console.log(findHundredthDigit(5086245));

//function to find requiredRunRate per over
let requiredRunRate = (target, maxOvers, currentScore, oversBowled) => (target - currentScore) / (maxOvers - oversBowled);
// console.log(requiredRunRate(200,20,150,14));
// console.log(requiredRunRate(215,20,117,12));

//function to make dicimal no.
let makeDecimal = (a, b, c) => {
    multiple = makeMultiple(countDigit(c));
    return a + (b * multiple + c) / makeMultiple(countDigit(b * multiple + c));
}

let andBoolean = (bool1, bool2, bool3) => bool1 && bool2 && bool3;

// console.log(andBoolean(true,false,true));
// console.log(andBoolean(true,true,true));

//function to check num1 is greater then atleast one out of num2 and num3
let largerThanOne = (num1, num2, num3) => num1 > num2 || num1 > num3;
// console.log(LargerThanOne(10,5,8));
// console.log(LargerThanOne(3,5,8));

//function to arrange numbers in assending order
let numberInAssendingOrder = (num1, num2, num3) => num1 < num2 && num1 < num3 && num2 < num3;
// console.log(numberInAssendingOrder(3,6,9));
// console.log(numberInAssendingOrder(5,3,8));

//function to sum last four digit of given number
let sumOfLast4Digits = num => {
    count = 4;
    let sum = 0;
    while (count--) {
        sum = sum + num % 10;
        num = parseInt(num / 10);
    }
    return sum;
}
// console.log(sumOfLast4Digits(45678));
// console.log(sumOfLast4Digits(123045));

//function to find area of a square
let areaOfSqure = (x1, y1, x2, y2) => {
    let diagonal = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(diagonal);
    return diagonal ** 2 / 2;
}
// console.log(areaOfSqure(0,0,4,4));
// console.log(areaOfSqure(2,4,4,2));