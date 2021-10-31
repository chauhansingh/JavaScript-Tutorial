let singer1 = {
    artist: 'Lata Mangeshwar',
    song: 'Aye Mere Vatan k Logo',
    released: 1999,
    play: function () {
        console.log('Artist: ' + this.artist);
        console.log('Song: ' + this.song);
        console.log('ReleasedOn: ' + this.released);
        console.log('aaye mere vatan k logon \n Zara ankh main bhar lo pani');
    }
};
let singer2 = {
    artist: 'Gulshan Kumar',
    song: 'Maa Sherawali',
    released: 2002,
    play: function () {
        console.log('Artist: ' + this.artist);
        console.log('Song: ' + this.song);
        console.log('ReleasedOn: ' + this.released);
        console.log('Ooo... maa sherawaliyee..  tere share aa gaya');
    }
};

console.log(singer1.play());
console.log(singer2.play());
//console.log(song1['play()']);
//console.log(song2['play()']);