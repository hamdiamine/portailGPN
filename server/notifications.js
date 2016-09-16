"use strict";
Meteor.publish("notifications", function(client){
  let selector = {
    contact: client
  };
  Counts.publish(this, 'notifCliCount', Notifications.find(selector));
  return Notifications.find(selector);
});
