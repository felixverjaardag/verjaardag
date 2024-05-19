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
    if (password.value === "nigga"){
        alert("RWVMG-9M8J4-JD493\nGENIET VAN JE 20 EURO STEAM WALLET CASH NIGGA")
    } else {
        alert("PROBEER OPNIEUW HOMEBOY")
    }
}