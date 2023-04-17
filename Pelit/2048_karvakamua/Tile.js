export default class Tile {
    #tileElement
    #x
    #y
    #value
  
    constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
      this.#tileElement = document.createElement("div")
      this.#tileElement.classList.add("tile")
      tileContainer.append(this.#tileElement)
      this.value = value
    }
  
    get value() {
      return this.#value
    }
  
    set value(v) {
      this.#value = v
      this.#tileElement.textContent = v
      const power = Math.log2(v)
      const backgroundLightness = 100 - power * 9
      
      if (v === 2048) {
          alert("Ihanaa, oletpa taitava")
      } 

      if (v === 4) {
            this.#tileElement.style.setProperty(
            "--bg-src",
            "url(images/kaisa_3.png)"
            )
      }
      else if (v === 8) {
            this.#tileElement.style.setProperty(
            "--bg-src",
            "url(./images/olde_kuv_2048.jpg)" 
            )
      }
      else if (v === 16) {
        this.#tileElement.style.setProperty(
        "--bg-src",
        "url(./images/jousia_1.jpg)" 
        )
      }
      else if (v === 32) {
        this.#tileElement.style.setProperty(
        "--bg-src",
        "url(./images/fanni_1.jpg)" 
        )
      }
      else if (v === 64) {
        this.#tileElement.style.setProperty(
        "--bg-src",
        "url(./images/yhteiskuva_1.jpg)" 
        )
      }
  }
  
    set x(value) {
      this.#x = value
      this.#tileElement.style.setProperty("--x", value)
    }
  
    set y(value) {
      this.#y = value
      this.#tileElement.style.setProperty("--y", value)
    }
  
    remove() {
      this.#tileElement.remove()
    }
  
    waitForTransition(animation = false) {
      return new Promise(resolve => {
        this.#tileElement.addEventListener(
          animation ? "animationend" : "transitionend",
          resolve,
          {
            once: true,
          }
        )
      })
    }
  }
