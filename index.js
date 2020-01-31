class topTrumps {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    name(){
        return this.name;
    }

    health() {
        return this.health;
    }

}

class harryPotter extends topTrumps{
    constructor(name, health, magic, courage, evil){
        super(name, health)
        this.magic = magic;
        this.courage = courage;
        this.evil = evil;
    }

    magic(){
        return this.magic
    }

    courage(){
        return this.courage
    }

    evil(){
        return this.evil
    }

}

const harry = new harryPotter("Harry Potter", 70, 90, 90, 20);
const voldermort = new harryPotter("Voldermort", 15, 94, 40, 100);
const dumbledore = new harryPotter("Dumbledore", 75, 98, 92, 2);
const ron = new harryPotter("Ron Weasley", 80, 68, 80, 10);
const hermione = new harryPotter("Hermione Granger", 90, 80, 88, 9);
const severus = new harryPotter("Severus Snape", 69, 90, 92, 20);
const hagrid = new harryPotter("Hagrid", 62, 49, 79, 10);
const hedwig = new harryPotter("Hedwig", 70, 0, 100, 0);
const mcgonagall = new harryPotter("Professor McGonagall", 51, 69, 81, 2);
const dobby = new harryPotter("Dobby", 80, 45, 88, 0);
const neville = new harryPotter("Neville Longbottom", 70, 58, 8);
const malfoy = new harryPotter("Draco Malfoy", 63, 49, 36, 50);
const sirius = new harryPotter("Sirius Black", 43, 65, 72, 7);
const lestrange = new harryPotter("Bellatrix Lestrange", 52, 61, 33, 95);
const ginny = new harryPotter("Ginny Weasley", 86, 46, 63, 30);
const luna = new harryPotter("Luna Lovegood", 57, 44, 52, 10)
const lupin = new harryPotter("Remus Lupin", 33, 71, 78, 6);
const moody = new harryPotter("Alastor Moody", 38, 75, 79, 10)
const lucius = new harryPotter("Lucius Malfoy", 64, 67, 24, 85);
const dudley = new harryPotter("Dudley Dursley", 50, 0, 2, 47);

let harryPotterCards = [
    harry,
    voldermort,
    dumbledore,
    ron,
    hermione,
    severus,
    hagrid,
    hedwig,
    mcgonagall,
    dobby,
    neville,
    malfoy,
    sirius,
    lestrange,
    ginny,
    luna,
    lupin,
    moody, 
    lucius,
    dudley,
]

let shuffle = function (harryPotterCards) {

	let currentIndex = harryPotterCards.length;
	let temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = harryPotterCards[currentIndex];
		harryPotterCards[currentIndex] = harryPotterCards[randomIndex];
		harryPotterCards[randomIndex] = temporaryValue;
	}

	return harryPotterCards;
};

shuffle(harryPotterCards);

let holdingCard = []
let heldCard 

let player1 = harryPotterCards.splice(0,10);
let player2 = harryPotterCards.splice(0,10);

console.log(player1);
console.log("hello");
console.log(player2);

if (player1[0].health < player2[0].health) {
    holdingCard = player1.shift();
    console.log(`Player 1 lost, new deck size: ${player1.length}`);
    player2.push(holdingCard);
}
else if (player1[0].health > player2[0].health) {
    holdingCard = player2.shift();
    console.log(`Player 2 lost, new deck size: ${player2.length}`);
    player1.push(holdingCard);
}
else {
    console.log("Draw");
    heldCard = player1.shift();
    holdingCard.push(heldCard)
    heldCard = player2.shift();
    holdingCard.push(heldCard)
    console.log(`${holdingCard.length}`);
    console.log(`Player 1 lost, new deck size: ${player1.length}`);
    console.log(`Player 2 lost, new deck size: ${player2.length}`);
}

const statFunction = () => {

}