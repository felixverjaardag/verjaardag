let password = document.getElementById("bestwordinput");
let submit = document.getElementById("sendbestword");

submit.onclick = () => {
    verify();
}

password.onkeydown = (e) => {
    if (e.key === "Enter"){
        verify();
    }
}

function verify(){
    if (password.value === "balls"){
        alert("te laaat")
    } else {
        alert("PROBEER OPNIEUW HOMEBOY")
    }
}