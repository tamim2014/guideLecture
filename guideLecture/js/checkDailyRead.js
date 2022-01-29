		/** Checklist
		 *
		 *  Vend 23 juillet 2021
		 *
		 *  Marquer si c'est fait
		 *  puis effacer( en fin de journée pour le lendemain)
		 *  On efface par un double-clic ( mais cela doit être programmé à se faire tout seul la nuit(minuit) INCHA ALLÃH
		 *
		 */
		
        
		var validateNight = document.getElementById("validateNight");
		
		var lera = new Date().getHours();
	    var dakika =  new Date().getMinutes();
		
		var tab_jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
		var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
	   
	    var date_mois = new Date().getDate()+' '+ tab_mois[new Date().getMonth()];
	    var nomJour = tab_jours[new Date().getDay()];
	   
		var quand = "<strong>&#9989;</strong> &nbsp;  Fait &emsp; ( "+nomJour+", "+date_mois+" &nbsp; &agrave; &emsp; "+lera+"h "+dakika+"mn ) ";
		
		/** 3. LECTURES DE LA NUIT ( pour avantDodo.html) */
		
		// Préparer la liste des lectures
		 validateNight.ondblclick = function() { 
		      localStorage.setItem("readNight", "&#9997; &nbsp; Cocher ici (  si c'est fait !)"); 
			  validateNight.innerHTML = localStorage.getItem("readNight"); 
	     }
		// Valider si c'est lu
		validateNight.onclick = function() {
		  localStorage.setItem("readNight", quand ); 
		  validateNight.innerHTML = localStorage.getItem("readNight");  
		}
		validateNight.innerHTML = localStorage.getItem("readNight");
		
		
		/** Blem( Rapport de bug)
		 *
		 * 24.07.21
		 *
		 * Impossible d'importer ici les check task de la page index.htm
		 * Pourtant ce sont les même fonctionnalité
		 * D'autant plus que j'ai déjas assemblé des fonctionnalités semblable dans 1 même fichier( checkListWeenkend.js)
		 * au service de fichier( weekend.html) et ça s'est bien passé !!!!!!!!!!!!!!!!!!!
		 * 
		 * Ici non
		 * Pourquoi ?
		 * Je n'sais pas encore. Absurde !
		 *
		 * SOLUTION
		 *
		 * Laisser le script en bas du fichier index.HTML
		 * en attendant de savoir pouquoi il veut pas s'exporter ici
		 *
		 */
		