// Global variables
let playerStar = "";
let defenderStar = "";
let yourCharacterDisplayCheck = 0;
let defenderDisplayCheck = 0;
let enemyCounter = 0;

// create an object for the players
function Players(playerNumber,playerName,playerImageAddr,healthPoint, attackPower, couterAttackPower){
    this.playerNumber = playerNumber;
    this.playerName = playerName;
    this.playerImageAddr = playerImageAddr;
    this.healthPoint = healthPoint;
    this.attackPower = attackPower;
    this.couterAttackPower = couterAttackPower;
}

// id name same as object name
let player1 = new Players(1,"Obi-Wan Kenobi","assets/images/kenobi.jpg",120,8,8);
let player2 = new Players(2,"Luke Skywalker","assets/images/luke.jpg",100,5,5);
let player3 = new Players(3,"Darth Sidious","assets/images/darth.jpg",150,20,20);
let player4 = new Players(4,"Darth Maul","assets/images/maul.jpg",180,25,25);

// Reset function
function myReset(){

    // Reset health
    player1.healthPoint = 120;
    player2.healthPoint = 100;
    player3.healthPoint = 150;
    player4.healthPoint = 180;

    // player display
    $("#player1").css("display", "block");
    $("#player2").css("display", "block");
    $("#player3").css("display", "block");
    $("#player4").css("display", "block");

    // player & defender reset
    $("#player-character").css("display","none");
    $("#player-defender").css("display","none");

    // enemy reset
    
    $("#all-enemy-container").css("display","none");
    $("#enemy1").css("display","none");
    $("#enemy2").css("display","none");
    $("#enemy3").css("display","none");
    $("#enemy4").css("display","none");
    
    // display reset
    $("#player-display").css("display","none");

    // counter & check reset
    enemyCounter = 0;
    defenderDisplayCheck = 0;
    
}

// label funtion for players
function displayPlayersLabel(){

    // player1 label
    $("#name1").text(player1.playerName);
    $("#player1Image").attr("src",player1.playerImageAddr);
    $("#health1").text(player1.healthPoint);

    // player2 label
    $("#name2").text(player2.playerName);
    $("#player2Image").attr("src",player2.playerImageAddr);
    $("#health2").text(player2.healthPoint);

    // player3 label
    $("#name3").text(player3.playerName);
    $("#player3Image").attr("src",player3.playerImageAddr);
    $("#health3").text(player3.healthPoint);

    // player4 label
    $("#name4").text(player4.playerName);
    $("#player4Image").attr("src",player4.playerImageAddr);
    $("#health4").text(player4.healthPoint);
}

// label funtion for enemies
function displayEnemyLabel(){

    // player1 label
    $("#enemy-name1").text(player1.playerName);
    $("#enemy-image1").attr("src",player1.playerImageAddr);
    $("#enemy-health1").text(player1.healthPoint);

    // player2 label
    $("#enemy-name2").text(player2.playerName);
    $("#enemy-image2").attr("src",player2.playerImageAddr);
    $("#enemy-health2").text(player2.healthPoint);

    // player3 label
    $("#name3").text(player3.playerName);
    $("#enemy-name3").attr("src",player3.playerImageAddr);
    $("#enemy-health3").text(player3.healthPoint);

    // player4 label
    $("#enemy-name4").text(player4.playerName);
    $("#enemy-image4").attr("src",player4.playerImageAddr);
    $("#enemy-health4").text(player4.healthPoint);
}

// myReset function call
myReset();

// call funtion to display label on players.
displayPlayersLabel();
// chara click!
$(".player").on("click",function(){

    // get the player number
    let getPlayerId = $(this).attr("id");

    // to use the value globally
    playerStar = getPlayerId;

    // convert string to object.
    eval('var yourChar='+getPlayerId);
    
    // hide all the players.
    $("#player1").css("display", "none");
    $("#player2").css("display", "none");
    $("#player3").css("display", "none");
    $("#player4").css("display", "none");

    // this moves to your character-container.
    $("#player-character").css("display","block");
    $("#chara-name").text(yourChar.playerName);
    $("#chara-image").attr("src",yourChar.playerImageAddr);
    $("#chara-health").text(yourChar.healthPoint);
    
    // call function to display label on enemies.
    displayEnemyLabel();

    // other players moves to enemy-container.
    // make all enemies visible
    $("#all-enemy-container").css("display","block");
    $("#enemy1").css("display","block");
    $("#enemy2").css("display","block");
    $("#enemy3").css("display","block");
    $("#enemy4").css("display","block");

    // hide you character 
    switch(yourChar.playerNumber) {
        case 1:
            $("#enemy1").css("display","none");
            break;
        case 2:
            $("#enemy2").css("display","none");
            break;
        case 3:
            $("#enemy3").css("display","none");
            break;
        case 4:
            $("#enemy4").css("display","none");
            break;
    }

    // display hide
    $("#player-display").css("display","none");
});

