'use strict';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let hero = {

    x: 350,
    y: 350,
    radiusW: 24,
    radiusH: 32,
    dx: 1.5,
    dy: 1.5,
    right_pressed: false,
    left_pressed: false,
    up_pressed: false,
    down_pressed: false,
    inventory: false
}

const hero_icon = new Image();
hero_icon.src = "../design/hero/hero-64 (1).png";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {

    //movement
    if ((e.keyCode === 39) || (e.keyCode === 68)) {
        hero.right_pressed = true;
    }
    
    if ((e.keyCode === 37) || (e.keyCode === 65)) {
        hero.left_pressed = true;
    }
    
    if ((e.keyCode === 38) || (e.keyCode === 87)) {
        hero.up_pressed = true;
    }
    
    if ((e.keyCode === 40) || (e.keyCode === 83)) {
        hero.down_pressed = true;
    }


    //inventory
    if (e.keyCode === 9) {
        hero.inventory = true;
    }
}

function keyUpHandler(e) {

    //movement
    if ((e.keyCode === 39) || (e.keyCode === 68)) {
        hero.right_pressed = false;
    }

    if ((e.keyCode === 37) || (e.keyCode === 65)) {
        hero.left_pressed = false;
    }
    
    if ((e.keyCode === 38) || (e.keyCode === 87)) {
        hero.up_pressed = false;
    }
    
    if ((e.keyCode === 40) || (e.keyCode === 83)) {
        hero.down_pressed = false;
    }

    //inventory
    if (e.keyCode === 9) {
        hero.inventory = false;
    }
}

function drawHero() {

    if (hero.left_pressed &&
        (hero.x > 0)) {

        hero.x -= hero.dx;
    } else if (hero.right_pressed &&
        (hero.x + 2 * hero.radiusW < canvas.width)) {

        hero.x += hero.dx;
    } else if (hero.up_pressed &&
        (hero.y > 0)) {

        hero.y -= hero.dy;
    } else if (hero.down_pressed &&
        (hero.y + 2 * hero.radiusH < canvas.height)) {

        hero.y += hero.dy;
    }

    context.drawImage(hero_icon, hero.x, hero.y);
}

let intervalID = setInterval(drawDungeon_1, 10);
