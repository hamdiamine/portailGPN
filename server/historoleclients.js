"use strict";
Meteor.publish("listRoleClient", function(client){
  const selector = {
    idClient: client
  };
  Counts.publish(this, 'listRoleClientCount', HistoRoleClients.find(selector), {noReady: true});
  return HistoRoleClients.find(selector);
});

Meteor.publish("histoRoleClients", function(){
  return HistoRoleClients.find();
});
