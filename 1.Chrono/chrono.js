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
  //Gestion code couleur sur les btn  
  stop.style.background = "#f44336";/* red  */  
  stop.style.color = "#f2f1f1";
  stop.style.cursor = "pointer";
  //survolCurseur : un bon exemple de gestion d'evenement à l'intérieur d'une fonction
  stop.onmouseover=function(){ stop.style.backgroundColor="inherit"; stop.style.color = "gray";}
  stop.onmouseout=function(){ stop.style.backgroundColor="#f44336"; stop.style.color = "white";} 

  // Pour éviter de se tromper sur le bouton stop( comme ça m'arrive souvent !)
 
  start.style.display="none";
  compteur.style.display="none";

  stop.style.fontSize=".33em";
  stop.style.paddingTop="3.755%";
  stop.style.paddingBottom="3.755%";
  stop.style.paddingLeft="45%";
  stop.style.paddingRight="44.5%";
  stop.style.marginTop="0";
  stop.style.marginBottom="0";

  //Utiliser le btn start pour compter aussi le nb de chrono 
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
  
	 //Gestion code couleur sur les btn  
     stop.style.background = "transparent";	
     stop.style.color = "inherit";
     stop.style.cursor = "not-allowed";
	 //survolCurseur
     stop.onmouseover=function(){ stop.style.backgroundColor="inherit";}
     stop.onmouseout=function(){ stop.style.backgroundColor="inherit";}	
	 
	 // Ces proprietéz ne servent pas en mode normal; mais indispensables en mode responsive
	 start.style.background = "green";		 
     start.style.color = "#f2f1f1";	
     start.style.cursor = "pointer";
     compteur.style.background = "black";		 
     compteur.style.color = "#f2f1f1"; 
	 
	 // retour aux dispositions initiales
	 
	 start.style.display="inline";
     compteur.style.display="inline";

     start.style.paddingLeft="2em";
     start.style.paddingRight="2em";
     start.style.paddingTop=".25em";
     start.style.paddingBottom=".25em";
	 stop.style.paddingLeft="2em";
     stop.style.paddingRight="2em";
     stop.style.paddingTop=".25em";
     stop.style.paddingBottom=".25em";
	 stop.style.marginTop=".73em";
	 stop.style.fontSize=".28em";
	 stop.style.color="gray";
	 compteur.style.paddingLeft="2em";
     compteur.style.paddingRight="2em";
     compteur.style.paddingTop=".25em";
     compteur.style.paddingBottom=".25em";
 
}
   
compteur.onclick=function(){
     compteur.style.background = "black";	
     compteur.style.color = "#f2f1f1";	
};


/**
 * RAPPEL : 3 façons d'appler une fonction
 * 1) document.getElementById("blabla").addEventListener("click", nomFonction);
 * 2) document.getElementById("blablabla").onclick=function(){ ... ;}
 * 3) onclick= " nomFonction()"   dans la page HTML
 
*/





