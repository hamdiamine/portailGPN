"use strict";
Meteor.publish("histoAbnByPDC", function(pdc, option){
  let selector={
    pdc : pdc
  };
  Counts.publish(this, "histoAbnByPDCCount", HistoAbonnements.find(selector), {noReady:true});
  return HistoAbonnements.find(selector, options);
});
