// program to find given no. is palindrome or not (with the help of makeing String var naed as remenderString)
function isPalindrome(num) {
    let reverse = makeReverseString(countDigit(num),num);
    if (num == reverse)
        return true;
    else
        return false;
}
//making a string function
function makeReverseString (count,num) {
    let resultString = '';
    while (count--) {
        resultString =  resultString + num % 10;
        num = parseInt(num / 10);
    }
    return resultString.trim();
}
//function to count digit
function countDigit(num) {
    let count = 0;
    while(num) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}
console.log(isPalindrome(121));
console.log(isPalindrome(2121));
console.log(isPalindrome(44122144));
console.log(isPalindrome(567));
