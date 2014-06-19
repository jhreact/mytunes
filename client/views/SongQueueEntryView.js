// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  initialize: function() {
    // Listen for model changes and propagate to ui
    this.model.on('change', this.render, this);
  },

  className: 'songQueueEntryViewRow',
  tagName: 'tr',

  template: _.template('<td class="songQueueEntryTitle"><%= title %></td><td class="songQueueEntryArtist"><%= artist %></td>'),

  // Listen for ui events and propagate to model
  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.toJSON()));
  }

});
