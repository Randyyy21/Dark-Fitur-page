// variabel semua mode
let body = document.body
let mode1 = document.getElementById('mode1')
let mode2 = document.getElementById('mode2')
let mode3 = document.getElementById('mode3')
let restart122 = document.getElementById('restart122')
let info1 = document.getElementById('info1')


const limitMode = 5;
let modeCounter = 0;
let warningMode;


function mode() {

    if (warningMode == 1) {
        info1.textContent = `batas habis `
        mode2.style.display = "none"
        restart122.textContent = 'Restart';
        console.log('habis')
        mode1.style.display = 'none'
        return;
    }

    mode2.style.display = "none"
    mode3.style.display = 'none'
    modeCounter += 1
    warningMode = limitMode - modeCounter
    let navbar = document.getElementById('navbar')


    info1.textContent = `berapa banyak di tekan ${modeCounter}, sisa limit ${warningMode}`
    console.log('berapa banyak di tekan', modeCounter)
    console.log('sisa limit', warningMode)
    body.classList.toggle("darkMode")
    navbar.classList.toggle("navbarDark")
    navbar.classList.toggle("dark")


    /*agar navbar tulisannya berganti*/
    if (body.classList.contains("darkMode")) {
        mode1.textContent = 'Mode Light';
    } else {
        mode1.textContent = 'Mode Dark';
    }

}


//mode skuy

const limitSkuy = 5;
let counterSkuy = 0;
let warningSkuy;

function modeSkuy() {
    if (warningSkuy == 1) {
        info1.textContent = `batas habis `
        mode1.style.display = "none"
        restart122.textContent = 'Restart';
        console.log('habis')
        mode2.style.display = 'none'
        mode3.style.display = 'none'
        return;
    }

    mode1.style.display = "none"
    mode3.style.display = 'none'
    counterSkuy += 1;
    warningSkuy = limitSkuy - counterSkuy
    let navbar = document.getElementById('navbar')


    info1.textContent = `berapa banyak di tekan ${counterSkuy}, sisa limit ${warningSkuy}`
    console.log('berapa banyak di tekan', counterSkuy)
    console.log('sisa limit', warningSkuy)
    body.classList.toggle("skuyMode")
    navbar.classList.toggle("navbarSkuy")
    navbar.classList.toggle("skuy")


    /*agar navbar tulisannya berganti*/
    if (body.classList.contains("skuyMode")) {
        mode2.textContent = 'Mode Skuy';
    } else {
        mode2.textContent = 'Mode Normal';
    }

}


// mode un


function modeGang() {

    if (mode3.Checked) {
        info1.textContent = `batas habis `
        mode2.style.display = "none"
        restart122.textContent = 'Restart';
        mode1.style.display = 'none'
        return;
    }
    mode1.style.display = 'none'
    mode2.style.display = "none"
    let navbar = document.getElementById('navbar')


    info1.textContent = `Mode dalam tahap pengembangan`
    body.classList.toggle("unMode")
    navbar.classList.toggle("navbarUn")
    navbar.classList.toggle("unlimited")


    /*agar navbar tulisannya berganti*/
    if (body.classList.contains("unMode")) {
        mode1.textContent = 'Free';
    } else {
        mode1.textContent = 'Mode Unlimited';
    }

}
function restart11() {
    location.reload()
}