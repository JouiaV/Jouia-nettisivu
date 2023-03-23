
var content = document.querySelector("content")

function unfadeContent() {
    console.log("unfade")
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
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
links = document.querySelectorAll("a.navbar")

for (i in links) {
    link = links[i]
    link.onmouseover = event => {
    let iterations = 0
    
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => { 
            if(index < iterations) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random()*26)]
        })
        .join("");
        if(iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
        } 
        if(Math.floor(Math.random()*10)<6) {
            iterations += 1;
        }
    }, 30);
    }
}
