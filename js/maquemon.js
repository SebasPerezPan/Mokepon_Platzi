let attackJ = "" 
let attackEn = ""
let ownLifes = 3
let enemLifes = 3
let result = ""


function inicio () {
    let sectionatack = document.getElementById("select_attack")
    sectionatack.style.display = "none"

    let buttonSJ = document.getElementById("button_s")
    buttonSJ.addEventListener("click", selectPJ)    

    let buttonF = document.getElementById ("button_f")
    buttonF.addEventListener("click", attackFire)
    let buttonW = document.getElementById ("button_w")
    buttonW.addEventListener("click", attackWater)
    let buttonP = document.getElementById ("button_p")
    buttonP.addEventListener("click", attackPlant)
    let buttonR = document.getElementById("button_r")
    buttonR.addEventListener("click", restart)
    buttonR.disabled = true
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
    }
    
    selectEP ()
   

}

function selectEP () {
    let PetSelEn = document.getElementById("pet-e")
    let aleatorySelect = aleatorio(6,1)
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
    let ownlf = document.getElementById("olife")
    let elf = document.getElementById("elife")


    if(attackJ == attackEn) {
        result = "Tie"
    }
    else if(attackJ == "FIRE" && attackEn == "PLANT") {
        result = "Win"
        enemLifes--
        elf.innerHTML = enemLifes


    }
    else if(attackJ == "WATER" && attackEn == "FIRE") {
        result = "Win"
        enemLifes--
        elf.innerHTML = enemLifes
    }
    else if(attackJ == "PLANT" && attackEn == "WATER") {
        result = "Win"
        enemLifes--
        elf.innerHTML = enemLifes
        
    }
    else {
        result = "Lose"
        ownLifes--
        ownlf.innerHTML = ownLifes
    }

    revisarVidas ()

}

function revisarVidas () {
    if (ownLifes == 0) {
        lastMessage("U Lose. Unu")
        
    }

    else if (enemLifes == 0)  {
        lastMessage("U Win. :3")
    }

    messageCreation ()


}


function messageCreation () {
    let parag = document.createElement("p")
    let addits = document.getElementById("alerts")
    addits.appendChild(parag)
    parag.innerHTML = "Your Pet Attack with "+ attackJ + ", Enemies Pet attack with " + attackEn + ", You " + result + "."
}
function lastMessage (FinalResult) {
    let pinoccio = document.createElement("p")
    let finalstr = document.getElementById("final")
    finalstr.appendChild(pinoccio)
    pinoccio.innerHTML = FinalResult

    let buttonF = document.getElementById ("button_f")
    buttonF.disabled = true
    let buttonW = document.getElementById ("button_w")
    buttonW.disabled = true
    let buttonP = document.getElementById ("button_p")
    buttonP.disabled = true
    let buttonR = document.getElementById("button_r")
    buttonR.disabled = false
}

function restart (){
    location.reload()

}
window.addEventListener("load", inicio)



