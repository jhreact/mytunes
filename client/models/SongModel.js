// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function() {
    this.set({playCount: 0});
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.incPlayCount();
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },
  playCount: function() {
    return this.get('playCount');
  },
  incPlayCount: function(){
    //write a function that will set the 'votes' to the current votecount plus one.  Stuck?  check out http://backbonejs.org/#Model-set
    this.set({playCount: this.playCount() + 1});
  },


});
