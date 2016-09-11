"use strict";
Meteor.publish("histoPropsByPDC", function(pdc, options){
  let selector={
    pdc : pdc
  };
  Counts.publish(this, "histoPrposByPDCCount", HistoPropsPDCs.find(selector), {noReady:true});
  HistoPropsPDCs.find(selector, options);
});
