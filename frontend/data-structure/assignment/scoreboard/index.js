class Score {
    constructor(name, correct, wrong, empty) {
        // TODO: answer here
        this.name = name;
        this.correct = correct;
        this.wrong = wrong;
        this.empty = empty;
    }
}

class Scores {
    constructor(scores) {
        // TODO: answer here
        this.scores = scores;
    }

    topStudents() {
        // TODO: answer here
        this.scores.sort((a, b) => {
            let result = 4*a.correct - a.wrong ;
            let result2 = 4*b.correct - b.wrong ;
            if (result > result2) {
                return -1;
            } else if (result < result2) {
                return 1;
            } 
            if (a.correct > b.correct) {
                return -1;
            } else if (a.correct < b.correct) {
                return 1;
            }
            return 0;
        });

        let names = [];
        for (let i = 0; i < this.scores.length; i++) {
            names.push(this.scores[i].name);
        }
        return names;
    }
}
let wahyu = new Score("Wahyu", 3, 2, 2);
let pratama = new Score("Pratama", 3, 4, 0);
let nurul = new Score("Nurul", 3, 0, 4);
let scores = new Scores([ wahyu, pratama, nurul]);
console.log(scores.topStudents());
        
module.exports = {
    Score,
    Scores
}
