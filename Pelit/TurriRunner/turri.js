import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const turriElem = document.querySelector("[data-turri]")
const JUMP_SPEED = 0.58
const GRAVITY = 0.0015
const TURRI_FRAME_COUNT = 4
const FRAME_TIME = 100


let isJumping
let turriFrame
let currentFrameTime
let yVelocity
export function setupTurri() {
    isJumping = false
    turriFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(turriElem, "--bottom", 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)

}

export function updateTurri(delta, speedScale) {
    handleRun(delta, speedScale)
    handleJump(delta)
} 

export function getTurriRect() {
    return turriElem.getBoundingClientRect()
}

export function setTurriLose() {
    turriElem.src = "images/turriRunner_turri_lose.png"
}

function handleRun(delta, speedScale) {
    if (isJumping) {
        turriElem.src = "images/turriRunner_turri_jump.png"
        return
    }

    if (currentFrameTime >= FRAME_TIME) {
        turriFrame = (turriFrame + 1) % TURRI_FRAME_COUNT
        turriElem.src = `images/turriRunner_turri_${turriFrame}.png` // `images/turriRunner_turri_${turriFrame}.png`
        currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta *speedScale
}

function handleJump(delta) {
    if (!isJumping) return

    incrementCustomProperty(turriElem, "--bottom", yVelocity * delta)
    
    if (getCustomProperty(turriElem, "--bottom") <= 0) {
        setCustomProperty(turriElem, "--bottom", 0)
        isJumping = false
    }

    yVelocity -= GRAVITY * delta
}

function onJump(e) {
    if (e.code !== "Space" || isJumping) return

    yVelocity = JUMP_SPEED
    isJumping = true
}



