// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


var parola = prompt("Inserisci la parola");  

//  funzione 
function palindroma(parola){
	for(let i = 0; i < parola.length / 2; i++){
		if(parola[i] !== parola[parola.length - i - 1]){
			return false;
		}
	}
	return true;
}

if(palindroma(parola)){
	console.log(parola + " è una parola palindroma.");
} else {
	console.log(parola + " non è una parola palindroma.");
}