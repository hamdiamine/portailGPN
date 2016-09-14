Clients = new Mongo.Collection("clients");

Meteor.methods({
  authentification:function(ref, mdp){
    var client = Clients.findOne({reference:ref});
    if(client){
      if(client.mdp !== mdp){
        throw new Meteor.Error("Login ou mot de passe incorrect");
      }else {
        return client
      }
    }else {
      throw new Meteor.Error("Login ou mot de passe incorrect");
    }
  }
});
