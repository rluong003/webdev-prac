var randomNum = Math.floor(Math.random() * 6) + 1;
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

if (randomNum === 1){
image1.setAttribute("src", "images/dice1.png");
}
else if( randomNum === 2){
    image1.setAttribute("src", "images/dice2.png");

}
else if( randomNum === 3){
    image1.setAttribute("src", "images/dice3.png");

}
else if( randomNum === 4){
    image1.setAttribute("src", "images/dice4.png");

}
else if( randomNum === 5){
    image1.setAttribute("src", "images/dice5.png");

}
else{
    image1.setAttribute("src", "images/dice6.png");

}

if (randomNum1 === 1){
    image2.setAttribute("src", "images/dice1.png");
    }
    else if( randomNum1 === 2){
        image2.setAttribute("src", "images/dice2.png");
    }
    else if( randomNum1 === 3){
        image2.setAttribute("src", "images/dice3.png");
    
    }
    else if( randomNum1 === 4){
        image2.setAttribute("src", "images/dice4.png");
    
    }
    else if( randomNum1 === 5){
        image2.setAttribute("src", "images/dice5.png");
    
    }
    else{
        image2.setAttribute("src", "images/dice6.png");
    
    }

    if(randomNum > randomNum1){
        document.querySelector("h1").innerHTML = "Player1 wins!";
    }
    else if (randomNum1 > randomNum){
        document.querySelector("h1").innerHTML = "Player2 wins!";

    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";

    }