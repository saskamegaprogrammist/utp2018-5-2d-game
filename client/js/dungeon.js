'use strict';

//const canvas = document.getElementById("canvas");
//const context = canvas.getContext("2d");

const dungeon_image = new Image();
dungeon_image.src = "../design/map/test_podzemka.png";

function drawDungeon() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(dungeon_image, 0, 0);
}