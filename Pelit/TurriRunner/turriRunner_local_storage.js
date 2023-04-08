

var high_score = localStorage.getItem("high-score");

if (high_score === null) {
    console.log("ei oo")
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

