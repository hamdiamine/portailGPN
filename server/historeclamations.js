"use strict";
Meteor.publish("reclamClient", function(client, options){
  let selector = {
    contact: client
  };
  Counts.publish(this, 'reclamClientCount', HistoReclamations.find(selector), {noReady: true});
  return HistoReclamations.find(selector, options);
});

Meteor.publish("reclamCliEnCours", function(client){
  let selector = {
    contact: client,
    etat:"0"
  };
  Counts.publish(this, 'reclamCliEnCoursCount', HistoReclamations.find(selector));
  return HistoReclamations.find(selector);
});

Meteor.publish("reclamCliAnnul", function(client){
  let selector = {
    contact: client,
    etat:"2"
  };
  Counts.publish(this, 'reclamCliAnnulCount', HistoReclamations.find(selector));
  return HistoReclamations.find(selector);
});
