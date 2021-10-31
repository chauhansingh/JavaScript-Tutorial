let array = [123,true,false,'india',23.1,Infinity]

function printItems(items, fnc) {
    for (let items of array) {
        abc(items);
    }
}

printItems(array,abc);

function abc(x) {
    console.log(x);
}