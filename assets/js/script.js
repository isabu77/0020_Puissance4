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
            texte += '<td onclick="detectClick(' + j + ')" id="' + i + '-' + j + '">';
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
    document.getElementById('puissance4').innerHTML = texte;
}

function detectClick(j){
	if(verifPosition(j) && jeu){
		var ligneEnCours = poseJeton(j); /* numero de la ligne en cours */
		var verifEnd = puissanceQuatre(ligneEnCours, j, 0, 0);
		if(verifEnd){
			jeu = false;
			afficheTextAnnonce("Le joueur " + nomDuJoueur(joueur) + " a gagné la partie.");
		}else{
			if (joueur == 1){
				joueur = 2;
			}else{
				joueur = 1;
			}
			afficheTextAnnonce("c'est au tour du joueur " + nomDuJoueur(joueur));
		}
	}
}

function verifPosition(j){
	if(plateau[0][j] == 0){
		return true;
	}
	else{
		return false;
	}
}

/* no de la ligne disponible où le jeton peut etre posé */
function poseJeton(j){
	for (var i = nbLignes-1; i >= 0; i--) {
		if(plateau[i][j] == 0){
			plateau[i][j] = joueur;
			refreshTableau(i, j, joueur);
			return (i);
		}
	}
}

function refreshTableau(x, y, i){
	document.getElementById(x + '-' + y).innerHTML = "<div class='joueur" + i + "'></div>";

}

function puissanceQuatre(curLigne, curCol, l, c){
	console.log("valeur : " + curLigne + " " + curCol + " / increment " + l + " " + c);
	return false;
}