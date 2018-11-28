class Monster {
    constructor(typeOfMonster, strength, name) {
        this._typeOfMonster = typeOfMonster;
        this._strength = strength;
        this._name = name;
    }
    // Getters
    get typeOfMonster() {
        return this._typeOfMonster;
    }

    get strength() {
        return this._strength;
    }

    get name() {
        return this._name;
    }

    powerUp() {
        this._strength += 30;
        console.log("Monster has been powered up by 30");
    }


    changeName() {
        this._name = 'newName';
    }
}




function monsterAttack() {
    this._monsterAttack('Enemy is Attacking!!!');
}


// instance (variable)
let monster1 = new Monster("Ground-Monster", 19, "Skeleton Knight");
let monster2 = new Monster("Sea-Monster", 50, "Hydra");
let monster3 = new Monster("Flying-Monster", 89, "Sky Dragon");

monster1.powerUp();
monster2.powerUp();

console.log(monster1._typeOfMonster);
console.log(monster1.typeOfMonster);

console.log(monster2._strength);
console.log(monster2.strength);

console.log(monster3.name);
console.log(monster3._name);



// inhertance/sub class
class EvolvedMonster extends Monster {

    constructor(typeOfMonster, strength, name, speed, weapon) {
        super(typeOfMonster, strength, name);
        this._speed = speed;
        this._weapon = weapon;
    }

    get speed() {
        return this._speed = speed;

    }

    get weapon() {
        return this._weapon = this.weapon;
    }


    changeWeapon(newWeapon) {
        this._changeWeapon('Weapon/Skill Change');
    }
}

let predator1 = new EvolvedMonster("Ground-Monster", 19, "Death Knight", 10, "Death slash");
let predator2 = new EvolvedMonster("Sea-Monster", 50, "Hydra Lord", 25, "Water Breath");
let predator3 = new EvolvedMonster("Flying-Monster", 89, "Sky King Dragon", 40, "Fire Breath");

console.log(predator1.name);
predator1.changeWeapon;
predator1.powerUp();
predator1.monsterAttack;

console.log(predator2.name);
predator2.powerUp();
predator2.monsterAttack;

console.log(predator3.name);
predator3.powerUp();
predator3.monsterAttack;

console.log(predator1._strength);
console.log(predator2.strength);
