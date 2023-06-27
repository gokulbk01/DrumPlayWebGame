//detecting button press
var noofDrums=document.querySelectorAll(".drum").length
for(var i =0;i<noofDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}
function handleclick(){
    var buttonName=this.innerHTML;
    switch (buttonName) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log(buttonName);
            break;
    }
    
}
//detecting key press
var pressedkey=document.addEventListener("keypress",function (event){
    keyClick(event.key);
});
function keyClick(pressedkey){
    switch (pressedkey) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log(pressedkey);
            break;
    }

}