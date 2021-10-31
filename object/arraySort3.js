// let arr10 = ['6xyz','come','q73ga','climb','india','45loa'];//here tagert is to sort the string which contains number should come first
// //in sort function when we use compair function then item1 belongs to next index to the item2 that means if item2 has a index --> 0 then item1 index --> 1
// console.log(arr10);
// arr10.sort(function compairFun(item1,item2) {
    
// });
// console.log(arr10);
 
let arr10 = [
                '6xyz abcx okay',
                'come 91 45 67',
                'q73ga ablx thed',
                'climb 456 822 91',
                'india water bowl',
                '45loa water bowl'
            ];

arr10.sort();
console.log(arr10);
arr10.sort(function caompairFun(item1,item2) {
    item2PartsArray = item2.split(' ');
    item1PartsArray = item1.split(' ');
    if(item2PartsArray[1].charAt(0) < item1PartsArray[1].charAt(0)) {
        
        return -1;
    }
    else if (item2PartsArray[1] > item1PartsArray[1])
        return 1;
    else
        return 0;
});
// console.log(arr10);

let arr11 = ['water','abcx','456','91','water','q73ga'];
arr11.sort(function compFun(item1,item2) {
    if (item2 < item1)
        return -1;
    else if (item2 > item1)
        return 1;
    else
        return 0;
});
console.log(arr11);
