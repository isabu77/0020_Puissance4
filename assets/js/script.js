var joueur = 1;
var nbColonnes = 5;
var nbLignes = 5;
var jeu = true;
var texte = "";
var plateau = [];  // ou new Array();
var score = 5;


newGame();

function newGame(){

	this.nbLignes = this.nbColonnes = prompt("Entrez la taille du plateau (nb de lignes et de colonnes) ?");
	this.score = prompt("Quel score faut-il atteindre pour gagner ?");
	console.log(score);
	if (parseInt(this.nbLignes) <= 0){
		this.nbLignes = this.nbColonnes = 5;
	}
	if (parseInt(this.nbLignes) > 100){
		this.nbLignes = this.nbColonnes = 100;
	}
	if (parseInt(this.score) <= 0){
		this.score = 4;
	}
	if (parseInt(this.score) > parseInt(this.nbLignes)){
		this.score = this.nbLignes;
	}
	document.getElementById("score").innerHTML = "Score à atteindre : " + this.score;

	for (var i = 0; i < this.nbLignes; i++) {
		this.plateau[i] = [];
	}
	// this : "celui du fichier", cad du contexte courant
	for (var i = 0; i < this.nbLignes; i++) {
		for (var j = 0; j < this.nbColonnes; j++) {
			this.plateau[i][j] = 0;
		}
	}
	this.joueur = 1;
	afficheTextAnnonce("Le jeu commence ! c'est au tour du joueur " + nomDuJoueur(this.joueur));
	this.jeu = true;
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
    this.texte = '<table>';
    for (i = 0; i < this.nbLignes; i++) {
        this.texte += '<tr>';
        for (j = 0; j < this.nbColonnes; j++) {
            this.texte += '<td onclick="detectClic(' + j + ')" id="' + i + '-' + j + '">';
            if(this.plateau[i][j] == 1){
                this.texte += '<div class="joueur1">';
            }else if(this.plateau[i][j] == 2){
                this.texte += '<div class="joueur2">';
            }
            this.texte += '</td>';
        }
        this.texte += '</tr>';
    }
    this.texte += '</table>';
    document.getElementById('puissance4').innerHTML = this.texte;
}

function detectClic(j){
	// s'il reste une case de libre dans la colonne et si e jeu est en cours
	if(verifPosition(j) && this.jeu){
		var ligneEnCours = poseJeton(j); /* numero de la ligne en cours */
		
		// la vérif si vainqueur
		var verifEnd = puissanceQuatre(ligneEnCours, j, 0, 0);

		if(verifEnd){
			this.jeu = false;
			afficheTextAnnonce("Le joueur " + nomDuJoueur(this.joueur) + " a gagné la partie.");
		}else{
			this.joueur == 1 ? this.joueur = 2 : this.joueur = 1;
/*			if (this.joueur == 1){
				this.joueur = 2;
			}else{
				this.joueur = 1;
			}
*/			
			afficheTextAnnonce("c'est au tour du joueur " + nomDuJoueur(this.joueur));
		}
	}
}

function verifPosition(j){
	if(this.plateau[0][j] == 0){
		return true;
	}
	else{
		return false;
	}
}

/* no de la ligne disponible où le jeton peut etre posé */
function poseJeton(j){
	for (var i = this.nbLignes-1; i >= 0; i--) {
		if(this.plateau[i][j] == 0){
			this.plateau[i][j] = this.joueur;
			refreshTableau(i, j, this.joueur);
			return (i);
		}
	}
}

function refreshTableau(x, y, i){
	document.getElementById(x + '-' + y).innerHTML = "<div class='joueur" + i + "'></div>";
}

function puissanceQuatre(lig, col, l, c){
	// condition primaire de la récursivité
	if (c == 0 && l == 0){
		//console.log("initial valeurs : " + lig + " " + col + " / Incrément " + l + " " + c);

		// ce 1er appel lance les appels récursifs
		// -1 pour decaler d'une colonne à gauche ou en haut (et ne pas revenir dans cette condition 0 0) 
		// 1 pour decaler d'une colonne à droite ou en bas (et ne pas revenir dans cette condition 0 0) 
		var va = 1 + puissanceQuatre(lig, col-1, 0, -1) + puissanceQuatre(lig, col+1, 0, 1); 
		
		// vertical
		var vb = 1 + puissanceQuatre(lig-1, col, -1, 0) + puissanceQuatre(lig+1, col, 1, 0);

		// diagonale qui descend vers la gauche
		var vc = 1 + puissanceQuatre(lig-1, col-1, -1, -1) + puissanceQuatre(lig+1, col+1, 1, 1);

		// diagonale qui descend vers la droite
		var vd = 1 + puissanceQuatre(lig-1, col+1, -1, 1) + puissanceQuatre(lig+1, col-1, 1, -1);

		//console.log(va,vb,vc,vd);
		if(va == score || vb == score || vc == score || vd == score){
			return true;
		}
		else{
			return false;
		}		
	}

	// condition terminale
	if (lig < this.nbLignes && lig >= 0 && col < this.nbColonnes && col >= 0){
		//console.log("récursive valeurs : " + lig + " " + col + " / Incrément " + l + " " + c);
		if (this.plateau[lig][col] == this.joueur){
			//console.log("ok");
			// boucle récursive avec le décalage d'entrée (-1 ou +1) pour voir les cases suivantes
			return 1 + puissanceQuatre(lig + l, col + c, l, c);
		}
		else{
			//console.log("pas ok");
			return 0;
		}
	}

	return 0;
}	



