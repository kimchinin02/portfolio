let sl
let sr

let stepbl = []
let stepbrdr = []

for (let i = 1; i <= 3; i++) {
    sl = document.getElementById("stepbl" + [i])
    sr = document.getElementById("stepbrdr" + [i])
    stepbl.push(sl)
    stepbrdr.push(sr)
}

for (let i = 0; i <= 3; i++) {
    stepbl[i].onmouseover = function() {
        stepbrdr[i].style.borderBottom = "3px solid white"
    }

    stepbl[i].onmouseout = function() {
        stepbrdr[i].style.borderBottom = "3px solid black"
    }
}