// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
      console.log('Just added a song!');
    });
  },
  playFirst: function() {
    this.at(0).trigger('play');
  }
});
