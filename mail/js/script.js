// 1 - creao un arrey con diverse email di confronto

let emails = ["pippo@libero.it", "pluto@libero.it", "ciccio@libero.it", "franco@libero.it"];
console.log(emails);

// 2 - chiedo tramite promt all'utente di inserire la propria email

let my_email =prompt("Inserisci la tua email");


// 3 - confronto che l'email inserita nel promt sia presente tra quelle dell'arrey

let flag = false;

for(let i = 0; i<emails.length; i++){
    // console.log(emails[i])

    if(my_email === emails[i]){
        flag = true
    }
    
}
//  3.1 - ? presente stampo un messaggio approvazione

if(flag == true){
 
    console.log("accesso Consentito ");
}
//  3.2 - : stampo un messaggio di negazione

else{
    console.log("Accesso Negato ");
}