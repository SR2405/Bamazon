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
      connection.query("SELECT * FROM products", function(err,result,fields)
      {
        if (err) throw err;
        console.log(result);
        // The app should then prompt users with two messages.
        inquirer
        .prompt([{
          // The first should ask them the ID of the product they would like to buy.
          type: "rawdata",
          name: 'requestedID',
          message: " What is the ID of the item you want to buy?"
        }])
        .then(function(answer){
          if (answer.requestedID <= result.length){
            askUnit(answer.requestedID);
          }
          else{
            console.log("ID not valid!");
            connection.end();
          }
        });
      });
        
        

         function askUnit (id){
      

           inquirer
           .prompt(
             {
              // The second message should ask how many units of the product they would like to buy.
              type: "input",
              message: " How many units do you want to buy?",
              name: 'units'
           })
           .then(function(answer){
             var chosenUnits;

             var query = "Select * FROM products WHERE item_id=?"
             connection.query(query, id, function(err, response){
               console.log( response[0].stock_quantity);

               if (response[0].stock_quantity < parseInt(answer.units)){
                 console.log("not enough")
               }
               else {
                 console.log("Order placed!");
                  reduceUnits(response[0].item_id, response[0].stock_quantity - parseInt(answer.units));
               }
             })

           
           })
          }


          function reduceUnits(id,number){
            var query = "UPDATE products SET stock_quantity=? WHERE item_id=?"

            var sqlArr = [number,id]

            connection.query(query,sqlArr, function(err, response){
              console.log(response);

              start();
            })

          }
        }