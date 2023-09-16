var randomnumber1 = Math.floor(Math.random()*6) + 1;
var diceNumberImg = "dice"+randomnumber1+".png";
var randomImgSrc = "images/"+diceNumberImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceNumberImg2 = "dice"+randomNumber2+".png";
var randomImgSrc2 = "images/"+diceNumberImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImgSrc2);

if(randomnumber1>randomNumber2) {
    document.querySelector("h1").innerHTML=" 🚩 Player 1 wins!";
}
else if(randomNumber2>randomnumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins!  🚩";
}
else {
    document.querySelector("h1").innerHTML="draw!";
}