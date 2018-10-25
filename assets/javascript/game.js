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
    $("#player-character").css("display","none");
    $("#player-defender").css("display","none");
    $("#enemy1").css("display","none");
    $("#enemy2").css("display","none");
    $("#enemy3").css("display","none");
    $("#enemy4").css("display","none");
    
}
//Function call
myReset();
// chara click!
$(".player").on("click",function(){

    //get the player number
    let getPlayerId = $(this).attr("id");

    // convert string to object.
    eval('var yourChar='+getPlayerId);
    //console.log(yourChar.playerName);
    
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
    
    // other players moves to enemy-container.
    // make all enemies visible
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
});
// Attack button
    // display text about damage.
    // reduce (both chara)display health value = health value - attack power.
    // increase the attackpower of your character(new_ap=new_ap+old_ap).
    // if your_hp <= 0 then display "You been defeated GAME OVER!!!" and reset button.
    // if defender_hp <= 0 then display "You have defeated NAME.You can choose to fight another enemy".
        // Remove defender from game.
    //if defender-container is empty display "No enemy here"
    // if enemy available = 0, display "You Won!!! GAME OVER!!!" with reset button.
//reset button
    //dont reset hp of your chara.

$("#attack-button").on("click",function(){
    $("#enemy1").css("display", "block");
    player1.playerName = "hello";
    console.log("Name: "+ player1.playerName);
    console.log("HP: "+ player1.healthPoint);
    console.log("AP: "+ player1.attackPower);
    console.log("CAP: "+ player1.couterAttackPower);
});