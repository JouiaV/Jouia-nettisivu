
import { getMoodBar, getMoodBarLastTime, saveMoodBar, saveMoodBarLastTime } from "./PörröPet_local_storage.js"
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const foodBarElem = document.querySelector("[data-foodbar]")
const healthBarElem = document.querySelector("[data-healthbar]")
const moodbarBarElem = document.querySelector("[data-moodbar]")

var moodbarLastTime = getMoodBarLastTime()

updateInformationBars()


export function addToMoodbar(amount) {
    var bar_prosent = getMoodBar() + amount
    if (0 < bar_prosent < 100) {
        setCustomProperty(moodbarBarElem, "--bar-prosent", bar_prosent)
    } else {
        setCustomProperty(moodbarBarElem, "--bar-prosent", -bar_prosent)
    }
    if (bar_prosent > 100) {
        setCustomProperty(moodbarBarElem, "--bar-prosent", 100)
    }
    else if (bar_prosent < 0) {
        setCustomProperty(moodbarBarElem, "--bar-prosent", 0)
    }
    saveMoodBar(getCustomProperty(moodbarBarElem, "--bar-prosent"))
}


export function setMoodBar(amount) {
    setCustomProperty(moodbarBarElem, "--bar-prosent", amount)
    saveMoodBar(amount)
}


export function updateMoodbarAmount() {
    setCustomProperty(moodbarBarElem, "--bar-prosent", getMoodBar())
}



export function updateInformationBars() {
    adjustMoodBarOnTime(moodbarLastTime)
    setTimeout(updateInformationBars, 1500);
}


function adjustMoodBarOnTime() {
    var deltaTime = Date.now() - moodbarLastTime
    console.log("Deltatime: "+deltaTime)
    if (deltaTime > 1000*60*60*2) {
        setMoodBar(0)
        return
    }
    var change = Math.floor(deltaTime / (1000*5))
    addToMoodbar(-change)
    console.log("Change: "+(-change))
    if (change !== 0) {
        moodbarLastTime = Date.now()
        saveMoodBarLastTime(moodbarLastTime)
    }
}


