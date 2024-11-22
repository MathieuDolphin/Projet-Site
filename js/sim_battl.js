class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        const chance = Math.random();
        if (chance < this.precision) {
            console.log(`${this.nom} attaque ${adversaire.nom} et inflige ${this.attaque} points de dégâts!`);
            adversaire.pointsDeVie -= this.attaque;
            console.log(`${adversaire.nom} a maintenant ${adversaire.pointsDeVie} points de vie.`);
        } else {
            console.log(`${this.nom} a raté son attaque contre ${adversaire.nom}.`);
        }
    }
    estVivant() {
        return this.pointsDeVie > 0;
    }
}

const combattant1 = new Combattant('Guerrier', 100, 20, 0.8);
const combattant2 = new Combattant('Mage', 80, 25, 0.7);

while (combattant1.estVivant() && combattant2.estVivant()) {
    combattant1.attaquer(combattant2);
    if (combattant2.estVivant()) { 
        combattant2.attaquer(combattant1);
    }
}

if (combattant1.estVivant()) {
    console.log(`${combattant1.nom} est le vainqueur du combat!`);
} else {
    console.log(`${combattant2.nom} est le vainqueur du combat!`);
}