// defender click!
$(".enemy").on("click",function(){

    // get the player number
    let getDefenderId = $(this).attr("id");

    // assign getDefenderId with object name
    switch(getDefenderId) {
        case "enemy1":
            getDefenderId = "player1";
            break;
        case "enemy2":
            getDefenderId = "player2";
            break;
        case "enemy3":
            getDefenderId = "player3";
            break;
        case "enemy4":
            getDefenderId = "player4";
            break;
    }

    // to use the value globally
    defenderStar = getDefenderId;
    
    // convert string to object.
    eval('var yourDefender='+getDefenderId);

    // hide your Defender
    switch(yourDefender.playerNumber) {
        case 1:
            $("#enemy1").css("display","none");
            break;
        case 2:
            $("#enemy2").css("display","none");
            break;
        case 3:
            $("#enemy3").css("display","none");
            break;
        case 4:
            $("#enemy4").css("display","none");
            break;
    }

    // this moves to defender container.
    $("#player-defender").css("display","block");
    $("#defender-name").text(yourDefender.playerName);
    $("#defender-image").attr("src",yourDefender.playerImageAddr);
    $("#defender-health").text(yourDefender.healthPoint);

    // display hide
    $("#player-display").css("display","none");

    // set this value when defender is selected.
    defenderDisplayCheck = 1;
});
// Attack button
$("#attack-button").on("click",function(){  
    
    if(defenderDisplayCheck === 0){
        // if defender-container is empty display "No enemy here"
        if(defenderDisplayCheck === 0){
            console.log("defendervalue: "+defenderDisplayCheck);
            $("#player-display").css("display","block");
            $("#player-display-damage").text("No enemy here.");
            $("#defender-display-damage").text("");
        }
    } else {
        console.log("defendervalue: "+defenderDisplayCheck);
    // convert player & defender string to object
    eval('var yourChar='+playerStar);
    eval('var yourDefender='+defenderStar);

    // display text about damage.
    $("#player-display").css("display","block");
    $("#player-display-damage").text("You attacked "+ yourDefender.playerName + " for " + yourChar.attackPower + " damage.");
    $("#defender-display-damage").text(yourDefender.playerName + " attacked you back for " + yourDefender.couterAttackPower + " damage.");

    // hide the reset button
    $("#reset-button").css("display","none");

    // reduce (both your player chara & defender) health value = health value - attack power.
    // increase the attackpower of your player chara
    yourChar.healthPoint = yourChar.healthPoint - yourDefender.couterAttackPower;
    yourDefender.healthPoint = yourDefender.healthPoint - yourChar.attackPower;
    yourChar.attackPower = yourChar.attackPower + yourChar.couterAttackPower;
    $("#chara-health").text(yourChar.healthPoint);
    $("#defender-health").text(yourDefender.healthPoint);
    

    // if your_hp <= 0 then display "You been defeated GAME OVER!!!" and reset button.
    if(yourChar.healthPoint <= 0){ //&& yourChar.healthPoint < yourDefender.healthPoint){
        $("#player-character").css("display","none");
        $("#all-enemy-container").css("display","none");
        $("#player-display-damage").text("You been defeated GAME OVER!!!");
        $("#defender-display-damage").text("");
        $("#reset-button").css("display","block");
        yourChar.attackPower = yourChar.couterAttackPower; 
    }

    // if defender_hp <= 0 then display "You have defeated NAME.You can choose to fight another enemy".
    // Remove defender from game.
    else if(yourDefender.healthPoint <= 0){// && yourChar.healthPoint > yourDefender.healthPoint){
        console.log("player: "+yourChar.healthPoint);
        console.log("defender:"+yourDefender.healthPoint);
        $("#player-display-damage").text("You have defeated " + yourDefender.playerName + ".You can choose to fight another enemy.");
        $("#defender-display-damage").text("");
        $("#reset-button").css("display","block");
        $("#player-defender").css("display","none");
        yourChar.attackPower = yourChar.attackPower + 3*yourChar.couterAttackPower;
        defenderDisplayCheck = 0;
        enemyCounter++;

        // if enemy available = 0, display "You Won!!! GAME OVER!!!" with reset button.
        if(enemyCounter === 3){
            console.log("defendervalue: "+defenderDisplayCheck);
            $("#player-display").css("display","block");
            $("#player-display-damage").text("You Won!!! GAME OVER!!!");
            $("#defender-display-damage").text("");
        }
    }
    }   
});

// reset button
    // dont reset hp of your chara.
$("#reset-button").on("click",function(){
    myReset();
});
