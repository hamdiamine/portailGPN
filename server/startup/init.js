Meteor.startup(function () {
  /*
  var oracledb = Npm.require('oracledb');

  oracledb.getConnection(
    {
      user          : "meteor",
      password      : "meteor",
      connectString : "hkh-PC:1521/HKH"
    },
    function(err, connection)
    {
      if (err) { console.error(err.message); return; }

      connection.execute(
        "SELECT code " +
          "FROM hkh " ,
        function(err, result)
        {
          if (err) { console.error(err.message); return; }
          console.log(result.rows);
        });
    });
    */

    //Clients.insert({reference:'01', name:'hkh', mdp:'01'});
});
