'use strict';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const speed = 10;

let hero = {

    x: 256,
    y: 640,
    radiusW: 21.5,
    radiusH: 32,
    dx: 1,
    dy: 1,

    right_pressed: false,
    left_pressed: false,
    up_pressed: false,
    down_pressed: false,

    condition: false,

    health_x1: 200,
    health_y: 200,
    health_x2: 500
}

let animate = {};

animate['hero'] = {
    'to_the_left': {
        'el'    : null,
        'src'   : "../design/hero/animation-hero-64px.png",
        'currentFrame'  : 0, 
        'frames' : 7,
	'step' : 0,
	'speed' : 8
    },
    'to_the_right': {
                        'el'    : null,
                        'src'   : "../design/hero/animation-hero-64px-right.png",
			'currentFrame': 0,
			'frames' : 7,
	    		'step' : 0,
	    		'speed' : 8
    },
	'stand' : {
			'el'    : null,
                        'src'   : "../design/hero/hero-64 (1).png",
			'currentFrame': 0,
			'frames' : 0,
			'step' : 0,
			'speed' : 10
	}		
};
    
 for (let i in animate['hero']) {                        
                        let img = new Image();                        
                        img.src = animate['hero'][i].src;
                        animate['hero'][i].el = img;
 }

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

    if (hero.left_pressed) {
	context.drawImage(animate['hero']['to_the_left'].el, 
					Math.round(hero.radiusW*2*animate['hero']['to_the_left'].currentFrame), 0, 
					hero.radiusW*2, hero.radiusH*2, 
					hero.x, hero.y,
					hero.radiusW*2, hero.radiusH*2);
	if (animate['hero']['to_the_left'].step >= animate['hero']['to_the_left'].speed) {
		if (animate['hero']['to_the_left'].currentFrame == animate['hero']['to_the_left'].frames) {
			animate['hero']['to_the_left'].currentFrame = 0;
		 } else {
			animate['hero']['to_the_left'].currentFrame++;
			animate['hero']['to_the_left'].step = 0;
		 }
		}
		else animate['hero']['to_the_left'].step++;
	}
	else if (hero.right_pressed) {
		context.drawImage(animate['hero']['to_the_right'].el, 
					Math.round(hero.radiusW*2*animate['hero']['to_the_right'].currentFrame), 0, 
					hero.radiusW*2, hero.radiusH*2, 
					hero.x, hero.y,
					hero.radiusW*2, hero.radiusH*2);
	if (animate['hero']['to_the_right'].step >= animate['hero']['to_the_right'].speed) {				
		if (animate['hero']['to_the_right'].currentFrame == animate['hero']['to_the_right'].frames) {
			animate['hero']['to_the_right'].currentFrame = 0;
		 } else {
			animate['hero']['to_the_right'].currentFrame++;
			animate['hero']['to_the_right'].step = 0;
		 }
		}
		else animate['hero']['to_the_right'].step++;
	}

	else {
		context.drawImage(animate['hero']['stand'].el, 
						0, 0,
						hero.radiusW*2, hero.radiusH*2, 
						hero.x, hero.y,
						hero.radiusW*2, hero.radiusH*2);
	}
}

let intervalID = setInterval(drawDungeon_1, speed);
