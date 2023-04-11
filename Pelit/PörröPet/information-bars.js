
import { getMoodBar, setMoodBar } from "./PörröPet_local_storage.js"
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const foodBarElem = document.querySelector("[data-foodbar]")
const healthBarElem = document.querySelector("[data-healthbar]")
const moodbarBarElem = document.querySelector("[data-moodbar]")
// var moodbarAmount = getMoodBar()

export function addToMoodbar(amount) {
    if (parseInt(getCustomProperty(moodbarBarElem, "--bar-prosent")) >= 100) {
        incrementCustomProperty(moodbarBarElem, "--bar-prosent", -amount)
    } else {
        incrementCustomProperty(moodbarBarElem, "--bar-prosent", amount)
    }
    setMoodBar(getCustomProperty(moodbarBarElem, "--bar-prosent"))
}

export function updateMoodbarAmount() {
    setCustomProperty(moodbarBarElem, "--bar-prosent", getMoodBar())
}
