
import { setupGround, updateGround } from "./ground.js"
import { getTurriRect, setupTurri, updateTurri, setTurriLose } from "./turri.js"
import { getEsteRects, setupEste, updateEste } from "./este.js"
import { manageNewScore } from "./turriRunner_local_storage.js"


const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

const SPEED_SCALE_INCREASE = .00001

const worldElem = document.querySelector("[data-world]")
const scoreElem = document.querySelector("[data-score]")
const startScreenElem = document.querySelector("[data-start-screen]")

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)
document.addEventListener("keydown", handleStart, { once: true })
document.addEventListener("click", handleStart, { once: true })

setupGround()


let lastTime
let speedScale
let score
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    updateGround(delta, speedScale)
    updateSpeedScale(delta)
    updateScore(delta)
    updateTurri(delta, speedScale)
    updateEste(delta, speedScale)
    if (checkLose()) {
        return handleLose()
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

function checkLose() {
    const turriRect = getTurriRect()
    return getEsteRects().some(rect => isCollision(rect, turriRect))
}

function isCollision(rect1, rect2) {
    return rect1.left < rect2.right && rect1.top < rect2.bottom && rect1.right > rect2.left && rect1.bottom > rect2.top
}

function updateSpeedScale(delta) {
    speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta) {
    score += delta * 0.01
    scoreElem.textContent = Math.floor(score)
}


function handleStart() {
    document.removeEventListener("keydown", handleStart, {once: true})
    document.removeEventListener("click", handleStart, { once: true })
    lastTime = null
    speedScale = 1
    score = 0
    setupGround()
    setupTurri()
    setupEste()
    startScreenElem.classList.add("hide")
    window.requestAnimationFrame(update)
}


function handleLose() {
    manageNewScore(Math.floor(score))
    setTurriLose()
    setTimeout(() => {
        document.addEventListener("keydown", handleStart, {once: true})
        document.addEventListener("click", handleStart, { once: true })
        startScreenElem.classList.remove("hide")
        startScreenElem.innerHTML = "Paina Pörröisillä sormillasi näppäintä aloittaaksesi pelin uudelleen"
    }, 100)
}


function setPixelToWorldScale () {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}



