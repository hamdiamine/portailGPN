"use strict";
Meteor.publish("abnByPDC", function(pdc){
  const selector={
    pdc : pdc
  };
  return Abonnements.findOne(selector);
});

Meteor.publish("abonnements", function(){
  return Abonnements.find();
});
