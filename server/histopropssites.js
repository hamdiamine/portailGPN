"use strict";
Meteor.publish("histoPropsBySite", function(site, options){
  let selector={
    site : site
  };
  Counts.publish(this, "histoPrposBySiteCount", HistoPropsSites.find(selector), {noReady:true});
  HistoPropsSites.find(selector, options);
});
