
  /** 
   *
   * ébauche: ..............12.07.21
   * fin d'édition:.........26.07.21
   *
   * Objet: Code dynamique et progressive ( en fonction du temps réel )
   *
   *        1) Une nouvelle table s'ajoute toute seule chq lundi
   *        2) Une nouvelle ligne s'ajoute chq jour( du lundi au vendredi):        
   *           mais la table ne bouge pas le weekend(samdi, dimanche) 
   *
   */
   
   //########################################################################//   
   
   /**
   * RAPPEL:
   *
   * mardi[0].style.display = "none";       pour premier elt
   * mardi[length].style.display = "none";  pour le dernier el
   *
   */
   
   var jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
   var aujourdhui = new Date();
   var nomJour = jours[aujourdhui.getDay()];
   
   var mardi = document.getElementsByClassName("mardi");
   var mercr = document.getElementsByClassName("mercr");
   var jeudi = document.getElementsByClassName("jeudi");
   var vendr = document.getElementsByClassName("vendr");
   
   var newTable = document.getElementById('newTable');	
   
   /**
    *
    *   Réarmer(vider) l'espace mémoire de cette variable tous les Samedi matin INCHA ALLÃH, car ce sont les données de la table qui sera automatiquement affiché lundi sur chronoHebdo.
	*   Pour ce faire: remplacer cette variable par la ressoure en bas de page(ligne120-ligne124)
	*   Ce, après avoir exporter les données vers chronoHebdo.html
	*
	*/
   
   var saisie = '<tr class="lundi"><td class="t1ligne2">Lundi   </td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \
                 <tr class="mardi"><td class="t1ligne3">Mardi   </td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \ \
				 <tr class="mercr"><td class="t1ligne4">Mercredi</td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \ \
                 <tr class="jeudi"><td class="t1ligne5">Jeudi   </td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \	\
				 <tr class="vendr"><td class="t1ligne6">Vendredi</td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \ ';
   
   
   var html = '<table class="table1 paragrapheTransparent" >';
   function nouvelleTable(){
	    //if(nomJour !== null) { 
        if(nomJour !== 'Dimanche'){ // la dernière table disparaît le Dimanche; afin de rapler q'i fo recharger l'espace mémoire pour LUNDI
		    html += '<tr class="t1ligne1"><td>Semaine32</td><td><a href="../../CORAN/s27.html" target="_blank" class="toTheCORAN">s27</a></td><td><a href="../../CORAN/s27.html#s28page385" target="_blank" class="toTheCORAN">s28</a></td><td><a href="../../CORAN/s28.html#s29debut" target="_blank" class="toTheCORAN">s29</a></td><td><a href="../../CORAN/s29juz21.html#s30a" target="_blank" class="toTheCORAN">s30</a></td><td><a href="../../CORAN/s31.html" target="_blank" class="toTheCORAN">s31</a></td><td><a href="../../CORAN/s32.html" target="_blank" class="toTheCORAN">s32</a></td></tr> \
				 '+saisie+'\
				 <tr class="t1ligne8"><td><small class="tempsRequis">Temps requis: <i style="color:#25fde9">27 mn</i></small></td><td><small>8p<sup>1/2</sup>(<b class="max">6mn</b>)</small></td><td><small>11p(<b class="max">7mn</b>33)</small></td><td><small>8p(<b class="max">5mn</b>33)</small></td><td><small>6p(<b class="max">4mn</b>30)</small></td><td><small>4p(<b class="max">2mn</b>40)</small></td><td><small>3p(<b class="max">2mn</b>)</small></td></tr></table>'; 	   
            document.getElementById('newTable').innerHTML += html;// Attention ! sans le signe "+" on perd toutes les données !!!!!!!!!!!
        }
   }
   
   /**
    *
	* length=1                     // 1ère table
    * length = length+1;          // 2ème table
    * length = length+2;         // 3ème table
	* length = vendr.length;    // dernière table
	* length = vendr.length-1; // avant dernière table
	*/
	
   length = vendr.length; // dernière table ( important ! )

   nouvelleTable();
   
   if(nomJour == 'Lundi') {
	   mardi[length].style.display = "none";
       mercr[length].style.display = "none";
       jeudi[length].style.display = "none";
       vendr[length].style.display = "none";
   }
   if(nomJour == 'Mardi') {
       mercr[length].style.display = "none";
       jeudi[length].style.display = "none";
       vendr[length].style.display = "none";
   }
   if(nomJour == 'Mercredi') {
       jeudi[length].style.display = "none";
       vendr[length].style.display = "none";
   }
   if(nomJour == 'Jeudi') {
       vendr[length].style.display = "none";
   }
   
   /** 
   * 
   *  ajout de table dynamique ch lundi : ok (ligne 41 à ligne 45)
   *  Nvelle chq jour :ok
   *  Ciblage dernière table: ok (length = vendr.length;) => avant dernier table: length = vendr.length-1;
   *
   */
   
   
   /*  ############################ Débouché applicatif ! ################################
   *
   *  le monitoring: ministère des finances INCHA ALLÃH
   *
   */


  



  
  
  
   // RESSOURCE
   
   /** 
   
   var saisie = '<tr class="lundi"><td class="t1ligne2">Lundi   </td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \
                 <tr class="mardi"><td class="t1ligne3">Mardi   </td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \ \
				 <tr class="mercr"><td class="t1ligne4">Mercredi</td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \ \
                 <tr class="jeudi"><td class="t1ligne5">Jeudi   </td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \	\
				 <tr class="vendr"><td class="t1ligne6">Vendredi</td> <td> .. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td><td>.. mn</td></tr> \ ';
   
   */

