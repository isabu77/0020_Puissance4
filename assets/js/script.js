var joueur = 1;
var nbColonnes = 5;
var nbLignes = 5;
var jeu = true;
var texte = "";
var plateau = [];

for (var i = 0; i < nbLignes; i++) {
	plateau[i] = [];
}

newGame();
creerTableau();

function newGame(){
	for (var i = 0; i < nbLignes; i++) {
		for (var j = 0; j < nbColonnes; j++) {
			plateau[i][j] = 0;
		}
	}
	joueur = 1;
	afficheTextAnnonce("Le jeu commence ! c'est au tour du joueur " + nomDuJoueur(joueur));
	jeu = true;
	creerTableau();
	return;

}

function afficheTextAnnonce(texte){
	
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
	texte = '<tab>';
	for (var i = 0; i < nbLignes; i++) {
		texte += "<tr>";
		for (var j = 0; j < nbColonnes; j++) {
			texte += "<td onclick='detectClic(" + j + ")' id='" + i + "-" + j + "'" + ">";
			if(plateau[i][j] == 1){
				texte += "<div class='joueur1'></div>";
			}else
				if(plateau[i][j] == 2){
				texte += "<div class='joueur2'></div>";
			}
			texte += "</td>";
		}
		texte += "</tr>";
	}
	texte += "</tab>";
	console.log(texte);
	document.getElementById("puissance4").innerHTML = texte;

}