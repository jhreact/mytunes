// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song) {
      console.log('Just added a song!');
    });
  },
  playFirst: function() {
    console.log("Playing first song");
  }
});
