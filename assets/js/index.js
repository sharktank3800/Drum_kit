var eachClick = document.querySelectorAll(".drum");

for(var i = 0; i < eachClick.length; i++){
    eachClick[i].addEventListener("click", function(){

        var btnHtml = this.innerHTML;
        // calls the keyPlays function with the buttons innerHTML
        keyPlays(btnHtml);
    });
};



document.addEventListener("keydown", function(event){
    // calls keyPlays function with the pressed key
    keyPlays(event.key);
});

function keyPlays(key){


    switch (key) {
        case "w":
            var audio1 = new Audio("./assets/sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("./assets/sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("./assets/sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("./assets/sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("./assets/sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("./assets/sounds/crash.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("./assets/sounds/kick-bass.mp3");
            audio7.play();
            break;
        
        default:  
    }
};
   
