// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
      console.log('Just added a song!');
    });
    this.on('ended', function() {
      console.log('Yo, we heard something ended!');
      this.processSongEnd();
    });
  },
  processSongEnd: function() {
    this.remove(this.at(0));
  },
  playFirst: function() {
    this.at(0).trigger('play');
  }
});
