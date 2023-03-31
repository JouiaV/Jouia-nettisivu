



var high_score = localStorage.getItem("high-score");

if (high_score === null) {
    console.log("ei oo high-scorea")
    high_score = 0
    localStorage.setItem("high-score", 0);
} 
const highScoreElem = document.querySelector("[data-high-score]")
highScoreElem.innerHTML = high_score

export function manageNewScore(score) {
    if (score > high_score) {
        console.log("uus high-score")
        console.log(score)
        console.log(high_score)
        localStorage.setItem("high-score", score);
        highScoreElem.innerHTML = score
    }
}

