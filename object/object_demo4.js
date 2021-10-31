let massage = {
    to: '8052039174',
    from: '9053124361',
    msg: 'How are you',
    dilivered: true,
    read: true,
};
for (props in massage)
    console.log(props);

//properties and values
for  (properties in massage)
    console.log(properties + ': ' + massage[properties]);
console.log('-----------------');
for  (properties in massage)
    console.log(`${properties}: ${massage[properties]}`);// with the help of template String

console.log('-------------------');
console.log(massage['dilivered']);
let keyX = 'dilivered';
console.log(massage[keyX]);