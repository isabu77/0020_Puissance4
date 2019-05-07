var joueur = 1;
var nbColonnes = 5;
var nbLignes = 5;
var jeu = true;
var texte = "";
var plateau = [];

for (var i = 0; i < nbLignes; i++) {
	plateau[i] = [];
}

function newGame(){
	for (var i = 0; i < nbLignes; i++) {
		for (var j = 0; j < nbColonnes; j++) {
			plateau[i][j] = 0;
		}
	}
	console.log(plateau);
	joueur = 1;
	afficheTextAnnonce("Le jeu commence ! c'est au tour du joueur " + nomDuJoueur(joueur));
	jeu = true;
	creerTableau();
	return;

}

function afficheTextAnnonce(texte = "test"){
	
	document.getElementById("textAnnonce").innerHTML = texte;
	return;
}

function nomDuJoueur(numJoueur){
	if (numJoueur == 1){
		return ("rouge");
	}else{
		return("bleu");
	}
}

function creerTableau(){

}