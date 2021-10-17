// function to add three no.
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
//console.log(add(2,100,4));

//function to calculate speed i/p and o/p follows MKS format i.e is time and distance is in seconds amd meter
function getSpeed(time, distanse) {
    return distanse / time;
}
//console.log(getSpeed(30, 90));

//area of circle
function circleArea(radius) {
    const PI = 3.14159265
    return radius ** 2 * PI;
}
//console.log(circleArea(4));


//program to calculate factorial
// program to find factriol of given no. using recurssion calls
// it will take more stack memory space at rum time as num value will increase  
function findFactorial(num) {
    if (num == 1) {
        return 1;
    }
    else
        return num * findFactorial(num - 1);
}
// console.log(findFactorial(3));
// console.log(findFactorial(7));

// witout recurssion it will take less memory at run time
function findFactorial1(num1) {
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
function makeFabonacci(size) {
    let FabonacciSeries = '';
    let firstElement = 0, secondElement = 1;
    let temp;
    while (size--) {
        FabonacciSeries = FabonacciSeries + firstElement + ' ';
        temp = firstElement + secondElement;
        firstElement = secondElement;
        secondElement = temp;

    }
    return FabonacciSeries;
}
// console.log(makeFabonacci(3));
// console.log(makeFabonacci(7));

//given no. is divisible by 6 or not
function divisibleBySix(num) {
    return num % 6 == 0;
}
// console.log(divisibleBySix(15));
// console.log(divisibleBySix(54));

//funtion to convert time from second to hour
function getHour(time) {
    return time / 3600;
}
// console.log(getHour(300));
// console.log(getHour(7200));

//function to count digit
function countDigit(num) {
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
function findHundredthDigit(num) {
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
function requiredRunRate(target, maxOvers, currentScore, oversBowled) {
    return (target - currentScore) / (maxOvers - oversBowled);
}
// console.log(requiredRunRate(200,20,150,14));
// console.log(requiredRunRate(215,20,117,12));

//function to make dicimal no.
function makeDecimal(a, b, c) {
    multiple = makeMultiple(countDigit(c));
    return a + (b * multiple + c) / makeMultiple(countDigit(b * multiple + c));
}

function makeMultiple(count) {
    let multiple = 1;
    while (count--) {
        multiple = 10 * multiple;
    }
    return multiple;
}
// console.log(makeDecimal(12,49,45));
// console.log(makeDecimal(42,01,90));
// console.log(makeDecimal(42,10,90));

//function to find digit's sum of given num
function numDigitsSum(num) {
    let digitLength = countDigit(num);
    let sum = 0;
    while (digitLength--) {
        sum = sum + num % 10;
        num = parseInt(num / 10);
    }
    return sum;
}
// console.log(numDigitsSum(12345));
// console.log(numDigitsSum(10111));

//function to get AND value 
function andBoolean(bool1, bool2, bool3) {
    return bool1 && bool2 && bool3;
}
// console.log(andBoolean(true,false,true));
// console.log(andBoolean(true,true,true));

//function to check num1 is greater then atleast one out of num2 and num3
function LargerThanOne(num1, num2, num3) {
    return num1 > num2 || num1 > num3;
}
// console.log(LargerThanOne(10,5,8));
// console.log(LargerThanOne(3,5,8));

//function to arrange numbers in assending order
function numberInAssendingOrder(num1, num2, num3) {
    return num1 < num2 && num1 < num3 && num2 < num3;
}
// console.log(numberInAssendingOrder(3,6,9));
// console.log(numberInAssendingOrder(5,3,8));

//function to sum last four digit of given number
function sumOfLast4Digits(num) {
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
function areaOfSqure(x1, y1, x2, y2) {
    let diagonal = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(diagonal);
    return diagonal ** 2 / 2;
}
// console.log(areaOfSqure(0,0,4,4));
// console.log(areaOfSqure(2,4,4,2));

//function to add digit numbers I/P => 1,2,3  O/P => 1111 + 2222 + 3333
function addDigitNumbers(num1, num2, num3) {
    let newNum1 = 0, newNum2 = 0, newNum3 = 0;
    for (i = 0; i < 4; i++) {
        newNum1 = newNum1 * 10 + num1;
        newNum2 = newNum2 * 10 + num2;
        newNum3 = newNum3 * 10 + num3;
    }
    return newNum1 + newNum2 + newNum3;
}
// console.log(addDigitNumbers(1,2,3));
// console.log(addDigitNumbers(5,2,4));

//function to check given no. is multiple of 3 and 7
function multipleOf3And7(num) {
    return num % 3 == 0 && num % 7 == 0;
}
// console.log(multipleOf3And7(23));
// console.log(multipleOf3And7(147));

//function to find largest no. out of three given numbers
function largestOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        return num1;
    else if (num2 > num3 && num2 > num3)
        return num2;
    else
        return num3;
}
// console.log(largestOfThree(20,8,30));
// console.log(largestOfThree(20,60,30));

//function to find days in month here 1 stands for january and 12 stands for december
function daysInMonth(month, year) {
    let leapYear = year % 4 == 0;
    if (leapYear && month == 2) {
        return 29;
    }
    else {
        switch (month) {
            case 1: return 31;
            case 2: return 28;
            case 3: return 31;
            case 4: return 30;
            case 5: return 31;
            case 6: return 30;
            case 7: return 31;
            case 8: return 31;
            case 9: return 30;
            case 10: return 31;
            case 11: return 30;
            case 12: return 31;
        }
    }
}
// console.log(daysInMonth(2,2004));
// console.log(daysInMonth(2,2001));
// console.log(daysInMonth(5,1995));
// console.log(daysInMonth(9,2021));

//function to change character case
function changeCharCase(char) {
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91)
        return String.fromCharCode(char.charCodeAt(0) + 32);
    else
        return String.fromCharCode(char.charCodeAt(0) - 32);
}
// console.log(changeCharCase('A'));
// console.log(changeCharCase('a'));
// console.log(changeCharCase('E'));
// console.log(changeCharCase('s'));

//function to check given char is digit
function isDigit(char) {
    return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
}
// console.log(isDigit('5'));
// console.log(isDigit('w'));
// console.log(isDigit('0'));
// console.log(isDigit('@'));

//find the middle character if arranged in lexicographically order from given three character
function middleChar(char1, char2, char3) {
    if ((char1 > char2 && char1 < char2) || (char1 < char2 && char1 > char2)) {
        return char1;
    }
    else if ((char2 > char3 && char2 < char1) || (char2 < char3 && char2 > char1)) {
        return char2;
    }
    else if ((char3 > char1 && char3 < char2) || (char3 < char1 && char3 > char2)) {
        return char3;
    }
}
// console.log(middleChar('b','a','l'));
// console.log(middleChar('z','a','l'));
// console.log(middleChar('L','N','Z'));
// console.log(middleChar('R','A','L'));
// console.log(middleChar('p','a','l'));

//function to check given number's last digits are same or not
function isLastTwoDigitSame(num1, num2) {
    count = 2;
    while (count--) {
        if (num1 % 10 != num2 % 10)
            return false;
    }
    return true;
}
// console.log(isLastTwoDigitSame(1934,4134));
// console.log(isLastTwoDigitSame(8631,4567));

//function to find largest no. out of three given no.
function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num3 && num2 > num1) {
        return num2;
    }
    else if (num3 > num1 && num3 > num2) {
        return num3;
    }
}
// console.log(findLargest(23,18,5));
// console.log(findLargest(2,56,35));

