
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"
import { addTurricoins, decreaseTurricoins, saveMoodBarLastTime } from "./PörröPet_local_storage.js"
import { addToMoodbar, updateMoodbarAmount, updateMoodBarLastTime } from "./information-bars.js"

const petElem = document.querySelector("[data-pet]")
const turricoinElem = document.querySelector("[data-turricoin]")
var turriCoins = 0

petElem.addEventListener("mouseover", pet_click)

updateMoodbarAmount()

var umblt
function pet_click() {
    addToMoodbar(2)
    updateMoodBarLastTime()
}



