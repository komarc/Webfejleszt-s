document.getElementById("sikeres").addEventListener("click",sikeres);

function sikeres(){
    const email=document.getElementById("email2");
    if (email.value.includes("@")){
        email.value="Sikeresen feliratkoztál!";
    }
    
    console.log(email);
}
