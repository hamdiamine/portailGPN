"use strict";
Meteor.publish("histoCPTByPDC", function(pdc, options){
  let selector={
    pdc : pdc
  };
  Counts.publish(this, "histoCPTByPDCCount", HistoCompteurs.find(selector), {noReady:true});
  HistoCompteurs.find(selector, options);
});
