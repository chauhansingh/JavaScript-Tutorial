// create a function to sort a list of string (Given input List is array of Strings)
//output should be sorted list


let arr1= [
    '6xyz abcx okay',
    'come 91 45 67',
    'q73ga ablx thed',
    'climb 456 822 91',
    'india water bowl',
    '45loa water bowl',
    'okloa water aowl'
];

let arr2 = [
    'zld 93 12',
    'fp kindle book',
    '10a echo show',
    '17g 12 25 6',
    'ab1 kindle book',
    '125 echo dot second generation'
];

let arr3 = [
    'ykc 82 01',
    'eo first qpx',
    '09z cat hamster',
    '06f 12 25 6',
    'az0 first qpx',
    '236 cat dog rabbit snake'
];

function priorityList(array) {
    let nonPrimeMember = [];
    let primeMember = [];
    let result1;

    array.forEach(function findMemberShip(item) {
        let subItems = item.split(' ');
        let flag = false;
        for (let i = 0; i < subItems[1].length; i++) {
            if (subItems[1].charAt(i) < '9' && subItems[1].charAt(i) > '0') {
                nonPrimeMember.push(item);
                flag = true;
                break;
            }
        }
        if (flag == false)
            primeMember.push(item);
    });
    
    primeMember.sort(); //it will take care of tie breaker condition

    //function to arrange prime members Lexicographically
    primeMember.sort(function sortLexicographically(item1, item2) {
        let subItems1 = item1.split(' ');
        let marge1 = subItems1[1];

        for (let i = 2; i < subItems1.length; i++) {
            marge1 = marge1 + subItems1[i];
        }
        // console.log(marge1);
        let subItems2 = item2.split(' ');
        let marge2 = subItems2[1];
        for (let i = 2; i < subItems2.length; i++) {
            marge2 = marge2 + subItems2[i];
        }
        // console.log(marge2);
        if (marge1 < marge2) {
            return -1;
        }
        else if (marge1 > marge2)
            return 1;
        else
            return 0;
    });

    // console.log('Non Prime Member list: ', nonPrimeMember);
    // console.log('Prime Member List:', primeMember);
    return result1 = primeMember.concat(nonPrimeMember);
    // console.log('Final List: ', result1);
}

console.log(priorityList(arr1));
console.log(priorityList(arr2));
console.log(priorityList(arr3));













// nonPrimeMember.sort(function sortLexicographically(item1,item2) {
//     let subItems1 = item1.split(' ');
//     let marge1 = subItems1[1] + subItems1[2];
//     let subItems2 = item2.split(' ');
//     let marge2 = subItems2[1] + subItems2[2];

//     if (marge1 < marge2) {
//         return -1;
//     }
//     else if (marge1 > marge2)
//         return 1;
//     else
//         return 0;

// });