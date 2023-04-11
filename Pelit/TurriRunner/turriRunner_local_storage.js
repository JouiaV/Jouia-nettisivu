
// highscore - - - - - -
var high_score = localStorage.getItem("high-score");

if (high_score === null) {
    console.log("ei oo high-score")
    high_score = 0
    localStorage.setItem("high-score", 0);
} 
const highScoreElem = document.querySelector("[data-high-score]")
highScoreElem.innerHTML = high_score

export function manageNewScore(score) {
    if (score > high_score) {
        localStorage.setItem("high-score", score);
        highScoreElem.innerHTML = score
        high_score = highScoreElem.innerHTML
    }
}


// turricoins - - - - - - -
var turricoins = localStorage.getItem("turricoins");

if (turricoins === null) {
    console.log("ei oo turricoins")
    turricoins = 0
    localStorage.setItem("turricoins", 0);
} 
const turricoinsElem = document.querySelector("[data-turricoins]")
turricoinsElem.innerHTML = turricoins

export function addTurricoins(amount) {
    turricoins = (amount + parseInt(turricoins)).toString()
    turricoinsElem.innerHTML = turricoins
    localStorage.setItem("turricoins", turricoins);
}
