
const h2_tulos = document.querySelector(".h2-tulos")
const p_tulos = document.querySelector(".p-tulos")
const p_error_msg = document.querySelector(".error-msg")

const p_f5 = document.querySelector(".f5-vastaus")
const p_f12 = document.querySelector(".f12-vastaus")

function submit() {

    const form1 = [
        document.getElementById("f1-rd1"),
        document.getElementById("f1-rd2"),
        document.getElementById("f1-rd3"),
        document.getElementById("f1-rd4")
    ]
    const form2 = [
        document.getElementById("f2-rd1"),
        document.getElementById("f2-rd2"),
        document.getElementById("f2-rd3"),
        document.getElementById("f2-rd4")
    ]
    const form3 = [
        document.getElementById("f3-rd1"),
        document.getElementById("f3-rd2"),
        document.getElementById("f3-rd3"),
        document.getElementById("f3-rd4"),
        document.getElementById("f3-rd5")
    ]
    const form4 = [
        document.getElementById("f4-rd1"),
        document.getElementById("f4-rd2"),
        document.getElementById("f4-rd3"),
        document.getElementById("f4-rd4"),
        document.getElementById("f4-rd5")
    ]
    const form5 = [
        document.getElementById("f5-rd1"),
        document.getElementById("f5-rd2"),
        document.getElementById("f5-rd3"),
        document.getElementById("f5-rd4")
    ]
    const form6 = [
        document.getElementById("f6-rd1"),
        document.getElementById("f6-rd2"),
        document.getElementById("f6-rd3"),
        document.getElementById("f6-rd4"),
        document.getElementById("f6-rd5")
    ]
    const form7 = [
        document.getElementById("f7-rd1"),
        document.getElementById("f7-rd2"),
        document.getElementById("f7-rd3"),
        document.getElementById("f7-rd4"),
        document.getElementById("f7-rd5")
    ]
    const form8 = [
        document.getElementById("f8-rd1"),
        document.getElementById("f8-rd2"),
        document.getElementById("f8-rd3"),
        document.getElementById("f8-rd4")
    ]
    const form9 = [
        document.getElementById("f9-rd1"),
        document.getElementById("f9-rd2"),
        document.getElementById("f9-rd3"),
        document.getElementById("f9-rd4")
    ]
    const form10 = [
        document.getElementById("f10-rd1"),
        document.getElementById("f10-rd2"),
        document.getElementById("f10-rd3"),
        document.getElementById("f10-rd4")
    ]
    const form11 = [
        document.getElementById("f11-rd1"),
        document.getElementById("f11-rd2"),
        document.getElementById("f11-rd3"),
        document.getElementById("f11-rd4"),
        document.getElementById("f11-rd5")
    ]
    const form12 = [
        document.getElementById("f12-rd1"),
        document.getElementById("f12-rd2"),
        document.getElementById("f12-rd3"),
        document.getElementById("f12-rd4"),
        document.getElementById("f12-rd5")
    ]


    const forms = [form1, form2, form3, form4, form5, form6, form7, form8, form9, form10, form11, form12]
    let valittu = false
    let valittu_rd = null
    let positiivisuus = 0

    for (f in forms) {
        valittu = false

        for (rd in forms[f]) {
            if (forms[f][rd].checked) {
                valittu = true
                valittu_rd = rd
                break
            }
        }
        if (valittu === false) {
            break
        }
        else {
            if (forms[f] === form1) {
                if (valittu_rd === "0") {positiivisuus += 0}
                if (valittu_rd === "1") {positiivisuus += 100}    
                if (valittu_rd === "2") {positiivisuus += 10}    
                if (valittu_rd === "3") {positiivisuus -= 30}
            }
            else if (forms[f] === form2) {
                if (valittu_rd === "0") {positiivisuus += 50}
                if (valittu_rd === "1") {positiivisuus += 0}    
                if (valittu_rd === "2") {positiivisuus += 100}    
                if (valittu_rd === "3") {positiivisuus -= 50}
            }
            else if (forms[f] === form3) {
                if (valittu_rd === "0") {positiivisuus += 100}
                if (valittu_rd === "1") {positiivisuus += 50}    
                if (valittu_rd === "2") {positiivisuus += 10}    
                if (valittu_rd === "3") {positiivisuus += 0}
                if (valittu_rd === "4") {positiivisuus -= 10}
            }
            else if (forms[f] === form4) {
                if (valittu_rd === "0") {positiivisuus += 10}
                if (valittu_rd === "1") {positiivisuus += 10}    
                if (valittu_rd === "2") {positiivisuus += 50}    
                if (valittu_rd === "3") {positiivisuus += 50}
                if (valittu_rd === "4") {positiivisuus += 100}
            }
            else if (forms[f] === form5) {
                if (valittu_rd === "0") {positiivisuus += 100}
                if (valittu_rd === "1") {positiivisuus += 30}    
                if (valittu_rd === "2") {positiivisuus += 70}    
                if (valittu_rd === "3") {positiivisuus += 10}
            }
            else if (forms[f] === form6) {
                if (valittu_rd === "0") {positiivisuus += 0}
                if (valittu_rd === "1") {positiivisuus += 10}    
                if (valittu_rd === "2") {positiivisuus -= 10}    
                if (valittu_rd === "3") {positiivisuus += 40}
                if (valittu_rd === "4") {positiivisuus += 60}
            }
            else if (forms[f] === form7) {
                if (valittu_rd === "0") {positiivisuus += 100}
                if (valittu_rd === "1") {positiivisuus += 50}    
                if (valittu_rd === "2") {positiivisuus += 0}    
                if (valittu_rd === "3") {positiivisuus -= 50}
                if (valittu_rd === "4") {positiivisuus -= 100}
            }
            else if (forms[f] === form8) {
                if (valittu_rd === "0") {positiivisuus += 100}
                if (valittu_rd === "1") {positiivisuus += 50}    
                if (valittu_rd === "2") {positiivisuus += 50}    
                if (valittu_rd === "3") {positiivisuus += 50}
            }
            else if (forms[f] === form9) {
                if (valittu_rd === "0") {positiivisuus += 0}
                if (valittu_rd === "1") {positiivisuus += 10}    
                if (valittu_rd === "2") {positiivisuus += 10}    
                if (valittu_rd === "3") {positiivisuus += 40}
            }
            else if (forms[f] === form10) {
                if (valittu_rd === "0") {positiivisuus += 40}
                if (valittu_rd === "1") {positiivisuus += 40}    
                if (valittu_rd === "2") {positiivisuus += 40}    
                if (valittu_rd === "3") {positiivisuus += 40}
            }
            else if (forms[f] === form11) {
                if (valittu_rd === "0") {positiivisuus += 100}
                if (valittu_rd === "1") {positiivisuus += 50}    
                if (valittu_rd === "2") {positiivisuus += 0}    
                if (valittu_rd === "3") {positiivisuus -= 30}
                if (valittu_rd === "4") {positiivisuus -= 60}
            }
            else if (forms[f] === form12) {
                if (valittu_rd === "0") {positiivisuus -= 50}
                if (valittu_rd === "1") {positiivisuus += 20}    
                if (valittu_rd === "2") {positiivisuus += 100}    
                if (valittu_rd === "3") {positiivisuus += 0}
                if (valittu_rd === "4") {positiivisuus += 80}
            }
        }
    }
    if (valittu === false) {
        p_error_msg.innerHTML = "Et ole täyttänyt koko testiä vielä."
        setTimeout(function() {
            p_error_msg.innerHTML = ""
          }, 4000);
    }
    else {
        p_error_msg.innerHTML = ""
        p_tulos.innerHTML = ""
        h2_tulos.innerHTML = "Karvakamut analysoivat vastauksiasi, odota hetki..."

        setTimeout(function() {

            if (positiivisuus <= 200) {
                h2_tulos.innerHTML = "Olet Likainen kissa!"
                p_tulos.innerHTML = "Likainen kissa on huonon peroonallisuus, tämä tarkoittaa sitä, että sinua on vaikea edes luetella karvakamujen joukkoon, mutta ikävä kyllä olet kuitenkin osa karvoja. Kissat ovat syystäkin alamaisia."
            }
            else if (positiivisuus <= 400) {
                h2_tulos.innerHTML = "Olet Limainen kilpikonna!"
                p_tulos.innerHTML = "Limainen kilpikonna on ainkin parempi kuin likainen kissa, mutta todella hidas. Tällä persoonalla voi olla vaikeuksia sosiaalisissa tilanteissa, mutta se on ihan okei."
            }
            else if (positiivisuus <= 600) {
                h2_tulos.innerHTML = "Olet Taitava koira, WUH! WUH!"
                p_tulos.innerHTML = "Olet vanha taituri, jolla on hallussa karvakamujen kemia, mutta on parempiakin persoonia, esim. teräväpää. Taitava koira on kuitenkin persoona, joka on aina apuun ja sosiaalisissa tilanteissa pysyy järkevällä tasolla."
            }
            else if (positiivisuus <= 750) {
                h2_tulos.innerHTML = "Olet Teräväpää!"
                p_tulos.innerHTML = "Teräväpää on yksi pörröisimmistä karvakamuista. Ainoa, joka on tämän yläpuolella olisi Aito teräväkamu. Terävä pää on henkilö, joka on kaikkien kamu ja antaa lämpimiä haleja."
            }
            else {
                h2_tulos.innerHTML = "Olet Aito terävä Karvakamu!"
                p_tulos.innerHTML = "Tämä persoona on ihan huippu! Hyvä esimerkki aidosta teräväpäisestä karvakamusta olisi tiksu, tämä persoona on penaalin terävin kynä ja aidoin karvakamu."
            }
            // p_tulos.innerHTML = positiivisuus

          }, 3500);
    }

}


function f5_rd1_click() {
    p_f5.innerHTML = "Kiitos valinnasta, piirsin ihan itse."
}
function f5_rd1_unselect() {
    p_f5.innerHTML = ""
}

function f12_rd5_click() {
    p_f12.innerHTML = "Ei ole ok."
}
function f12_rd5_unselect() {
    p_f12.innerHTML = ""
}
