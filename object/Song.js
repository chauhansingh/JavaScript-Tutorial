function Song(artist,song,releasedOn) {
    this.artist = artist;
    this.song = song;
    this.releasedOn = releasedOn;
    this.completeDetails = function () {
        return this.artist + ' ' + this.song + ' ' + this.releasedOn;
    };
    this.play = function () {
        console.log(this.song + ' is playing');
    }
}

let song1 = new Song('LATA','Ayee mere vatan k logon',1990);

let song2 = new Song('Gulsan','XYZ',1993);

// console.log(song1);
// console.log(song2);
console.log(song1.completeDetails());
song1.play();
console.log(song2.completeDetails());
song2.play();