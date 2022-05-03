class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost ,power, resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience
    }
    attack(target){
        console.log(`${this.name} just yeeted, ${target.name}`)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.magnitude = magnitude;
        this.stat = stat;
        this.text = text;
    }
    play(target){
        console.log(`${this.name} afflicts ${target.name}`)
        target.resilience += this.magnitude
    }
}

const Bninja = new Unit("B belt Ninja", 4, 5, 4)
const Rninja = new Unit("R belt Ninja", 3, 3, 4)

const HardAlgo = new Effect("Hard Algorithm", 2, 'increases targets resilience by 3', "resilience", 3)
const Unhandled = new Effect("Unhandled Promise Rejection", 1, 'reduce targets resilience by 2', "resilience", -2)
const PairProg = new Effect("Pair Programming", 3, "increase targets power by 2", "power", 2) 

HardAlgo.play(Rninja)
console.log(Rninja.resilience)

Unhandled.play(Rninja)
console.log(Rninja.resilience)


PairProg.play(Rninja)
console.log(Rninja.power)

Rninja.attack(Bninja)

