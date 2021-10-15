// function to check given no. is prime or not 
/*function isPrime(num) {
    let flag = true;
    if (num == 1) {
        flag = false;
    }
    for (var i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag)
        console.log(num + ' is prime');
    else
        console.log(num + ' is not prime')

}

console.log(isPrime(11));
console.log(isPrime(1756));*/


// function isPrime(num) {
//     let flag = true;
//     if (num == 1) {
//         flag = false;
//     }
//     for (var i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//         if (num % i == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag)
//         return num;

// }

function isPrime(num) {
    if (num == 1)
        return false;

    for (var i = 2; i <= parseInt(Math.sqrt(num)); i++)
        if (num % i == 0)
            return false;

    return true;
}

// to find prime no. in given range

function findPrime(from, to) {
    for (i = from; i <= to; i++) {
        return isPrime(from);
    }
}

console.log(findPrime(1, 100));
