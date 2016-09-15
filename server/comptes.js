Meteor.publish("comptes", function(){
  return Comptes.find();
});
