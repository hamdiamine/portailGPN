Meteor.publish("histoprofilfacts", function(){
  return HistoProfilFact.find();
});
