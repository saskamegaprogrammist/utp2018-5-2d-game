let inventory = [];
class Loot {
	constructor(name,type) {
		this.name = name;
		this.type = type;
	}
}
if (localStorage.getItem("inventory") !== null)
	inventory = localStorage.getItem("inventory"); 
else
	for (i = 0 ; i < 10 ; i++) {
		elementOfInventory = new Loot("blade" + i.toString(),"bron");
		inventory[i] = elementOfInventory;
	}