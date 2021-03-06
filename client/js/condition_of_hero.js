'use strict';

const canvas_condition = document.getElementById("condition");
const context_condition = canvas_condition.getContext("2d");

let intervalID_pop_up_window = {};
let bool_pop_up_window = true;

let mouse = {

    x: 0,
    y: 0,
};

let selected = false;

let inventory = {

    x: 124,
    y: 0,
    width: 519,
    height: 519,

    slots: [],
	
    equipment: [

        //slot_of_armor_on_head
        {
            x: 126.5,
            y: 3,
            width: 64,
            height: 64,
            activity: false
        },

        //slot_of_armor_on_chest
        {
            x: 126.5,
            y: 68,
            width: 64,
            height: 64,
            activity: false
        },

        //slot_of_weapon
        {
            x: 126.5,
            y: 132,
            width: 64,
            height: 64,
            activity: false
        },

        //slot_of_armor_on_legs
        {
            x: 126.5,
            y: 196,
            width: 64,
            height: 64,
            activity: false
        }
    ]
};

const slots = {

    x: 126,
    y: 324,
    width: 515,
    height: 193
};
function isCursorOnDialogBranch1(){
 return (mouse.x > table_data.first_answer_x) &&
        (mouse.x <  table_data.first_answer_x+table_data.first_answer_width) &&
        (mouse.y >  table_data.first_answer_y) &&
        (mouse.y <  table_data.first_answer_y+table_data.first_answer_height)
}
function isCursorOnDialogBranch2(){
 return (mouse.x > table_data.second_answer_x) &&
        (mouse.x <  table_data.second_answer_x+table_data.second_answer_width) &&
        (mouse.y >  table_data.second_answer_y) &&
        (mouse.y <  table_data.second_answer_y+table_data.second_answer_height)
}
function isCursorOnDialogBranch3(){
 return (mouse.x > table_data.third_answer_x) &&
        (mouse.x <  table_data.third_answer_x+table_data.third_answer_width) &&
        (mouse.y >  table_data.third_answer_y) &&
        (mouse.y <  table_data.third_answer_y+table_data.third_answer_height)
}
function isCursorOnDialogBranch4(){
 return (mouse.x > table_data.fourth_answer_x) &&
        (mouse.x <  table_data.fourth_answer_x+table_data.fourth_answer_width) &&
        (mouse.y >  table_data.fourth_answer_y) &&
        (mouse.y <  table_data.fourth_answer_y+table_data.fourth_answer_height)
}
function isCursorInItem(item) {

    return (mouse.x > item.x) &&
        (mouse.x < item.x + item.width) &&
        (mouse.y > item.y) &&
        (mouse.y < item.y + item.height)
}

function isCursorInArmorOnHead() {

    return selected && (selected.type === "armor_on_head") &&
        (mouse.x > inventory.equipment[0].x) &&
        (mouse.x < inventory.equipment[0].x + inventory.equipment[0].width) &&
        (mouse.y > inventory.equipment[0].y) &&
        (mouse.y < inventory.equipment[0].y + inventory.equipment[0].height)
}

function isCursorInArmorOnChest() {

    return selected && (selected.type === "armor_on_chest") &&
        (mouse.x > inventory.equipment[1].x) &&
        (mouse.x < inventory.equipment[1].x + inventory.equipment[1].width) &&
        (mouse.y > inventory.equipment[1].y) &&
        (mouse.y < inventory.equipment[1].y + inventory.equipment[1].height)
}

function isCursorInWeapon() {

    return selected && (selected.type === "weapon") &&
        (mouse.x > inventory.equipment[2].x) &&
        (mouse.x < inventory.equipment[2].x + inventory.equipment[2].width) &&
        (mouse.y > inventory.equipment[2].y) &&
        (mouse.y < inventory.equipment[2].y + inventory.equipment[2].height)
}

function isCursorInArmorOnLegs() {

    return selected && (selected.type === "armor_on_legs") &&
        (mouse.x > inventory.equipment[3].x) &&
        (mouse.x < inventory.equipment[3].x + inventory.equipment[3].width) &&
        (mouse.y > inventory.equipment[3].y) &&
        (mouse.y < inventory.equipment[3].y + inventory.equipment[3].height)
}

