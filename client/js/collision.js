'use strict';

const barrier_start = {

    x: 630,
    y: 690,
    width: 5,
    height: 70
}

const barrier_right_forest = {

    x: 510,
    y: 470,
    width: 258,
    height: 76
}

const barrier_down_forest_1 = {

    x: 375,
    y: 655,
    width: 180,
    height: 133
}

const barrier_down_forest_2 = {

    x: 400,
    y: 500,
    width: 25,
    height: 150
}

const barrier_farm = {

    x: 0,
    y: 510,
    width: 192,
    height: 258
}

const barrier_small_house = {

    x: 195,
    y: 510,
    width: 127,
    height: 42
}

const barrier_armories = {

    x: 0,
    y: 425,
    width: 132,
    height: 150
}

/* const barrier_walls_1 = {

    x: 192,
    y: 635,
    width: 80,
    height: 5
} */

const barrier_walls_1 = {

    x: 100,
    y: 100,
    width: 80,
    height: 50
}

const barrier_walls_2 = {

    x: 100,
    y: 0,
    width: 205,
    height: 105
}

const barrier_walls_3 = {

    x: 400,
    y: 0,
    width: 368,
    height: 105
}

const barrier_market = {

    x: 0,
    y: 0,
    width: 132,
    height: 258
}

const barrier_tavern_1 = {

    x: 600,
    y: 225,
    width: 188,
    height: 130
}

const barrier_tavern_2 = {

    x: 445,
    y: 225,
    width: 188,
    height: 5
}

const barrier_tavern_3 = {

    x: 445,
    y: 305,
    width: 60,
    height: 5
}

const barrier_tavern_4 = {

    x: 505,
    y: 305,
    width: 5,
    height: 55
}

const barriers_of_the_town = [barrier_start,
                            barrier_right_forest,
                            barrier_down_forest_1,
                            barrier_down_forest_2,
                            barrier_farm,
                            barrier_small_house,
                            barrier_armories,
                            barrier_walls_1,
                            barrier_walls_2,
                            barrier_walls_3,
                            barrier_market,
                            barrier_tavern_1,
                            barrier_tavern_2,
                            barrier_tavern_3,
                            barrier_tavern_4
                        ];

const len = barriers_of_the_town.length;

function collision(hero) {

    let distX = 0;
    let distY = 0;

    for (let i = 0; i < len; i++) {

        distX = Math.abs(hero.x + hero.radiusW -
            barriers_of_the_town[i].x - barriers_of_the_town[i].width / 2);
        distY = Math.abs(hero.y + hero.radiusH -
            barriers_of_the_town[i].y - barriers_of_the_town[i].height / 2);
    
        if ((distX <= (barriers_of_the_town[i].width / 2) + hero.radiusW) &&
            (distY <= (barriers_of_the_town[i].height / 2) + hero.radiusH)) {
    
            if (hero.y + 2 * hero.radiusH <
                (barriers_of_the_town[i].y + 5)) {
    
                hero.y -= hero.dy;
            } else if (hero.x >
                (barriers_of_the_town[i].x + barriers_of_the_town[i].width - 5)) {
    
                hero.x += hero.dx;
            } else if (hero.x + 2 * hero.radiusW < barriers_of_the_town[i].x + 5) {
    
                hero.x -= hero.dx;
            } else if (hero.y <
                barriers_of_the_town[i].y + barriers_of_the_town[i].height) {
    
                hero.y += hero.dy;
            }
        }
    }
}











const barrier_fence = {

    x1: 192,
    y1: 635,
    width1: 75,
    height1: 5,

    x2: 192,
    y2: 603,
    width2: 75,
    height2: 5
}

const fence = new Image();
fence.src = "../design/map/fence.png";

