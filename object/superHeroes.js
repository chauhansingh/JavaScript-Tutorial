//superHeroes characters in this i used templete String to embed javaString Experation into string
let saktiman = {
    name: 'Gangadhar',
    alias: 'Saktiman',
    age: 35,
    power: 'AntarDhayan, Flying, Hipnotiseing',
    interview: function () {
        console.log(`My name is ${this.name} I am Quite young,\n i,m ${this.age}.\n People knowns me as ${this.alias}.`);
    },
    fight: function () {
        console.log('saktiman is flying and beating the enemies');
    }
};
let hulk = {
    name: 'Bruce Banner',
    alias: 'hulk or green goliath',
    age: 37,
    power: 'Strength, Speed, Stamina, Regeneration',
    interview: function () {
        console.log(`My name is ${this.name} I have more anger,\n i,m ${this.age} with big muscles.\n People knowns me as ${this.alias}.`);
    },
    fight: function () {
        console.log('Hulk is roaring and throwing big Stones and heavy trucks on ennmies');
    }
};
let superman = {
    name: 'Clark Joseph Kent',
    alias: 'Supermen',
    age: 32,
    power: ' Faster-than-light, Healing factor, Laser vision',
    interview: function () {
        console.log(`My name is ${this.name}I am very handsome,\n i,m ${this.age} only.\n People knowns me as ${this.alias}.`);
    },
    fight: function () {
        console.log(`supermen is healing himself from Krypton wounds\n And saving peoples and punishing to bad peoples`);
    }
};
console.log('Powers: ' + saktiman.power,saktiman.interview() + '\n',saktiman.fight());
console.log('---------------------------------------');
console.log('Powers: ' + hulk.power,hulk.interview() + '\n',hulk.fight(),);
console.log('---------------------------------------');
console.log('Powers: ' + superman.power,superman.interview() + '\n',superman.fight(),);
