

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


// MOODBAR AMOUNT -- - - - - -- - - - -- - - -- - -  - 
var moodbar
export function getMoodBar() {
    moodbar = localStorage.getItem("moodbar")
    if (moodbar === null || isNaN(moodbar) || moodbar === NaN) {
        moodbar = 0
    }
    return parseInt(moodbar)
}

export function saveMoodBar(amount) {
    localStorage.setItem("moodbar", amount.toString())
}


// MOODBAR LAST TIME TRIGGERED - - - - - - - - - - - - - - - - --  - - - - -- - - -

export function getMoodBarLastTime() {
    var moodbarlasttime = localStorage.getItem("moodbarlasttime")
    if (moodbarlasttime === null) {
        moodbarlasttime = 0
    }
    return moodbarlasttime
}

export function saveMoodBarLastTime(amount) {
    localStorage.setItem("moodbarlasttime", amount.toString())
}



