"use strict";
Meteor.publish("actualites", function(){
  Counts.publish(this, 'actualitesCount', Actualites.find());
  return Actualites.find();
});
