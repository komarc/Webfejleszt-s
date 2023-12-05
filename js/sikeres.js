document.getElementById("sikeres").addEventListener("click",sikeres);

function sikeres(){
    const email=document.getElementById("email2");
    email.value="Sikeresen felirakoztál!";
    console.log(email);
}
