var totalSeconds; //Nombre total de secondes sur le minuteur
//var temps = prompt("Entrer le temps","")*60;
var temps = 0;
var count=0; // nbre de fois
var tempsId;

// juste pour l'alternance des  couleur sur les btns
var start = document.getElementById("start"); // btn start
var stop = document.getElementById("stop");   // btn stop 
var compteur = document.getElementById("count");  // btn count nbre de fois
 
function timer() { tempsId = setInterval("Chrono()", 1000); }
    
function StartTimer(){
  totalSeconds = temps; //Défini le nombre de secondes restantes
  timer();
  var seconds = totalSeconds % 60; //calculer les secondes restantes
  var secondsTens = Math.floor(seconds / 10);
  var secondsOnes = seconds % 10;
  var minutes = Math.floor(totalSeconds / 60);
  document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes; //montre minuterie  
 /* Gestion code couleur sur les btn  */
  start.style.background = "transparent";	
  start.style.color = "inherit";
  start.style.cursor = "not-allowed";
  stop.style.background = "red";  
  stop.style.color = "#f2f1f1";
  compteur.style.background = "transparent";	
  compteur.style.color = "transparent"; // compteur.style.color = "inherit";
  compteur.style.paddingTop = ".1em";
  compteur.style.paddingBottom = ".2em";
  /* Utiliser le btn start compter aussi le nb de chrono */
  count++;
  if( count <2  ){ compteur.innerHTML=count+ "<sup><small>&egrave;re</small></sup> fois"; }		
  if( count >=2 && count <21  ){ compteur.innerHTML=count+ "<sup><small>&egrave;me</small></sup> fois"; }
}

function Chrono(){
  if ( totalSeconds >= 0  ) // S'il reste du temps ...
  {
    totalSeconds++; 
	var seconds = totalSeconds % 60; //Recalculer les valeurs de minuterie et afficher ensuite
    var secondsTens = Math.floor(seconds / 10);
    var secondsOnes = seconds % 10;
    var minutes = Math.floor(totalSeconds / 60);
    document.getElementById("Timer").innerHTML = "" + minutes + "<small> mn </small>: "+ secondsTens + secondsOnes; 
  }
}

Chrono();

function stopChrono(){ 
     clearInterval(tempsId);
  
     start.style.background = "green";		 
     start.style.color = "#f2f1f1";	
     start.style.cursor = "pointer";	 
     stop.style.background = "transparent";	
     stop.style.color = "inherit";
     compteur.style.background = "black";		 
     compteur.style.color = "#f2f1f1";  
}
   
compteur.onclick=function(){
     compteur.style.background = "black";	
     compteur.style.color = "#f2f1f1";	
};
//compteur.onmouseover=function(){ compteur.innerHTML = "&#128683;" };
//compteur.onmouseout=function(){ compteur.innerHTML = "Count" };


/**
 * RAPPEL : 3 façons d'appler une fonction
 * 1) document.getElementById("blabla").addEventListener("click", nomFonction);
 * 2) document.getElementById("blablabla").onclick=function(){ ... ;}
 * 3) onclick= " nomFonction()"   dans la page HTML
 
*/





