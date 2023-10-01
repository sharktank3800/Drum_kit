var eachClick = document.querySelectorAll(".drum");

function clickBtn(){
    alert("yes i still click well done");
};


for(var i = 0; i < eachClick.length; i++){
    eachClick[i].addEventListener("click", clickBtn);
};



