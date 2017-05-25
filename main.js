'use strict';

//class Fighter
class Fighter {
    constructor(name = "unknownFighter", power = 15, health = 7000) {
        this.name = name,
        this.power = power,
        this.health = health
    }

    setDemage(damage) {
        this.health = this.health - damage;
        console.log(`health ${this.name} is ${this.health}`);
    }
    hit(enemy, point) {
        let damage = point * this.power;
        return enemy.setDemage(damage);
    }

}

// class ImprovedFighter
class ImprovedFighter extends Fighter {

    constructor(name = "unknownImprovedFighter", power = 18, health = 10000){
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        point = point * 2;
        super.hit(enemy, point);
    }
}

// create fighters
let vasya = new Fighter('vasya');
let petya = new ImprovedFighter('petya', 20);

// function fight
let fight = (fighter, improvedFighter, ...point) => {

    console.log(`health: ${fighter.name} = ${fighter.health}`);
    console.log(`health: ${improvedFighter.name} = ${improvedFighter.health}`);

    for (let i = 0; i < point.length; i++) {

        for (let j = 0; j < point.length; j++) {

            fighter.hit(improvedFighter, point[j]);

            if (improvedFighter.health <= 0) {
                console.log(`${improvedFighter.name} is die! Game over.`)
                return;
            }

            improvedFighter.doubleHit(fighter, point[j]);

            if (fighter.health <= 0) {
                console.log(`${fighter.name} is die! Game over.`)
                return;
            }
        }
    }
}

fight(vasya, petya, 5, 10, 15, 50);
