// var original_text = "";


// function scramble_text(text) {
//     var a = text.split(""),
//         n = a.length;

//     for(var i = n - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join("");
// }

// function a_navbar_hover_in(event) {
//     var a_navbar = event.target || event.srcElement;
//     original_text = a_navbar.text;
//     a_navbar.innerHTML = scramble_text(original_text);
// }

// function a_navbar_hover_out(event) {
//     var a_navbar = event.target || event.srcElement;
//     a_navbar.innerHTML = original_text;
// }

// const collection = document.getElementsByClassName("a navbar");
// for (let i = 0; i < collection.length; i++) {
//   collection[i].addEventListener("mouseover", a_navbar_hover_in);
//   collection[i].addEventListener("mouseout", a_navbar_hover_out);
// }


