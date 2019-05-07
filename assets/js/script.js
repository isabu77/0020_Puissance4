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
}

function afficheTextAnnonce(texte){
	document.getElementById("textAnnonce").innerHTML = texte;
}

function nomDuJoueur(numJoueur){
	if (numJoueur == 1){
		return ("rouge");
	}else{
		return("bleu");
	}
}


function creerTableau(){
    texte = '<table>';
    for (i = 0; i < nbLignes; i++) {
        texte += '<tr>';
        for (j = 0; j < nbColonnes; j++) {
            texte += '<td onclick="detecteClick('+j+')" id="'+i+'-'+j+'">';
            if(plateau[i][j] == 1){
                texte += '<div class="joueur1">';
            }else if(plateau[i][j] == 2){
                texte += '<div class="joueur2">';
            }
            texte += '</td>';
        }
        texte += '</tr>';
    }
    texte += '</table>';
    tableau = document.getElementById('puissance4');
    tableau.innerHTML = texte;
}