"use strict";
Meteor.publish("histoequipements", function(){
  return HistoEquipements.find();
});
