let arr = ['ab72c','xyz','sql','427rs'];

let primeMember = [];
let nonPrimeMember = [];
arr.forEach(function find(item) {
    let flag = false;
    for (let i = 0; i < item.length; i++) {
        if (item.charAt(i) < '9' && item.charAt(i) > '0') {
            nonPrimeMember.push(item);
            flag = true;
            break;
        }
    }
    if(flag == false)
        primeMember.push(item);
});

console.log(nonPrimeMember.sort());
console.log(primeMember.sort());
let result = primeMember.concat(nonPrimeMember);
console.log(result);

// if ('a' > 57)
//     console.log(true);
// else
//     console.log(false);