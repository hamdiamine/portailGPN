/*
"use strict";
Meteor.publish("test_mysql", function(){
  var mysql      = Npm.require('mysql');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'db_grgh'
  });

  connection.connect(function(err) {
  if (err) {
     console.log(err);
    return null;
  }
  connection.query('SELECT * FROM grm_recette', function(err, rows, fields) {
   if (err) {
     return null;
   };
   console.log(rows.length);
       return rows;
   //Counts.publish(this, 'impayeesCliCount', function(){}, {noReady: true});
  });

  connection.end();
  });
});
*/
