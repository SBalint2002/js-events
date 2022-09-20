//kattintás
function gombKatt(){
    window.alert("Katt");
}

function folevittuk(){
    window.alert("Fölévitte");
}

document.getElementById('fogomb').addEventListener('pointerenter', folevittuk);
document.getElementById('fogomb').addEventListener('click', gombKatt);


//Billentyűzet

function billentyuzet(){
    window.alert("Gépeltünk");
}

//document.getElementById('username').addEventListener('keyup', billentyuzet);

//change
//input

function userChange(e){
    //let ujErtek = document.getElementById('username').value;
    let ujErtek = e.currentTarget.value;
    console.log("Megváltozott",ujErtek);
}
document.getElementById('username').addEventListener('change', userChange);

