
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"


const petElem = document.querySelector("[data-pet]")
const turricoinElem = document.querySelector("[data-turricoin]")
var turriCoins = 0

petElem.addEventListener("mouseover", pet_click)

function pet_click() {
    turriCoins += 1
    turricoinElem.innerHTML = turriCoins
}


