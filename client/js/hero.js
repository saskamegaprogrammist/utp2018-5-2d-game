'use strict';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const speed = 100;

let hero = {

    x: 300,
    y: 600,
    radiusW: 24,
    radiusH: 32,
    dx: 8,
    dy: 8,

    right_pressed: false,
    left_pressed: false,
    up_pressed: false,
    down_pressed: false,

    condition: false,

    health_x1: 200,
    health_y: 200,
    health_x2: 500
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


    //condition
    if (e.keyCode === 90) {
        hero.condition = true;
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

    //condition
    if (e.keyCode === 90) {
        hero.condition = false;
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

let intervalID = setInterval(drawDungeon_1, speed);
