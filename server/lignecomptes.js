Meteor.publish("lignecomptes", function(){
  return LigneComptes.find();
});
