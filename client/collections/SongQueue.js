// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      console.log('Just added a song!');
      if (this.length === 1) {
        this.play();
      }
    });
    this.on('ended', function() {
      console.log('Yo, we heard something ended!');
      this.processSongEnd();
    });
    this.on('dequeue', function() {
      this.removeFirst();
    });
  },
  processSongEnd: function() {
    this.removeFirst();
    this.play();
  },
  play: function() {
    if (this.length >= 1) {
      this.playFirst();
    }
  },
  removeFirst: function() {
    var firstSong = this.at(0);
    if (firstSong) {
      this.remove(firstSong);
    }
  },
  playFirst: function() {
    var firstSong = this.at(0);
    if (firstSong) {
      firstSong.trigger('play');
    }
  }
});
