//here the time complexity is O(sqrt(n)
let from = 1;
let to = 100;
for (i = from; i <= to; i++) {
    let flag = true;
    if (i == 1) {
        flag = false;
    }
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    if (flag)
        console.log(i);
}

/*
    let n = 1;
    let flag = true;
    if (n == 1) {
        flag = false;
    }
    for (var i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag)
        console.log(n + ' is prime');
    else
        console.log(n + ' is not prime') */