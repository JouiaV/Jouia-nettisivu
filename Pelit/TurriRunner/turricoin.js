
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"
import { addTurricoins } from "./turriRunner_local_storage.js"

const SPEED = .05
const TURRICOINOBJECT_INTERVAL_MIN = 800
const TURRICOINOBJECT_INTERVAL_MAX = 1600
const worldElem = document.querySelector("[data-world]")
var turricoinObject_query = document.querySelectorAll("[data-turricoinObject]")

let nextTurricoinObjectTime
export function setupTurricoinObject(speedScale) {
    nextTurricoinObjectTime = randomNumberBetween(TURRICOINOBJECT_INTERVAL_MIN, TURRICOINOBJECT_INTERVAL_MAX) / speedScale
    turricoinObject_query.forEach(turricoinObject => {
        turricoinObject.remove()
    })
}

export function updateTurricoinObject(delta, speedScale, turriRect) {
    turricoinObject_query.forEach(turricoinObject => {
        incrementCustomProperty(turricoinObject, "--left", delta * speedScale * SPEED * -1)
        if (getCustomProperty(turricoinObject, "--left") <= -100) {
            turricoinObject.remove()
            update_turricoinObject_query()
        }
        else if (isCollision(turricoinObject.getBoundingClientRect(), turriRect)) {
            turricoinObject.remove()
            addTurricoins(1)
            update_turricoinObject_query()
        }
    })

    if (nextTurricoinObjectTime <= 0) {
        createTurricoinObject() 
        nextTurricoinObjectTime = randomNumberBetween(TURRICOINOBJECT_INTERVAL_MIN, TURRICOINOBJECT_INTERVAL_MAX) / speedScale
    }
    nextTurricoinObjectTime -= delta
}

export function getTurricoinObjectRects() {
    return [...turricoinObject_query].map(turricoinObject => {
        return turricoinObject.getBoundingClientRect()
    })
}


function createTurricoinObject() {
    const turricoinObject = document.createElement("img")
    turricoinObject.dataset.turricoinobject = true
    turricoinObject.src = "images/turricoin.png"
    turricoinObject.classList.add("turricoinObject")
    setCustomProperty(turricoinObject, "--left", 100)
    worldElem.append(turricoinObject)
    update_turricoinObject_query()
}


function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function isCollision(rect1, rect2) {
    return rect1.left < rect2.right && rect1.top < rect2.bottom && rect1.right > rect2.left && rect1.bottom > rect2.top
}

export function removeTurricoinObjects() {
    turricoinObject_query.forEach(turricoinObject => {
        turricoinObject.remove()
    })
}

function update_turricoinObject_query() {
    turricoinObject_query = document.querySelectorAll("[data-turricoinObject]")
}