function isCursorInSlots() {

    return selected &&
        (findInArray(inventory.slots, selected) === undefined) &&
        (mouse.x > slots.x) &&
        (mouse.x < slots.x + slots.width) &&
        (mouse.y > slots.y) &&
        (mouse.y < slots.y + slots.height)
}

function isCursorInButtonYes() {

    return (mouse.x > button_yes.x) &&
        (mouse.x < button_yes.x + button_yes.width) &&
        (mouse.y > button_yes.y) &&
        (mouse.y < button_yes.y + button_yes.height)
}

function isCursorInButtonNo() {

    return (mouse.x > button_no.x) &&
        (mouse.x < button_no.x + button_no.width) &&
        (mouse.y > button_no.y) &&
        (mouse.y < button_no.y + button_no.height)
}

function isCursorInButtonClose() {

    return (mouse.x > 700) &&
        (mouse.x < 768) &&
        (mouse.y > 0) &&
        (mouse.y < 68)
}

function isCursorInButtonAttack() {
	
	return ((mouse.x > button_attack.x) && 
	(mouse.x < button_attack.x + button_attack.width) && 
	(mouse.y > button_attack.y) && 
	(mouse.y < button_attack.y + button_attack.height))
}

function isCursorInButtonDefend() {
	
	return ((mouse.x > button_defend.x) && 
	(mouse.x < button_defend.x + button_defend.width) && 
	(mouse.y > button_defend.y) && 
	(mouse.y < button_defend.y + button_defend.height))
}

function isCursorInButtonСapitulation() {
	return ((mouse.x > button_capitulation.x) && 
	(mouse.x < button_capitulation.x + button_capitulation.width) && 
	(mouse.y > button_capitulation.y) && 
	(mouse.y < button_capitulation.y + button_capitulation.height))
}

function isCursorInButtonEscape() {
	return ((mouse.x > button_escape.x) && 
	(mouse.x < button_escape.x + button_escape.width) && 
	(mouse.y > button_escape.y) && 
	(mouse.y < button_escape.y + button_escape.height))
}

function isCursorInButtonOk() {
	return ((mouse.x > button_ok.x) && 
	(mouse.x < button_ok.x + button_ok.width) && 
	(mouse.y > button_ok.y) && 
	(mouse.y < button_ok.y + button_ok.height))
}

function outside_the_inventory() {

    return selected &&
        ((mouse.x < inventory.x) ||
            (mouse.x > inventory.x + inventory.width) ||
            (mouse.y < inventory.y) ||
            (mouse.y > inventory.y + inventory.height))
}

document.onmousemove = function (event) {

    const rect = canvas_pop_up_window.getBoundingClientRect()
    mouse.y = event.clientY - rect.top;
    mouse.x = event.clientX - rect.left;
}


document.onmousedown = function () {

    if (!selected) {
	    
	for (let i = 0; i < 4; i++) {
            if (isCursorInItem(inventory.equipment[i])) {

                selected = inventory.equipment[i].activity;
                return;
            }
        }

        const len = inventory.slots.length;
        for (let i = 0; i < len; i++) {
            if (isCursorInItem(inventory.slots[i])) {
		    
                selected = inventory.slots[i];
		return;
            }
        }
    }
	
    if (isCursorInButtonClose()) {

        clearInterval(intervalID_shop);
        context_shop.clearRect(0, 0, canvas_shop.width, canvas_shop.height);
    }
}

const button_yes = {

    x: 460,
    y: 412,
    width: 67,
    height: 20
}

const button_no = {

    x: 287,
    y: 412,
    width: 67,
    height: 20
}

const button_attack = {

    x: 45.5,
    y: 642,
    width: 70,
    height: 57
}

const button_defend = {

    x: 168.5,
    y: 642,
    width: 70,
    height: 57
}

const button_capitulation = {
	 
	x: 631,
    y: 15,
    width: 56,
    height: 49
}

const button_escape = {
	x: 699,
    y: 15,
    width: 56,
    height: 49
}

const button_ok = {
	x: 124,
    y: 114,
    width: 63,
    height: 17
}

document.addEventListener("click", clickYesNo, false);

