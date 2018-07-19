'use strict'

//dungeon_1
const dungeon_image_1 = new Image();
dungeon_image_1.src = "../design/map/dungeon-1-tree.png";

function drawDungeon_1() {

    if (dungeon_2_from_dungeon_1_transition()) {

        clearInterval(intervalID);

        hero.x = 650;
        hero.y = 690;

        intervalID = setInterval(drawDungeon_2, speed);
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(dungeon_image_1, 0, 0);
    drawHero();
    drawConditionOfHero();

    /* context.beginPath();
    context.rect(648, 0, 48, 5);
    context.fillStyle = "red";
    context.fill();
    context.closePath(); */

    collision(barriers_of_the_dungeon_1);
}
















//dungeon_2
const dungeon_image_2 = new Image();
dungeon_image_2.src = "../design/map/dungeon-2.png";

function drawDungeon_2() {

    if (dungeon_3_from_dungeon_2_transition()) {

        clearInterval(intervalID);

        hero.x = 710;
        hero.y = 625;

        intervalID = setInterval(drawDungeon_3, speed);
        return;
    } else if (dungeon_1_from_dungeon_2_transition()) {

        clearInterval(intervalID);

        hero.x = 650;
        hero.y = 7;

        intervalID = setInterval(drawDungeon_1, speed);
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(dungeon_image_2, 0, 0);
    drawHero();

    /* context.beginPath();
    context.rect(648, 763, 48, 5);
    context.fillStyle = "red";
    context.fill();
    context.closePath(); */

    collision(barriers_of_the_dungeon_2);
}


















//dungeon_3
const dungeon_image_3 = new Image();
dungeon_image_3.src = "../design/map/dungeon-3.png";

function drawDungeon_3() {

    if (dungeon_4_from_dungeon_3_transition()) {

        clearInterval(intervalID);

        hero.x = 710;
        hero.y = 490;

        intervalID = setInterval(drawDungeon_4, speed);
        return;
    } else if (dungeon_2_from_dungeon_3_transition()) {

        clearInterval(intervalID);

        hero.x = 7;
        hero.y = 625;

        intervalID = setInterval(drawDungeon_2, speed);
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(dungeon_image_3, 0, 0);
    drawHero();

    /*  context.beginPath();
     context.rect(763, 648, 5, 48);
     context.fillStyle = "red";
     context.fill();
     context.closePath(); */

    collision(barriers_of_the_dungeon_3);
}
















//dungeon_4
const dungeon_image_4 = new Image();
dungeon_image_4.src = "../design/map/dungeon-4.png";

function drawDungeon_4() {

    if (town_transition()) {

        clearInterval(intervalID);

        hero.x = 665;
        hero.y = 635;

        intervalID = setInterval(drawTown, speed);
        return;
    } else if (dungeon_3_from_dungeon_4_transition()) {

        clearInterval(intervalID);

        hero.x = 7;
        hero.y = 490;

        intervalID = setInterval(drawDungeon_3, speed);
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(dungeon_image_4, 0, 0);
    drawHero();

    /* context.beginPath();
    context.rect(763, 520, 5, 48);
    context.fillStyle = "red";
    context.fill();
    context.closePath(); */

    collision(barriers_of_the_dungeon_4);
}














//town
const town_image = new Image();
town_image.src = "../design/map/map_back.png";

const decoration = new Image();
decoration.src = "../design/map/decoration.png";

function drawTown() {

    if (dungeon_4_from_town_transition()) {

        clearInterval(intervalID);

        hero.x = 60;
        hero.y = 7;

        intervalID = setInterval(drawDungeon_4, speed);
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(town_image, 0, 0);

    const fence_bool = collision_with_fence_in_the_town();
    if (fence_bool === "under") {

        drawHero();
        context.drawImage(fence, 192, 595);
    } else {

        context.drawImage(fence, 192, 595);
        drawHero();
    }

    context.drawImage(decoration, 0, 0);

    /* context.beginPath();
    context.rect(630, 690, 5, 70);
    context.fillStyle = "red";
    context.fill();
    context.closePath(); */

    collision(barriers_of_the_town);
}









///////////////////////////////////////////








//condition of hero
function drawConditionOfHero() {

    if (hero.condition) {
        
        drawInventory();
        drawHealth();
    }
}








//inventory
const inventory_image = new Image();
inventory_image.src = "../design/inventory/inventory_test.png";

function drawInventory() {

    context.drawImage(inventory_image, 0, 500);
}









//health
function drawHealth() {

    context.beginPath();
    context.lineWidth = 30;
    context.moveTo(hero.health_x1, hero.health_y);
    context.lineTo(hero.health_x2, hero.health_y);
    context.strokeStyle = "red";
    context.lineCap = "round";
    context.stroke();
    context.closePath();
}






/*
const cell_for_inventory = {

    width: 150,
    height: 150,
    rowCount: 3,
    columnCount: 3,
    padding: 20,
    offsetTop: 250,
    offsetLeft: 30
}

const table_for_inventory = []
for (let i = 0; i < cell_for_inventory.columnCount; i++) {

    table_for_inventory[i] = []
    for (let j = 0; j < cell_for_inventory.rowCount; j++) {

        table_for_inventory[i][j] = {
            x: i * (cell_for_inventory.width +
                cell_for_inventory.padding) +
                cell_for_inventory.offsetLeft,

            y: j * (cell_for_inventory.height +
                cell_for_inventory.padding) +
                cell_for_inventory.offsetTop
        }
    }
}

function grid() {

    for (let i = 0; i < cell_for_inventory.columnCount; i++) {
        for (let j = 0; j < cell_for_inventory.rowCount; j++) {

            context.beginPath();
            context.rect(
                
                table_for_inventory[i][j].x,
                table_for_inventory[i][j].y,
                cell_for_inventory.width,
                cell_for_inventory.height
            );

            context.strokeStyle = "red";
            context.lineWidth = 7;
            context.stroke();
            context.closePath();
        }
    }
}

function drawInventory() {

    if (hero.inventory) {
        grid();
    }
}
*/
