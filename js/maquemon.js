let attackJ = "" 
let attackEn = ""
let ownLifes = 3
let enemLifes = 3
let result = ""


function inicio () {
    

    let buttonSJ = document.getElementById("button_s")
    buttonSJ.addEventListener("click", selectPJ)    
    let sectionatack = document.getElementById("select_attack")
    sectionatack.style.display = "none"
    let sectrestart = document.getElementById("restart")
    sectrestart.style.display = "none"
    let buttonF = document.getElementById ("button_f")
    buttonF.addEventListener("click", attackFire)
    let buttonW = document.getElementById ("button_w")
    buttonW.addEventListener("click", attackWater)
    let buttonP = document.getElementById ("button_p")
    buttonP.addEventListener("click", attackPlant)
    let buttonR = document.getElementById("button_r")
    buttonR.addEventListener("click", restart)
    buttonR.disabled = true
    let petSelFn = document.getElementById("Petselectionf")
    petSelFn.style.display ="none" 
    let textboxf = document.getElementById("hey")
    textboxf.style.display = "none"
    let historial = document.getElementById("histGame")
    historial.style.display="none"
    let sectiontwo =document.getElementById("secScrPZ")
    sectiontwo.style.display="none"
}
function aleatorio (max,min){
return Math.floor(Math.random()*(max-min+1)+1)}

function selectPJ() {

    //Variables
    let inputMacadamio = document.getElementById("Macadamio")
    let inputManchega = document.getElementById("Manchega")
    let inputAndamio = document.getElementById("Andamio")
    let inputPino = document.getElementById("Pino")
    let inputPavaratta = document.getElementById("Pavaratta")
    let inputGia = document.getElementById("Gia")
    let petSelJ = document.getElementById("pet-j")
    let sectionatack = document.getElementById("select_attack")
    sectionatack.style.display = "flex"

    //Condiciones
    if(inputMacadamio.checked) {       
        petSelJ.innerHTML = " Macadamio" 
    }

    else if (inputManchega.checked) {
        petSelJ.innerHTML = " Manchega" 
    }

    else if (inputAndamio.checked) {
        petSelJ.innerHTML = " Andamio" 
    }

    else if (inputPino.checked) {
        petSelJ.innerHTML = " Pino" 
    }

    else if (inputPavaratta.checked) {
        petSelJ.innerHTML = " Pavaratta" 
    }

    else if (inputGia.checked) {
        petSelJ.innerHTML = " Gia" 
    }
    
    else {
        alert("Please, choose a Pet!")
        sectionatack.style.display = "none"
        return
    }

    selectEP ()
    let petSelFn = document.getElementById("Petselectionf")
    petSelFn.style.display ="flex" 
    let sectiontwo =document.getElementById("secScrPZ")
    sectiontwo.style.display="grid"

}

function selectEP () {
    let PetSelEn = document.getElementById("pet-e")
    let aleatorySelect = aleatorio(6,1)
    let sectionper = document.getElementById("select_pet")
    sectionper.style.display = ("none")


    if (aleatorySelect == 1) {
        PetSelEn.innerHTML = " Macadamio"
        
    }

    else if (aleatorySelect == 2) {
        PetSelEn.innerHTML = " Manchega"
    }

    else if (aleatorySelect == 3) {
        PetSelEn.innerHTML = " Andamio"
    }

    else if (aleatorySelect == 4) {
        PetSelEn.innerHTML = " Pino"
    }
    else if (aleatorySelect == 5) {
        PetSelEn.innerHTML = " Pavaratta"
    }
    else if (aleatorySelect == 6) {
        PetSelEn.innerHTML = " Gia"
    }
    else {PetSelEn.innerHTML = "He's waiting for you"}
    

}

function attackFire() {
    
    attackJ = "FIRE"
    EnemAttack ()

}
function attackWater() {
    attackJ = "WATER"
    EnemAttack ()

}
function attackPlant() {
    attackJ = "PLANT"
    EnemAttack ()

}

function EnemAttack () {
    let textboxf = document.getElementById("hey")
    textboxf.style.display = "flex"
    let historial = document.getElementById("histGame")
    historial.style.display="flex"


    aleatoryAttack = aleatorio(3,1)
    if (aleatoryAttack == 1) {
        attackEn = "FIRE"
    }
    else if (aleatoryAttack == 2) {
        attackEn = "WATER"


    }
    else if (aleatoryAttack == 3) {
        attackEn = "PLANT"

    }
    

    combat ()

}
function combat () {  

    let spOwnLf = document.getElementById("oLife")
    let spEnmLf = document.getElementById("eLife")
    
    if(attackJ == attackEn) {
        batMess = "TIE"
    }
    else if(attackJ == "FIRE" && attackEn == "PLANT") {
        batMess = "WIN"
        enemLifes--
        spEnmLf.innerHTML=enemLifes
    }
    else if(attackJ == "PLANT" && attackEn == "WATER") {
        batMess = "WIN"
        enemLifes--
        spEnmLf.innerHTML=enemLifes
    }
    else if(attackJ == "WATER" && attackEn == "FIRE") {
        batMess = "WIN"
        enemLifes--
        spEnmLf.innerHTML=enemLifes
    }
    else {
        batMess = "LOSE"
        ownLifes--
        spOwnLf.innerHTML=ownLifes
    }

    checkLifes ()

}

function checkLifes () {
    if (ownLifes == 0) {
        lastMessage("LOSE")

    }

    else if (enemLifes == 0)  {
        lastMessage("WIN")
    }

    messageCreation ()

}


function messageCreation () {
    //let parag = document.createElement("p")
    let messageSect = document.getElementById("result")
    let ownAtMess = document.getElementById("ownattaq")
    let enmAtMess = document.getElementById("enmattaq")
    let nOAttaq = document.createElement('p')
    let nEAttaq = document.createElement('p')
    
    messageSect.innerHTML = batMess
    nOAttaq.innerHTML = attackJ
    nEAttaq.innerHTML = attackEn

    ownAtMess.appendChild(nOAttaq)
    enmAtMess.appendChild(nEAttaq)

    //parag.innerHTML = "Your Pet Attack with "+ attackJ + ", Enemies Pet attack with " + attackEn + ", You " + result + "."
}
function lastMessage (FinalResult) {
    let pinoccio = document.createElement("p")
    let finalStr = document.getElementById("lstMess")
    finalStr.appendChild(pinoccio)
    pinoccio.innerHTML = FinalResult
    let sectrestart = document.getElementById("restart")
    sectrestart.style.display = "block"

    let buttonF = document.getElementById ("button_f")
    buttonF.disabled = true
    let buttonW = document.getElementById ("button_w")
    buttonW.disabled = true
    let buttonP = document.getElementById ("button_p")
    buttonP.disabled = true
    let buttonR = document.getElementById("button_r")
    buttonR.disabled = false
    let batMess = document.getElementById("result")
    batMess.style.display = "none"
}

function restart (){
    location.reload()

}
window.addEventListener("load", inicio)



