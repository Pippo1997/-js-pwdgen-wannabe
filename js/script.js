//INSERIRE IL NOME
let nome = (prompt('inserisci il tuo nome'));

//INSERIRE IL COGNOME
let cognome = (prompt('inserisci il tuo cognome'));

//INSERIRE IL TUO COLORE PREFERITO
let colore = (prompt('inserisci il tuo colore preferito'));

//AGGIUNGO IL 21
let numero = 21;

//COCATENO LE VARIABILI
let psw = nome.concat(cognome,colore,numero);

//VISUALIZZO SCHERMO
document.getElementById('PSW').innerHTML = `La tua password è ${psw}`;
