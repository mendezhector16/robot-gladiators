// player codes

var playerName = window.prompt("What is your Robot's Name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like the following

console.log(playerName, playerAttack, playerHealth);

//Enemy codes

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

console.log(enemyNames.length);

var enemyHealth = 50;
var enemyAttack = 12;

var enemy1 = "R"

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT"){
     //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
     //Log a resulting message to the console so we know that it worked.
        console.log (
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
           
            window.alert (enemyNames + " has died!");
        }

        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }
            // Subtract the value of 'enemyAttack' from the value of 'playerHealth'and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }

    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
         
         //confirm player wants to skip
            
         var confirmSkip = window.confirm("Are you sure you'd like to quit?");

         //if yes (true) lease fight
         if (confirmSkip) {
             window.alert(playerName + " has decided to skip this fight. Goodbye!");

             //sutract money from playerMoney for skipping
             playerMoney = playerMoney - 2;
         }
         // if no (false), ask question agian by running fight () again
         else {
             fight();
         };
    }    

    else {
        window.alert ("You need to choose a valid option. Try again!");
    }
};

//fight()