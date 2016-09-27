"use strict";
Meteor.publish("relevesByPDC", function(pdc, options){
  let selector = {
    pdc:pdc
  };
  Counts.publish(this,"relevesByPDCCount", Releves.find(selector), {noReady:true});
  return Releves.find(selector, options);
});

Meteor.publish("releves", function(){
  return Releves.find();
});
