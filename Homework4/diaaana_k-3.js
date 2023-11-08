class Warrior{
    constructor() {
        this.levelValue = 1;
        this.rankValue = "Pushover";
        this.achievementsValue = [];
        this.experienceValue = 100;
    }

    battle(enemyLevel) {
        if(!(enemyLevel >= 1 && enemyLevel <= 100)) {
            return "Invalid level";
        }

        const enemyRank = ranks[Math.floor(enemyLevel / 10)];

        if(enemyRank !== this.rankValue && this.levelValue + 5 <= enemyLevel) {
            return "You've been defeated";
        }

        if(this.levelValue === enemyLevel) {
            this.getExperience(10);
            return "A good fight";
        }
        else if(this.levelValue === enemyLevel + 1) {
            this.getExperience(5);
            return "A good fight";
        }
        else if(this.levelValue-2 >= enemyLevel) {
            return "Easy fight";
        }
        else {
            this.getExperience(20 * Math.abs(enemyLevel - this.levelValue) ** 2);
            return "An intense fight";
        }
    }

    level() {
        return this.levelValue;
    }

    rank() {
        return this.rankValue;
    }

    experience() {
        return this.experienceValue;
    }

    achievements() {
        return this.achievementsValue;
    }

    getExperience(experience) {
        this.experienceValue = Math.min(10000, this.experienceValue + experience);

        this.levelValue = Math.floor(this.experienceValue / 100);
        this.rankValue = ranks[Math.floor(this.levelValue / 10)];
    }

    training([description, experience, minLevel]) {
        if(!(minLevel <= this.levelValue)) {
            return "Not strong enough";
        }

        this.getExperience(experience);

        this.achievementsValue.push(description);
        return description;
    }
}

const ranks = [
    "Pushover",
    "Novice",
    "Fighter",
    "Warrior",
    "Veteran",
    "Sage",
    "Elite",
    "Conqueror",
    "Champion",
    "Master",
    "Greatest",
];


const bruce_lee = new Warrior();
console.log(bruce_lee.level());
console.log(bruce_lee.experience());
console.log(bruce_lee.rank());
console.log(bruce_lee.achievements());
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1]));
console.log(bruce_lee.experience());
console.log(bruce_lee.level());
console.log(bruce_lee.rank());
console.log(bruce_lee.battle(90));
console.log(bruce_lee.experience());
console.log(bruce_lee.achievements());