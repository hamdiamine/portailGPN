"use strict";
Meteor.publish("getPDC", function(id){
  return PointsDeComptages.findOne({_id : id});
});
