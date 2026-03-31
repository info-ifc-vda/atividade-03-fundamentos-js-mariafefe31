function testarHora(hora){
    if (hora >= 4 && hora < 12){
        console.log("Bom dia, Fábio!")
    } else if (hora >= 12 && hora < 19){
        console.log("Boa tarde, Fábio!")
    } else if (hora < 4 && hora >= 19 || hora < 24){
        console.log("Boa noite!, Fábio")
    }
}
testarHora(12);