
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const SPEED = .05
const ESTE_INTERVAL_MIN = 800
const ESTE_INTERVAL_MAX = 2600
const worldElem = document.querySelector("[data-world]")

let nextEsteTime
export function setupEste(speedScale) {
    nextEsteTime = randomNumberBetween(ESTE_INTERVAL_MIN, ESTE_INTERVAL_MAX) / speedScale
    document.querySelectorAll("[data-este]").forEach(este => {
        este.remove()
    })
}

export function updateEste(delta, speedScale) {
    document.querySelectorAll("[data-este]").forEach(este => {
        incrementCustomProperty(este, "--left", delta * speedScale * SPEED * -1)
        if (getCustomProperty(este, "--left") <= -100) {
            este.remove()
        }

    })

    if (nextEsteTime <= 0) {
        createEste() 
        nextEsteTime = randomNumberBetween(ESTE_INTERVAL_MIN, ESTE_INTERVAL_MAX) / speedScale
    }
    nextEsteTime -= delta
}

export function getEsteRects() {
    return [...document.querySelectorAll("[data-este]")].map(este => {
        return este.getBoundingClientRect()
    })
}


function createEste() {
    const este = document.createElement("img")
    este.dataset.este = true
    este.src = "images/turriRunner_este_kissa.png"
    este.classList.add("este")
    setCustomProperty(este, "--left", 100)
    worldElem.append(este)
}


function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

