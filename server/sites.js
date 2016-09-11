"use strict";
Meteor.publish("getSitebyPDC", function(pdc){
  let selector={
    pdc : pdc
  };
  return Sites.findOne(selector);
});
