
"use strict";
Meteor.publish("authent", function(ref, mdp){
  var client = Clients.findOne({reference:ref});
  if(client){
    if(client.mdp !== mdp){
      client.mdp = "";
    }
  }
  return client;
});


Meteor.publish("clientById", function(id){
  return Clients.findOne({id:id});
});


Meteor.publish("clients", function(){
  return Clients.find();
});
