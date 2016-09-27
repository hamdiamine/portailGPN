"use strict";
Meteor.publish("notificationsCli", function(client){
  let selector = {
    contact: client
  };
  Counts.publish(this, 'notifCliCount', Notifications.find(selector));
  return Notifications.find(selector);
});

Meteor.publish("notifications", function(){
  return Notifications.find();
});