function findLargest1(num1, num2, num3) {
    let a = num1 > num2 ? num1 : num2 > num3 ? num2 : num3;
    return a;
}
// console.log(findLargest1(2,3,5));

//function to check the sum of any two no. is equal the third number
function addForThird(num1, num2, num3) {
    let largestNum = findLargest(num1, num2, num3);
    if (largestNum == num1) {
        return largestNum == num2 + num3;
    }
    else if (largestNum == num2) {
        return largestNum == num3 + num1;
    }
    else if (largestNum == num3) {
        return largestNum == num1 + num2;
    }
}

// console.log(addForThird(4,3,1));
// console.log(addForThird(13,2,15));
// console.log(addForThird(21,5,46));
// console.log(addForThird(13,4,17));

function addForThird1(num1, num2, num3) {
    if (num1 == num2 + num3) {
        return true;
    }
    else if (num2 == num3 + num1) {
        return true;
    }
    else if (num3 == num1 + num2) {
        return true;
    }
    else
        return false;
}

// console.log(addForThird1(4,3,1));
// console.log(addForThird1(13,2,15));
// console.log(addForThird1(21,5,46));
// console.log(addForThird1(13,4,17));

//function to get reward on the based of lottery ticket number
function lotteryPrize(ticketNumber) {
    return ticketNumber % 4 == 0 && ticketNumber % 7 == 0 ? 20 : ticketNumber % 4 == 0 ? 6 : ticketNumber % 7 == 0 ? 10 : 0;
}
// console.log(lotteryPrize(123440));
// console.log(lotteryPrize(70));
// console.log(lotteryPrize(84));
// console.log(lotteryPrize(95));

//function to get reward on the based of lottery ticket number
function lotteryPrize3(ticket1, ticket2, ticket3) {
    return lotteryPrize(ticket1) + lotteryPrize(ticket2) + lotteryPrize(ticket3);
}
//console.log(lotteryPrize3(123440,70,84));

//function to find sum of last three of given number
function sumOfLastThree(num) {
    let count = 3;
    let remendersSum = 0;
    while (count--) {
        remendersSum = remendersSum + num % 10;
        num = parseInt(num / 10);
    }
    return remendersSum;
}
// console.log(sumOfLastThree(12345));
// console.log(sumOfLastThree(45123));
// console.log(sumOfLastThree(12111));
// console.log(sumOfLastThree(12332));

//function 
function blackJack(num1, num2) {
    let greaterNum = num1 > num2 ? num1 : num2;
    return num1 <= 21 && num2 <= 21 && num1 == num2 ? -2 : num1 <= 21 && num2 <= 21 ? greaterNum : -1;

}
// console.log(blackJack(4,8));
// console.log(blackJack(65,65));
// console.log(blackJack(19,18));
// console.log(blackJack(7,7));

//function to find sum of factors of given number
function factorSum(num) {
    let sum = 1;//one is the factor of all number so intead of '0' inicilze '1'
    for (i = 2; i <= (num / 2); i++) {
        if (num % i == 0)
            sum = sum + i;
    }
    return sum;
}
//console.log(factorSum(10));

function perfactNumber(num) {
    return num == factorSum(num);
}
// console.log(perfactNumber(6));
// console.log(perfactNumber(10));

//function to generate an nutural number string as per given numberCount as input
function naturalNumString(numCount) {
    let string = '';
    while (numCount--) {
        string = string + parseInt(Math.random() * 10);
    }
    return string;
}
// console.log(naturalNumString(5));
// console.log(naturalNumString(3));

//function to generate an Integer number string as per given numberCount as input
function integerNumString(num) {
    let string = '';
}