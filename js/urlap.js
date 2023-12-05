document.getElementById("nyaralas").addEventListener("submit",function(e){
  ell();
  e.preventDefault();
});
 

function ell() {
  
hiba=0;
// Neve
const name = document.getElementById("name").value;
if (name === "") {
    alert("Hiba: Üresen hagyott mező! Neve");
    hiba++;
}

// Email
const email = document.getElementById("email").value;
if (email === "") {
    alert("Hiba: Üresen hagyott mező! Email");
    hiba++;
}

// Telefonszám
const telefonszam = document.getElementById("tel").value;
if (telefonszam === "") {
    alert("Hiba: Üresen hagyott mező! Telefonszám");
    hiba++;
}

// Nyaralás időpontja
const honap = document.getElementById("month").value;
if (honap === "") {
    alert("Hiba: Üresen hagyott mező! Nyaralás időpontja");
    hiba++;
}

// Nyaralás típusa
let tipus;
if (type1.checked) {
    tipus = type1.value;
} else if (type2.checked) {
    tipus = type2.value;
} else {
    alert("Hiba: Üresen hagyott mező! Nyaralás típusa");
    hiba++;
}

// Környezet
const kornyezet = document.getElementById("kornyezet").value;
if (kornyezet === "Válassz") {
    alert("Hiba: Üresen hagyott mező! Környezet");
    hiba++;
}

// Aktivitások
let tipus2;
if (strandolas.checked) {
    tipus2 = "strandolas";
} else if (kemping.checked) {
    tipus2 = "kemping";
} else if(kerekpar.checked){
    tipus2="kerekparozas";
} else {
    alert("Hiba: Üresen hagyott mező! Válassz aktivitást");
    hiba++;
}




//utazási keret
const keret=document.getElementById("keret").value;

// fő
const foDb = document.getElementById("fo").value;
if (foDb === "") {
    alert("Hiba: Üresen hagyott mező! Hány fő?");
    hiba++;
}
if(foDb<1){
  alert("Hibás főszám!");
  hiba++;
}


  //konzol
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Telefonszám:", telefonszam);
  console.log("Nyaralás időpontja:", honap);
  console.log("Nyaralás típusa:", tipus);
  console.log("Környezet:", kornyezet);
  console.log("aktivitas:", tipus2);
  console.log("Utazási keret:",keret);
  console.log("Hány fő?:", foDb);





if (hiba==0){
  pontozas();
  }

//Pontozás
function pontozas(){

  //pontozási Lista
barcelona=0;
provence=0;
krako=0;
bled=0;
azori=0;
budapest=0;
prag=0;
santorini=0;
stockholm=0;
amalfi=0;

  if (tipus=="aktiv"){
    provence++;
    krako++;
    bled++;
    azori++;
    budapest++;
    prag++;
  }
  if (tipus=="pihi"){
    santorini++;
    prag++;
    amalfi++;
  }
  if (kornyezet=="varosi"){
    krako++;
    budapest++;
    barcelona++;
  }
  if (kornyezet=="tengerparti"){
    amalfi++;
    santorini++;
    azori++;
  }
  if (kornyezet=="mindketto"){
    stockholm++;
  }
  if (strandolas.checked){
    amalfi++;
    santorini++;
  }
  if (kemping.checked){
    bled++;
  }
  if (kerekpar.checked){
    barcelona++;
    provence++;
    amalfi++;
    bled++;
    azori++;
    budapest++;
    stockholm++;
  }
  if (keret<20000){
    budapest++;
  }
  else if(keret<25000){
    krako++;
  }
  else if(keret<30000){
    prag++;
  }
  else if(keret<50000){
    bled++;
  }
  else if(keret<60000){
    provence++;
  }
  else if(keret<70000){
    stockholm++;
  }
  else if(keret<80000){
    amalfi++;
  }
  else if(keret<120000){
    santorini++;
  }
  else if(keret<=150000){
    azori++;
  }

  const pontszamok = {
    barcelona,
    provence,
    krako,
    bled,
    azori,
    budapest,
    prag,
    santorini,
    stockholm,
    amalfi,
  };

let maxszam=0;
let maxhelyek=[];

  let legnagyobbHely = null;
  let legnagyobbErtek = -1;

  for (const hely in pontszamok) {
    const ertek = pontszamok[hely];
    if (ertek > legnagyobbErtek) {
      legnagyobbErtek = ertek;
      legnagyobbHely = hely;
    }
  }

  if (legnagyobbHely !== null) {
    alert(`A legnagyobb értékű hely: ${legnagyobbHely}`);
  } else {
    alert("Nincs érték megadva");
  }
  //pontszamok
  console.log("barcelona",barcelona)
  console.log("provence",provence)
  console.log("krako",krako)
  console.log("bled",bled)
  console.log("azori",azori)
  console.log("budapest",budapest)
  console.log("prag",prag)
  console.log("santorini",santorini)
  console.log("stockholm",stockholm)
  console.log("amalfi",amalfi)
}

}
//sajat validacio hozzaadasa notequal néven
$.validator.addMethod("notEqual", function (ertek, krit) {
  return ertek !== krit;
},);
//ellenorzi hogy a value-ként megadott ertek nem egyenlo e a paramterkent megadott krit-el


$(document).ready(function () {
  $("#nyaralas").validate({
    rules: {
      nev: {
        required: true,
      },
      telefonszam: {
        required: true,
      },
      honap: {
        required: true,
      },
      emailcim: {
        required: true,
        email: true,
      },
      tipus: {
        required: true,
      },
      fok: {
        required:true,
        min:1,
        digits:true,
      },
      akti: {
        required:true,
        minlength:1,
      },
      kornyi: {
        required: true,
        notEqual: "Válassz",
      },
    },
    messages: {
      nev: "Kötelező megadni a nevet!",
      telefonszam: "Kötelező megadni a telefonszámot!",
      honap: "Kötelező megadni a nyaralás időpontját!",
      emailcim: {
        required: "Kötelező megadni az e-mail címet!",
        email: "Érvénytelen e-mail cím!",
      },
      tipus: "Kötelező választani!",
      fok:{
        required:"Kötelező megadni a fők számát!",
        min:"A fők száma nem lehet egynél kisebb!",
        digits:"Számoknak kell szerepelnie!",
      },
      akti:"Kötelező választani!",
      kornyi: {
        required: "Kötelező választani környezetet!",
        notEqual:"Válassz valamit!"
      },

    },
  });
});
