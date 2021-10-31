let song = {
    song: 'Aye Mere Vatan k Logo',
    released: 1999,
    arrtistDetail: {
        Name: 'Lata Mangeshwar',
        age: 25,
        address: {
            city: 'Bangalore',
            State: 'Karanataka',
            area: 'Hosa Road'
        }
    },
    play: function () {
        console.log('Artist: ' + this.artist);
        console.log('Song: ' + this.song);
        console.log('ReleasedOn: ' + this.released);
        console.log('aaye mere vatan k logon \n Zara ankh main bhar lo pani');
    }
};

console.log(song.arrtistDetail);
console.log(song.arrtistDetail.address.city);