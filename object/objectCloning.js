let user = {
    name: 'Sagar',
    age: 26
}

 let clone = {}; 

// for (let key in user) {
//     clone[key] = user[key];
// }

Object.assign(clone,user);
// console.log(user);
// console.log(clone);

let user1 = {
    name: 'Sagar',
}
console.log(user); 

let permition1 = {canView: true};
let permition2 = {canEdit: true};

Object.assign(user1,permition1,permition2);

console.log(user1);

