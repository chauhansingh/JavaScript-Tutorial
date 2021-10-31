let arr = [{x: 2, y: 3, distance: 10},{X: 4, Y: 1, distance: 5},{x: 3, y: 6, distance: 2},{x: 1, y: 1, distance: 1}];
console.log(arr);
arr.sort();// this function cant short an object so need to use call back function here
console.log(arr);

//on the behalf of distance property of object array i.e arr i did shorting here
arr.sort(function compairFun(item1,item2) {
    console.log(item1.distance,item2.distance);
    if (item1.distance > item2.distance) {
        return 1;
    }
    else if (item1.distance < item2.distance) {
        return -1;
    }
    else {
        return 0;
    }
});
console.log(arr);

function createReturnArray(array,numRestaurants) {
    let returnLocationArray = [];
    for (let i = 0; i < numRestaurants; i++) {
        returnLocationArray.push([array[i].x, array[i].y]);
    }
    return returnLocationArray;
}

console.log(createReturnArray(arr,2));