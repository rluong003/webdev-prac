var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var toggle = true;
var idx = 0;

  
$("body").keydown(function(){

    if (toggle === true){
        nextSequence();
    }
    
});

$(".btn").on("click", function(){

    var userChosenColour = this.id;
    console.log(userChosenColour);

    animatePress(userChosenColour);
    var soundColor = "sounds/" + userChosenColour + ".mp3";
    playSound(soundColor);

    userClickedPattern.push(userChosenColour);

        if (checkAnswer(idx) === true){
            idx++;
            if (userClickedPattern.length === gamePattern.length){

            
                level++;
                setTimeout(function(){
                idx = 0;
                userClickedPattern = [];
                nextSequence();
                }, 1000);
            }
            
            
        }
        else if ( userClickedPattern.length > gamePattern.length){
            playSound("sounds/wrong.mp3");
                $("body").addClass("game-over");
                setTimeout(function(){
                    $("body").removeClass("game-over");
                }, 100);
                $("#level-title").html("Game Over, Press Any Key to Restart");
                startOver();    
        }
        else{
            playSound("sounds/wrong.mp3");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 100);
            $("#level-title").html("Game Over, Press Any Key to Restart");
            startOver();    
        }
    
   
});


function nextSequence() {
    toggle = false;
    $("#level-title").html("Level " + level);
    var randNum = Math.floor(Math.random() * 4);
    var randomColor = buttonColours[randNum];
    gamePattern.push(randomColor);
    $("#" + randomColor).fadeOut(250).fadeIn(250);
    var soundColor = "sounds/" + randomColor + ".mp3";
    playSound(soundColor);

}


function playSound(name){
    var audio = new Audio(name);
    audio.play();
}

function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");

setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
}, 100);

}

function checkAnswer(index){
   
   if (userClickedPattern[index] != gamePattern[index]){
       return false;
   }
  
    return true;
}

function startOver(){
    level = 0;
    gamePattern =[];
    toggle = true;
    userClickedPattern = [];
    idx = 0;
}