function clickYesNo() {

    if (is_throw_away.bool) {

        if (isCursorInButtonNo()) {

            selected = false;
            is_throw_away.bool = false;
            bool_pop_up_window = true;
            clearInterval(intervalID_pop_up_window);
            context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
        } else if (isCursorInButtonYes()) {
         
            let i = 0;
            for (; i < 4; i++) {
                if (inventory.equipment[i].activity === selected) {

                    inventory.equipment[i].activity = false;
                    break;
                }
            }

            if (i === 4) {

                const index = findInArray(inventory.slots, selected);
                inventory.slots.splice(index, 1);
            }
	
            selected = false;
            is_throw_away.bool = false;
            bool_pop_up_window = true;
            clearInterval(intervalID_pop_up_window);
            context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
        }
    }
    
    else if (is_join_the_fight.bool) {
		
	if(isCursorInButtonYes()) {
		
		is_join_the_fight.bool = false;
		drawFighting();
		bool_pop_up_window = true;
		clearInterval(intervalID_pop_up_window);
                context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
	}
	else if (isCursorInButtonNo()) {
			
		is_join_the_fight.bool = false;
		bool_pop_up_window = true;
                clearInterval(intervalID_pop_up_window);
                context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
	}
    }
    else if (is_capitulation.bool) {

	if(isCursorInButtonYes()) {
		if (hero.gold - currentEnemy.bribe >= 0) {
			is_capitulation.bool = false;
			bool_pop_up_window = true;
			clearInterval(intervalID_pop_up_window);
			context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
			
			hero.gold -= currentEnemy.bribe;
			battle = false;
			hero.type = 'usual';
			context_fighting.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
		}
    }
    else if (isCursorInButtonNo()) {
		is_capitulation.bool = false;
		bool_pop_up_window = true;
		clearInterval(intervalID_pop_up_window);
                context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
	}
    }
	
    else if (you_lose.bool) {
	if (isCursorInButtonOk) {
		setInterval(drawLose, 10);
		you_lose.bool = false;
		bool_pop_up_window = true;
		clearInterval(intervalID_pop_up_window);
                context_pop_up_window.clearRect(0, 0, canvas_pop_up_window.width, canvas_pop_up_window.height);
	}
    }
}

document.addEventListener('click', function() {
    if (battle) {
		
	if (isCursorInButtonAttack()) {	
		attack();
	}
		
	else if (isCursorInButtonDefend()) {
		defend();
	}
	else if (isCursorInButtonСapitulation()) {
		drawIsCapitulation();
	}
		
	else if (isCursorInButtonEscape()) {
	    if (hero.health >= 10) {
		escape();
	    }
	}
    }
}, false);
document.addEventListener('click', function() {
    if (isCursorOnDialogBranch1()){
        Quest[0].status='active'
        hero.interaction = false;
        context_pop_up_window.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
    }
    if (isCursorOnDialogBranch2()){
        hero.interaction = false;
       context_pop_up_window.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
    }
    if ((isCursorOnDialogBranch3())&&(Quest[0].status=="active")){
        hero.interaction = false;
        context_pop_up_window.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
        }
    if ((isCursorOnDialogBranch4())&&(Quest[0].status=="Completed")){
         hero.interaction = false;
        context_pop_up_window.clearRect(0, 0, canvas_fighting.width, canvas_fighting.height);
         hero.gold+=1000;
    }
})

function equipment(num) {

    const index = findInArray(inventory.slots, selected);
    inventory.slots.splice(index, 1);
    selected.x = inventory.equipment[num].x;
    selected.y = inventory.equipment[num].y;
    inventory.equipment[num].activity = selected;
    selected = false;
}

document.onmouseup = function () {

    if (!is_throw_away.bool) {

        if (outside_the_inventory()) {

            bool_pop_up_window = false;
            intervalID_pop_up_window = setInterval(drawIsThrowAway(), speed);
        } else if (isCursorInArmorOnHead()) {
            equipment(0);
        } else if (isCursorInArmorOnChest()) {
            equipment(1);
        } else if (isCursorInWeapon()) {
            equipment(2);
        } else if (isCursorInArmorOnLegs()) {
            equipment(3);
        } else if (isCursorInSlots()) {

            for (let i = 0; i < 4; i++) {
                if (inventory.equipment[i].activity === selected) {

                    inventory.equipment[i].activity = false;
                    break;
                }
            }

            inventory.slots.splice(inventory.slots.length, 0, selected);
            selected = false;
        } else if (bool_pop_up_window) {
            selected = false;
        }
    }
}

function findInArray(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }

    return undefined;
}
