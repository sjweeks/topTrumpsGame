class topTrumps {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    name() {
        return this.name;
    }

    health() {
        return this.health;
    }
}

class harryPotter extends topTrumps {
    constructor(name, health, magic, courage, evil) {
        super(name, health)
        this.magic = magic;
        this.courage = courage;
        this.evil = evil;
    }

    magic() {
        return this.magic
    }

    courage() {
        return this.courage
    }

    evil() {
        return this.evil
    }
}

class pokemon extends topTrumps {
    constructor(name, health, power, attack, defence){
        super(name, health)
        this.power = power;
        this.attack = attack;
        this.defence = defence;
    }

    power() {
        return this.power
    }

    attack() {
        return this.attack
    }

    defence() {
        return this.defence
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

const pikachu = new pokemon("Pikachu", 81, 60, 58, 49);
const charmander = new pokemon("Charmander", 74, 62, 59, 52);
const squirtle = new pokemon ("Squirtle", 80, 60, 55, 50);
const bulbasaur = new pokemon("Bulbasaur", 80, 48, 49, 52);
const charmeleon = new pokemon("Charmeleon", 88, 83, 70, 65);
const wartortle = new pokemon("Wartortle", 88, 69, 73, 65); 
const ivysaur = new pokemon("Ivysaur", 86, 65, 68, 73); 
const charizard = new pokemon("Charizard", 95, 96, 97, 89); 
const blastoise = new pokemon("Blastoise", 94, 98, 94, 95);
const venusaur = new pokemon("Venusaur", 100, 90, 89, 93); 
const pidgey = new pokemon("Pidgey", 70, 53, 59, 58);
const pidgeotto = new pokemon("Pidgeotto", 80, 65, 69, 63);
const pidgeot = new pokemon("Pidgeot", 90, 88, 87, 90);
const raichu = new pokemon("Raichu", 95, 80, 95, 88);
const ponyta = new pokemon("Ponyta", 77, 68, 61, 56);
const rapidash = new pokemon("Rapidash", 93, 85, 78, 71);
const growlithe = new pokemon("Growlithe", 89, 70, 72, 63);
const arcanine = new pokemon("Arcanine", 96, 93, 94, 88);
const staryu = new pokemon("Staryu", 67, 55, 59, 61);
const starmie = new pokemon("Starmie", 77, 74, 78, 69);
const magicarp = new pokemon("Magicarp", 65, 29, 21, 25);
const gyarados = new pokemon("Gyarados", 78, 81, 88, 79);
const mewtwo = new pokemon("MewTwo", 99, 99, 100, 96); 
const mew = new pokemon("Mew", 100, 99, 100, 99);
const ghastly = new pokemon("Ghastly", 67, 49, 76, 78);
const gengar = new pokemon("Gengar", 70, 62, 85, 79);
const haunter = new pokemon("Haunter", 81, 78, 82, 80);
const abra = new pokemon("Abra", 80, 73, 76, 74);
const kadabra = new pokemon("Kadabra", 89, 82, 85, 83);
const alakazam = new pokemon("Alakazam", 92, 93, 90, 94);


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

let pokemonCards = [
    pikachu,
    charmander, 
    squirtle,
    bulbasaur, 
    charmeleon, 
    wartortle,
    ivysaur,
    charizard,
    blastoise,
    venusaur,
    pidgey,
    pidgeotto,
    pidgeot,
    raichu,
    ponyta,
    rapidash,
    growlithe,
    arcanine,
    staryu,
    starmie,
    magicarp,
    gyarados,
    mewtwo, 
    mew,
    ghastly,
    gengar,
    haunter,
    abra,
    kadabra,
    alakazam,
    ]

let currentCards = []


harryPotterCardChoice = true;
pokemonCardChoice = false;

let playerChoice = () => {
    if (harryPotterCardChoice == true){
        console.log("Harry Potter game chosen");
        currentCards.push(harryPotterCards);
        return currentCards;
    }
    else if(pokemonCardChoice == true){
        console.log("Pokemon game chosen");
        currentCards.push(pokemonCards);
        return currentCards;
    }
    else{
        console.log("Please pick a deck of cards");
    }
}
playerChoice();

console.log(currentCards)
console.log("New New New New New New")

let shuffle = function (currentCards) {

    let currentIndex = currentCards.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = currentCards[currentIndex];
        currentCards[currentIndex] = currentCards[randomIndex];
        currentCards[randomIndex] = temporaryValue;
    }
    return currentCards;
};

shuffle(currentCards);

let holdingCard = []
let heldCard

let player1 = currentCards.splice(0, 10);
let player2 = currentCards.splice(0, 10);

console.log(player1);
console.log("hello");
console.log(player2);

const healthFunc = () => {
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
        holdingCard.push(heldCard);
        console.log(`${holdingCard.length}`);
        console.log(`Player 1 lost, new deck size: ${player1.length}`);
        console.log(`Player 2 lost, new deck size: ${player2.length}`);
    }
}

const magicFunc = () => {
    if (player1[0].magic < player2[0].magic) {
        holdingCard = player1.shift();
        console.log(`Player 1 lost, new deck size: ${player1.length}`);
        player2.push(holdingCard);
    }
    else if (player1[0].magic > player2[0].magic) {
        holdingCard = player2.shift();
        console.log(`Player 2 lost, new deck size: ${player2.length}`);
        player1.push(holdingCard);
    }
    else {
        console.log("Draw");
        heldCard = player1.shift();
        holdingCard.push(heldCard)
        heldCard = player2.shift();
        holdingCard.push(heldCard);
        console.log(`${holdingCard.length}`);
        console.log(`Player 1 lost, new deck size: ${player1.length}`);
        console.log(`Player 2 lost, new deck size: ${player2.length}`);
    }
}

const courageFunc = () => {
    if (player1[0].courage < player2[0].courage) {
        holdingCard = player1.shift();
        console.log(`Player 1 lost, new deck size: ${player1.length}`);
        player2.push(holdingCard);
    }
    else if (player1[0].courage > player2[0].courage) {
        holdingCard = player2.shift();
        console.log(`Player 2 lost, new deck size: ${player2.length}`);
        player1.push(holdingCard);
    }
    else {
        console.log("Draw");
        heldCard = player1.shift();
        holdingCard.push(heldCard)
        heldCard = player2.shift();
        holdingCard.push(heldCard);
        console.log(`${holdingCard.length}`);
        console.log(`Player 1 lost, new deck size: ${player1.length}`);
        console.log(`Player 2 lost, new deck size: ${player2.length}`);
    }
}

const evilFunc = () => {
    if (player1[0].evil > player2[0].evil) {
        holdingCard = player1.shift();
        console.log(`Player 1 lost, new deck size: ${player1.length}`);
        player2.push(holdingCard);
    }
    else if (player1[0].evil < player2[0].evil) {
        holdingCard = player2.shift();
        console.log(`Player 2 lost, new deck size: ${player2.length}`);
        player1.push(holdingCard);
    }
    else {
        console.log("Draw");
        heldCard = player1.shift();
        holdingCard.push(heldCard)
        heldCard = player2.shift();
        holdingCard.push(heldCard);
        console.log(`${holdingCard.length}`);
        console.log(`Player 1 lost, new deck size: ${player1.length}`);
        console.log(`Player 2 lost, new deck size: ${player2.length}`);
    }
}

const statFunction = () => {

}