//INSERIRE IL NOME
let nome = parseInt(prompt('inserisci il tuo nome'));

//INSERIRE IL COGNOME
let cognome = parseInt(prompt('inserisci il tuo cognome'));

//INSERIRE IL TUO COLORE PREFERITO
let colore = parseInt(prompt('inserisci il tuo colore preferito'));

//AGGIUNGO IL 21
let numero = 21;

//COCATENO LE VARIABILI
let psw = nome.concat(cognome,colore,numero);

//VISUALIZZO SCHERMO
document.getElementById('PSW').innerHTML = `La tua password è ${psw}`;
