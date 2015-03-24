import Model from 'ember-magic-man/model';

export default Model.extend({
  toJSON: function(){
    var data = this._super();
    data.createdBy = {
      "__type" : "Pointer",
      "className" : "_User",
      "objectId" : this.get('createdBy.id')
    };

    data.gather = {
      "__type" : "Pointer",
      "className" : "gatherings",
      "objectId" : this.get('gather.id')
    };

    return data;
  }
});
