let month = 2;
let year = 2020;
let numOfDays;

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        numOfDays = 31;
        break;
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
        numOfDays =30;
        break;
    case 2:
        if((year %4==0) && (year % 100!=0) || (year % 400==0))
            numOfDays =29;
        else
            numOfDays =28;
}
console.log(numOfDays);
