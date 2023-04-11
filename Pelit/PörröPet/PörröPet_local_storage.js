
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

export function decreaseTurricoins(amount) {
    turricoins = (parseInt(turricoins)-amount).toString()
    turricoinsElem.innerHTML = turricoins
    localStorage.setItem("turricoins", turricoins);
}

// PET INFORMATON BARS -- - - - - -- - - - -- - - -- - -  - 

export function getMoodBar() {
    var moodbar = localStorage.getItem("moodbar")
    if (moodbar === null) {
        moodbar = 0
    }
    return parseInt(moodbar)
}

export function setMoodBar(amount) {
    localStorage.setItem("moodbar", amount)
}





