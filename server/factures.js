"use strict";
Meteor.publish("facturesClient", function(client, options){
  let selector = {
    payeur: client
  };
  Counts.publish(this, 'facturesCliCount', Factures.find(selector), {noReady: true});
  return Factures.find(selector, options);
});

Meteor.publish("impayeesClient",function(payeur){
  let selector = {
    payeur: payeur,
    restantdu:{$gt:0}
  };
  Counts.publish(this, 'impayeesCliCount', Factures.find(selector));
  return Factures.find(selector);
});

Meteor.publish("facturesAbn", function(abn){
  let selector = {
    abonnement: abn
  };
  Counts.publish(this, 'facturesAbnCount', Factures.find(selector), {noReady: true});
  return Factures.find(selector);
});

Meteor.publish("findOne", function(id){
  return Factures.findOne({_id:id});
});
