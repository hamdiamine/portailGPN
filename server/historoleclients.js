"use strict";
Meteor.publish("listRoleClient", function(client){
  let selector = {
    client: client
  };
  Counts.publish(this, 'listRoleClientCount', HistoRoleClients.find(selector), {noReady: true});
  return HistoRoleClients.find(selector, options);
});
