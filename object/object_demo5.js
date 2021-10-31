//adding and deleting properties in an object,note: --> objests are mutable thats why we can add and delete a properties to our object everytime when we create an object it store at a new memory location
let massage = {
    to: '8053748356',
    from: '9645678395',
    msg: 'how are you',
    dilivered: true,
    read: true
}

for (properties in massage)
    console.log(properties + ': ' + massage[properties]);
console.log('------------------------');

//adding an object
massage.timeStamp = 10;
for (properties in massage)
    console.log(properties + ': ' + massage[properties]);
console.log('------------------------');

//deleteing an object    
delete massage.from;
for (properties in massage)
    console.log(properties + ': ' + massage[properties]);

