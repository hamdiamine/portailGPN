"use strict";
Meteor.publish("typesPrestsByContext", function(context){
  let selector = {
    context:context
  };
  return TypesPrestations.find(selector);
});
