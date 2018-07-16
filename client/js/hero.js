'use strict';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const decoration = new Image();
decoration.src = "../design/map/decoration.png";

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
    down_pressed: false
};

const hero_icon = new Image();
hero_icon.src = "../design/hero/hero-64 (1).png";

//for hero
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {

    if ((e.keyCode === 39) || (e.keyCode === 68)) {
        hero.right_pressed = true;
    } else if ((e.keyCode === 37) || (e.keyCode === 65)) {
        hero.left_pressed = true;
    } else if ((e.keyCode === 38) || (e.keyCode === 87)) {
        hero.up_pressed = true;
    } else if ((e.keyCode === 40) || (e.keyCode === 83)) {
        hero.down_pressed = true;
    }
}

function keyUpHandler(e) {

    if ((e.keyCode === 39) || (e.keyCode === 68)) {
        hero.right_pressed = false;
    } else if ((e.keyCode === 37) || (e.keyCode === 65)) {
        hero.left_pressed = false;
    } else if ((e.keyCode === 38) || (e.keyCode === 87)) {
        hero.up_pressed = false;
    } else if ((e.keyCode === 40) || (e.keyCode === 83)) {
        hero.down_pressed = false;
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

const intervalID = setInterval(drawTown, 10);
