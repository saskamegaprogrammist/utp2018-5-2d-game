'use strict'

function drawTown() {

    if (dungeon_transition(hero)) {

        clearInterval(intervalID);
        intervalID = setInterval(drawDungeon, 10);
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    const fence_bool = collision_with_fence_in_the_town();
    if (fence_bool === "under") {

        drawHero();
        context.drawImage(fence, 192, 595);
    } else {

        context.drawImage(fence, 192, 595);
        drawHero();
    }

    context.drawImage(decoration, 0, 0);

    context.beginPath();
    context.rect(630, 690, 5, 70);
    context.fillStyle = "red";
    context.fill();
    context.closePath();

    collision(hero);
}