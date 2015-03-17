import Ember from 'ember';

export default Ember.Object.extend({
  destroy: function(){
    return this.store.destroy('gather', this);
  },

  save: function(){
    return this.store.save('gather', this);
  },

  toJSON: function(){
    var data = Ember.Object.create(this);

    var userId = this.get('createdBy.id');
    if(userId) {
      data.set('createdBy', {
        __type: 'Pointer',
        className: '_User',
        objectId: userId
      });
    }

    return data;
  }
});