function collision_with_fence_in_the_town() {

    let distX = Math.abs(hero.x + hero.radiusW -
        barrier_fence.x1 - barrier_fence.width1 / 2);
    let distY = Math.abs(hero.y + hero.radiusH -
        barrier_fence.y1 - barrier_fence.height1 / 2);

    if ((distX <= (barrier_fence.width1 / 2) + hero.radiusW) &&
        (distY <= (barrier_fence.height1 / 2) + hero.radiusH)) {

        if (hero.y + 2 * hero.radiusH <
            (barrier_fence.y1 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.y + hero.radiusH <
            barrier_fence.y1 + barrier_fence.height1) {

            hero.y += hero.dy;
        }
    }

    if (hero.y + hero.radiusH > barrier_fence.y1) {
        return "above";
    } else {
        return "under";
    }
}





















const dungeon = {

    x: 690,
    y: 740,
    width: 30,
    height: 5
}

function transition(hero, trans) {

    const distX = Math.abs(hero.x + hero.radiusW -
        trans.x - trans.width / 2);
    const distY = Math.abs(hero.y + hero.radiusH -
        trans.y - trans.height / 2);

    if ((distX <= (trans.width / 2) + hero.radiusW) &&
        (distY <= (trans.height / 2) + hero.radiusH)) {

        return true;
    } else {

        return false;
    }
}

function dungeon_transition(hero) {

    if (transition(hero, dungeon)) {
        return true;
    }
}

/*
function collision(hero) {

    //for barrier_start
    let distX = Math.abs(hero.x + hero.radius -
        barrier_start.x - barrier_start.width / 2);
    let distY = Math.abs(hero.y + hero.radius -
        barrier_start.y - barrier_start.height / 2);

    if ((distX <= (barrier_start.width / 2) + hero.radius) &&
        (distY <= (barrier_start.height / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_start.y + 5)) {

            hero.y -= hero.dy;
        }
    }

    //for barrier_right_forest
    distX = Math.abs(hero.x + hero.radius -
        barrier_right_forest.x - barrier_right_forest.width / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_right_forest.y - barrier_right_forest.height / 2);

    if ((distX <= (barrier_right_forest.width / 2) + hero.radius) &&
        (distY <= (barrier_right_forest.height / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_right_forest.y + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x >
            (barrier_right_forest.x + barrier_right_forest.width - 5)) {

            hero.x += hero.dx;
        } else if ((hero.x + 2 * hero.radius < barrier_right_forest.x + 5) &&
            (hero.y + 2 * hero.radius < barrier_right_forest.y + barrier_right_forest.height + 20)) {

            hero.x -= hero.dx;
        } else if (hero.y + hero.radius <
            barrier_right_forest.y + barrier_right_forest.height) {

            hero.y += hero.dy;
        }
    }

    //for barrier_down_forest
    distX = Math.abs(hero.x + hero.radius -
        barrier_down_forest.x1 - barrier_down_forest.width1 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_down_forest.y1 - barrier_down_forest.height1 / 2);

    if ((distX <= (barrier_down_forest.width1 / 2) + hero.radius) &&
        (distY <= (barrier_down_forest.height1 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_down_forest.y1 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x >
            (barrier_down_forest.x1 + barrier_down_forest.width1 - 5)) {

            hero.x += hero.dx;
        } else if (hero.x + 2 * hero.radius <
            (barrier_down_forest.x1 + 5)) {

            hero.x -= hero.dx;
        }
    }

    distX = Math.abs(hero.x + hero.radius -
        barrier_down_forest.x2 - barrier_down_forest.width2 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_down_forest.y2 - barrier_down_forest.height2 / 2);

    if ((distX <= (barrier_down_forest.width2 / 2) + hero.radius) &&
        (distY <= (barrier_down_forest.height2 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_down_forest.y2 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x >
            (barrier_down_forest.x2 + barrier_down_forest.width2 - 5)) {

            hero.x += hero.dx;
        } else if (hero.x + 2 * hero.radius <
            (barrier_down_forest.x2 + 5)) {

            hero.x -= hero.dx;
        }
    }

    //for barrier_farm
    distX = Math.abs(hero.x + hero.radius -
        barrier_farm.x - barrier_farm.width / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_farm.y - barrier_farm.height / 2);

    if ((distX <= (barrier_farm.width / 2) + hero.radius) &&
        (distY <= (barrier_farm.height / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            barrier_farm.y + 5) {

            hero.y -= hero.dy;
        } else if (hero.x >
            (barrier_farm.x + barrier_farm.width - 5)) {

            hero.x += hero.dx;
        }
    }

    //for barrier_small_house
    distX = Math.abs(hero.x + hero.radius -
        barrier_small_house.x1 - barrier_small_house.width1 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_small_house.y1 - barrier_small_house.height1 / 2);

    if ((distX <= (barrier_small_house.width1 / 2) + hero.radius) &&
        (distY <= (barrier_small_house.height1 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_small_house.y1 + 5)) {

            hero.y -= hero.dy;
        } else if ((hero.x >
            (barrier_small_house.x1 + barrier_small_house.width1 - 5) &&
            (hero.y + 2 * hero.radius < barrier_small_house.y1 + barrier_small_house.height1 + 20))) {

            hero.x += hero.dx;
        } else if (hero.y + hero.radius <
            barrier_small_house.y1 + barrier_small_house.height1) {

            hero.y += hero.dy;
        }
    }

    //for barrier_armories
    distX = Math.abs(hero.x + hero.radius -
        barrier_armories.x - barrier_armories.width / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_armories.y - barrier_armories.height / 2);

    if ((distX <= (barrier_armories.width / 2) + hero.radius) &&
        (distY <= (barrier_armories.height / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_armories.y + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x >
            (barrier_armories.x + barrier_armories.width - 5)) {

            hero.x += hero.dx;
        }
    }

    //for barrier_walls
    distX = Math.abs(hero.x + hero.radius -
        barrier_walls.x1 - barrier_walls.width1 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_walls.y1 - barrier_walls.height1 / 2);

    if ((distX <= (barrier_walls.width1 / 2) + hero.radius) &&
        (distY <= (barrier_walls.height1 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_walls.y1 + 5)) {

            hero.y -= hero.dy;
        }
    }

    distX = Math.abs(hero.x + hero.radius -
        barrier_walls.x2 - barrier_walls.width2 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_walls.y2 - barrier_walls.height2 / 2);

    if ((distX <= (barrier_walls.width2 / 2) + hero.radius) &&
        (distY <= (barrier_walls.height2 / 2) + hero.radius)) {

        if (hero.x >
            (barrier_walls.x2 + barrier_walls.width2 - 5)) {

            hero.x += hero.dx;
        } else if (hero.y <
            barrier_walls.y2 + barrier_walls.height2) {

            hero.y += hero.dy;
        }
    }

    distX = Math.abs(hero.x + hero.radius -
        barrier_walls.x3 - barrier_walls.width3 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_walls.y3 - barrier_walls.height3 / 2);

    if ((distX <= (barrier_walls.width3 / 2) + hero.radius) &&
        (distY <= (barrier_walls.height3 / 2) + hero.radius)) {

        if (hero.x >
            (barrier_walls.x3 + barrier_walls.width3 - 5)) {

            hero.x += hero.dx;
        } else if (hero.y <
            barrier_walls.y3 + barrier_walls.height3) {

            hero.y += hero.dy;
        }
    }

    distX = Math.abs(hero.x + hero.radius -
        barrier_walls.x4 - barrier_walls.width4 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_walls.y4 - barrier_walls.height4 / 2);

    if ((distX <= (barrier_walls.width4 / 2) + hero.radius) &&
        (distY <= (barrier_walls.height4 / 2) + hero.radius)) {

        if (hero.x + 2 * hero.radius <
            (barrier_walls.x4 + 5)) {

            hero.x -= hero.dx;
        } else if (hero.y <
            barrier_walls.y4 + barrier_walls.height4) {

            hero.y += hero.dy;
        }
    }

    //for barrier_market
    distX = Math.abs(hero.x + hero.radius -
        barrier_market.x - barrier_market.width / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_market.y - barrier_market.height / 2);

    if ((distX <= (barrier_market.width / 2) + hero.radius) &&
        (distY <= (barrier_market.height / 2) + hero.radius)) {

        if ((hero.x >
            (barrier_market.x + barrier_market.width - 5)) &&
            (hero.y + 2 * hero.radius <
                barrier_market.y + barrier_market.height + 20)) {

            hero.x += hero.dx;
        } else if (hero.y + hero.radius <
            barrier_market.y + barrier_market.height) {

            hero.y += hero.dy;
        }
    }

    //for barrier_tavern
    distX = Math.abs(hero.x + hero.radius -
        barrier_tavern.x1 - barrier_tavern.width1 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_tavern.y1 - barrier_tavern.height1 / 2);

    if ((distX <= (barrier_tavern.width1 / 2) + hero.radius) &&
        (distY <= (barrier_tavern.height1 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_tavern.y1 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x + 2 * hero.radius < barrier_tavern.x1 + 5) {

            hero.x -= hero.dx;
        } else if (hero.y <
            barrier_tavern.y1 + barrier_tavern.height1) {

            hero.y += hero.dy;
        }
    }

    distX = Math.abs(hero.x + hero.radius -
        barrier_tavern.x2 - barrier_tavern.width2 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_tavern.y2 - barrier_tavern.height2 / 2);

    if ((distX <= (barrier_tavern.width2 / 2) + hero.radius) &&
        (distY <= (barrier_tavern.height2 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_tavern.y2 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x + 2 * hero.radius < barrier_tavern.x2 + 5) {

            hero.x -= hero.dx;
        } else if (hero.y <
            barrier_tavern.y2 + barrier_tavern.height2) {

            hero.y += hero.dy;
        }
    }

    distX = Math.abs(hero.x + hero.radius -
        barrier_tavern.x3 - barrier_tavern.width3 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_tavern.y3 - barrier_tavern.height3 / 2);

    if ((distX <= (barrier_tavern.width3 / 2) + hero.radius) &&
        (distY <= (barrier_tavern.height3 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_tavern.y3 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x + 2 * hero.radius < barrier_tavern.x3 + 5) {

            hero.x -= hero.dx;
        } else if (hero.y <
            barrier_tavern.y3 + barrier_tavern.height3) {

            hero.y += hero.dy;
        }
    }

    distX = Math.abs(hero.x + hero.radius -
        barrier_tavern.x4 - barrier_tavern.width4 / 2);
    distY = Math.abs(hero.y + hero.radius -
        barrier_tavern.y4 - barrier_tavern.height4 / 2);

    if ((distX <= (barrier_tavern.width4 / 2) + hero.radius) &&
        (distY <= (barrier_tavern.height4 / 2) + hero.radius)) {

        if (hero.y + 2 * hero.radius <
            (barrier_tavern.y4 + 5)) {

            hero.y -= hero.dy;
        } else if (hero.x + 2 * hero.radius < barrier_tavern.x4 + 5) {

            hero.x -= hero.dx;
        } else if (hero.x >
            (barrier_tavern.x4 + barrier_tavern.width4 - 5)) {

            hero.x += hero.dx;
        } else if (hero.y <
            barrier_tavern.y4 + barrier_tavern.height4) {

            hero.y += hero.dy;
        }
    }
}
*/