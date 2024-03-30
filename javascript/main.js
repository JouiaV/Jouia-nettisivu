
// CONTENT FADE IN
var content = document.querySelector("content")

function unfadeContent() {
    var op = 0.1;  // initial opacity
    content.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        content.style.opacity = op;
        content.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1; 
    }, 10);
}  


// Cool hover effect
const letters = "%#@€ABCDEFGHKMNOPQRSTUVWXYZ" // ABCDEFGHIJKLMNOPQRSTUVWXYZ
const letters_length = letters.length
links = document.querySelectorAll("a.navbar")
var delay = 30

for (i in links) {
    link = links[i]
    link.onmouseover = event => {
        let iterations = 0
        if (event.target.dataset.value.length <= 8) {
            delay = 40
        }
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => { 
                if(index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random()*letters_length)]
            })
            .join("");
            if(iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            } 

            
            iterations += 1;
            
        }, delay);
    }
}

// SHOW NAVABR ON TOP WHEN SCROLL UP
const navbar = document.getElementById("navbar")
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

// MAINOS
// if (sessionStorage.getItem("mainos_naytetty") === null) {
    // window.open("vaipo_mainos.html","_self")
// }

