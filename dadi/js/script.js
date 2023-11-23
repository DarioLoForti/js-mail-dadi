// 1 - creo variabile che vada ad estrarre un numero random da 1 a 6 per il giocatore

let random_user = Math.random();
console.log(random_user);
let number_user = Math.floor(random_user * 6) + 1;
console.log(number_user);


let user = number_user;

// 2 - creo variabile che vada ad estrarre un numero random da 1 a 6 per il Pc

let random_pc = Math.random();
console.log(random_pc);
let number_pc = Math.floor(random_pc * 6) + 1;
console.log(number_pc);

let pc = number_pc;

// 3 - verifico il vincitore tramite confronto dei risultati delle variabili precendenti

if(user > pc){
    console.log("user win")
}
else{
    console.log("pc win")
}