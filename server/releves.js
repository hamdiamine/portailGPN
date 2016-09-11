"use strict";
Meteor.publish("relevesByPDC", function(pdc, options){
  let selector = {
    pdc:pdc
  };
  Counts.publish(this,"relevesByPDCCount", Releves.find(selector), {noReady:true});
  Releves.find(selector, options);
});
