const title = document.querySelector("#title");
const superEventHandler = {
    mouseEnter: function(){
        title.innerHTML = "The mouse is here!";
        title.style.color = "blue";
    },
    mouseLeave: function(){
        title.innerHTML = "The mouse is gone!";
        title.style.color = "red";
    },
    resize: function(){
        title.innerHTML = "You just resized!!";
        title.style.color = "green";
    },
    rightclick: function(){
        title.innerHTML = "That was a right click!";
        title.style.color = "purple";
    }
};


title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightclick);