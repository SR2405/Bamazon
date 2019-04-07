var mysql = require("mysql");
var inquirer = require('inquirer');

// create the connection information for the sql database
var connection = mysql.createConnection ({
    host: 'localhost',
    port: 8889,
    user:'root',
    password: 'root',
    database: 'bamazon'
});

// connect to the mysql server and sql database

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

// function which prompts the user for what action they should take
     function start(){
       //display all items

// The app should then prompt users with two messages.
    inquirer
       .prompt({
  // The first should ask them the ID of the product they would like to buy.
           type: "input",
           message: " What is the ID of the item you want to buy?",
           name: 'requestedID'
         })
         .then(function(answer){
           if (answer.requestedID <= 10){
             askUnit();
           }
           else{
             console.log("ID not valid!");
             connection.end();
           }
         });

        }

         function askUnit (){
           inquirer
           .prompt([
             {
              // The second message should ask how many units of the product they would like to buy.
              type: "input",
              message: " How many units do you want to buy?",
              name: 'units'

           }])
         }


