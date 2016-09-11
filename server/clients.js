
"use strict";
Meteor.publish("authent", function(refe, mdp){
  var client = Clients.findOne({reference:refe});
  if(client){
    if(client.mdp !== mdp){
      client.mdp = "";
    }
  }
  return client;
});

Meteor.publish("findById", function(id){
  return Clients.findOne({_id:id});
});
