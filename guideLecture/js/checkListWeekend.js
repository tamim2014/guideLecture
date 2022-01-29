	/**Persistance exemple:
	*
	* localStorage.setItem("lastname", "Smith");
	* document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	* Sans persistance une seule ligne suffit: s3.innerHTML = "s03: &emsp; &#9745;"; 
	*
	* REMARQUE 
	*
	* si on a besoin de fontion décocher
	* alors dans la fontion cocher i fo un 2 "innerHTML" ( à l'interieur de la boucle )
	* et la f° decocher(double clic) doit être placée avant la f° cocher( 1 seul clic) !!!!!!!
	*
	* si on a pas besoin de fontion décocher
	* alors dans la fontion cocher i fo virer l' "innerHTML" qui est à l'interieur de laboucle 
	*
	*/
	
   var s2 = document.getElementById("s2");
   var s200 = document.getElementById("s200");
   var s3 = document.getElementById("s3");
   var s4 = document.getElementById("s4");
   var s4bis = document.getElementById("s4bis");
   var s5 = document.getElementById("s5");
   var s6 = document.getElementById("s6");
   var s7 = document.getElementById("s7");
   var s8 = document.getElementById("s8");
   var s9 = document.getElementById("s9");
   var s10 = document.getElementById("s10");
   var s11 = document.getElementById("s11");
   var s18 = document.getElementById("s18");
   //var s37 = document.getElementById("s37"); il est dans j23 
   var s38 = document.getElementById("s38");
   var j13 = document.getElementById("j13"); 
   var j14 = document.getElementById("j14"); 
   var j18 = document.getElementById("j18"); 
   var j19 = document.getElementById("j19"); 
   var j23 = document.getElementById("j23"); 
   //var j24 = document.getElementById("j24"); 
   //var j24Bis= document.getElementById("j24Bis"); 
   var j25 = document.getElementById("j25"); // s44 est dedans

   // DECOCHER ( avec persistance )
   s2.ondblclick = function() { localStorage.setItem("sDeux", "s02: &emsp; "); s2.innerHTML = localStorage.getItem("sDeux"); }
   s200.ondblclick = function() { localStorage.setItem("sDeuxCent", "s02: &emsp; "); s200.innerHTML = localStorage.getItem("sDeuxCent"); }
   s3.ondblclick = function() { localStorage.setItem("sTrois", "s03s04: &nbsp; "); s3.innerHTML = localStorage.getItem("sTrois"); }
   s4.ondblclick = function() { localStorage.setItem("sQatre", "s05s06: &nbsp; "); s4.innerHTML = localStorage.getItem("sQatre"); }
   s4bis.ondblclick = function() { localStorage.setItem("sQatrebis", "s07s17: &nbsp;"); s4bis.innerHTML = localStorage.getItem("sQatrebis"); }
   s5.ondblclick = function() { localStorage.setItem("sCinq", "s05: &emsp; "); s5.innerHTML = localStorage.getItem("sCinq"); }
   s6.ondblclick = function() { localStorage.setItem("sSix", "j19j20: &nbsp;"); s6.innerHTML = localStorage.getItem("sSix"); }
   s7.ondblclick = function() { localStorage.setItem("sSept", "j21j22: &nbsp;"); s7.innerHTML = localStorage.getItem("sSept"); }
   s8.ondblclick = function() { localStorage.setItem("sHuit", "s08: &emsp; "); s8.innerHTML = localStorage.getItem("sHuit"); }
   s9.ondblclick = function() { localStorage.setItem("sNeuf", "s09: &emsp; "); s9.innerHTML = localStorage.getItem("sNeuf"); }
   s10.ondblclick = function() { localStorage.setItem("sDix", "s10: &emsp; "); s10.innerHTML = localStorage.getItem("sDix"); }
   s11.ondblclick = function() { localStorage.setItem("sOnze", "s11s12: &nbsp; "); s11.innerHTML = localStorage.getItem("sOnze"); }
   s18.ondblclick = function() { localStorage.setItem("sDixhuit", "s18s19: &nbsp; "); s18.innerHTML = localStorage.getItem("sDixhuit"); }
   //s37.ondblclick = function() { localStorage.setItem("sTrentesept", "s37: &emsp; "); s37.innerHTML = localStorage.getItem("sTrentesept"); }
   s38.ondblclick = function() { localStorage.setItem("sTrentehuit", "s38: &emsp; "); s38.innerHTML = localStorage.getItem("sTrentehuit"); }
   j13.ondblclick = function() { localStorage.setItem("jTreize", "j13j14: &nbsp;"); j13.innerHTML = localStorage.getItem("jTreize"); }
   j14.ondblclick = function() { localStorage.setItem("jQuatorze", "j15j16: &nbsp;"); j14.innerHTML = localStorage.getItem("jQuatorze"); }
   j18.ondblclick = function() { localStorage.setItem("jDixhuit", "j17j18: &nbsp; "); j18.innerHTML = localStorage.getItem("jDixhuit"); }
   j19.ondblclick = function() { localStorage.setItem("jDixneuf", "s04s06: &nbsp;"); j19.innerHTML = localStorage.getItem("jDixneuf"); }
   j23.ondblclick = function() { localStorage.setItem("jVinteTrois", "j23j24: &nbsp; "); j23.innerHTML = localStorage.getItem("jVinteTrois"); }
   //j24.ondblclick = function() { localStorage.setItem("jVinteQuatre", "j24: &emsp; "); j24.innerHTML = localStorage.getItem("jVinteQuatre"); }
   // j24Bis.ondblclick = function() { localStorage.setItem("jVinteQuatreBis", "j24: &emsp; "); j24Bis.innerHTML = localStorage.getItem("jVinteQuatreBis"); }
   j25.ondblclick = function() { localStorage.setItem("jVinteCinq", "j25j26: &nbsp; "); j25.innerHTML = localStorage.getItem("jVinteCinq"); }
     
	 
   
   // COCHER ( avec persistance )
   s2.onclick = function() { localStorage.setItem("sDeux", "s02: &emsp; &#9745;"); s2.innerHTML = localStorage.getItem("sDeux"); } 
   s2.innerHTML = localStorage.getItem("sDeux");
   s200.onclick = function() { localStorage.setItem("sDeuxCent", "s02: &emsp; &#9745;"); s200.innerHTML = localStorage.getItem("sDeuxCent"); } 
   s200.innerHTML = localStorage.getItem("sDeuxCent");
   s3.onclick = function() { localStorage.setItem("sTrois", "s03s04: &nbsp;&#9745;"); s3.innerHTML = localStorage.getItem("sTrois"); } 
   s3.innerHTML = localStorage.getItem("sTrois");
   s4.onclick = function() { localStorage.setItem("sQatre", "s05s06: &nbsp;&#9745;"); s4.innerHTML = localStorage.getItem("sQatre"); } 
   s4.innerHTML = localStorage.getItem("sQatre");
   s4bis.onclick = function() { localStorage.setItem("sQatrebis", "s07s17: &nbsp;&#9745;"); s4bis.innerHTML = localStorage.getItem("sQatrebis"); } 
   s4bis.innerHTML = localStorage.getItem("sQatrebis");
   s5.onclick = function() { localStorage.setItem("sCinq", "s05: &emsp; &#9745;"); s5.innerHTML = localStorage.getItem("sCinq"); } 
   s5.innerHTML = localStorage.getItem("sCinq");
   s6.onclick = function() { localStorage.setItem("sSix", "j19j20: &nbsp;&#9745;"); s6.innerHTML = localStorage.getItem("sSix"); } 
   s6.innerHTML = localStorage.getItem("sSix");
   s7.onclick = function() { localStorage.setItem("sSept", "j21j22: &nbsp;&#9745;"); s7.innerHTML = localStorage.getItem("sSept"); } 
   s7.innerHTML = localStorage.getItem("sSept");
   s8.onclick = function() { localStorage.setItem("sHuit", "s08: &emsp; &#9745;"); s8.innerHTML = localStorage.getItem("sHuit"); } 
   s8.innerHTML = localStorage.getItem("sHuit");
   s9.onclick = function() { localStorage.setItem("sNeuf", "s09: &emsp; &#9745;"); s9.innerHTML = localStorage.getItem("sNeuf"); } 
   s9.innerHTML = localStorage.getItem("sNeuf");
   s10.onclick = function() { localStorage.setItem("sDix", "s10: &emsp; &#9745;"); s10.innerHTML = localStorage.getItem("sDix"); } 
   s10.innerHTML = localStorage.getItem("sDix");
   s11.onclick = function() { localStorage.setItem("sOnze", "s11s12: &nbsp;&#9745;"); s11.innerHTML = localStorage.getItem("sOnze"); } 
   s11.innerHTML = localStorage.getItem("sOnze");
   s18.onclick = function() { localStorage.setItem("sDixhuit", "s18s19: &nbsp;&#9745;"); s18.innerHTML = localStorage.getItem("sDixhuit"); } 
   s18.innerHTML = localStorage.getItem("sDixhuit");
   //s37.onclick = function() { localStorage.setItem("sTrentesept", "s37: &emsp;&nbsp; &#9745;"); s37.innerHTML = localStorage.getItem("sTrentesept"); } 
   //s37.innerHTML = localStorage.getItem("sTrentesept");
   s38.onclick = function() { localStorage.setItem("sTrentehuit", "s38: &emsp; &#9745;"); s38.innerHTML = localStorage.getItem("sTrentehuit"); } 
   s38.innerHTML = localStorage.getItem("sTrentehuit");
   j13.onclick = function() { localStorage.setItem("jTreize", "j13j14: &nbsp;&#9745;"); j13.innerHTML = localStorage.getItem("jTreize"); } 
   j13.innerHTML = localStorage.getItem("jTreize");
   j14.onclick = function() { localStorage.setItem("jQuatorze", "j15j16: &nbsp;&#9745;"); j14.innerHTML = localStorage.getItem("jQuatorze"); } 
   j14.innerHTML = localStorage.getItem("jQuatorze");
   j18.onclick = function() { localStorage.setItem("jDixhuit", "j17j18: &nbsp;&#9745;"); j18.innerHTML = localStorage.getItem("jDixhuit"); } 
   j18.innerHTML = localStorage.getItem("jDixhuit");
   j19.onclick = function() { localStorage.setItem("jDixneuf", "s04s06: &nbsp;&#9745;"); j19.innerHTML = localStorage.getItem("jDixneuf"); } 
   j19.innerHTML = localStorage.getItem("jDixneuf");
   j23.onclick = function() { localStorage.setItem("jVinteTrois", "j23j24: &nbsp;&#9745;"); j23.innerHTML = localStorage.getItem("jVinteTrois"); } 
   j23.innerHTML = localStorage.getItem("jVinteTrois");
   //j24.onclick = function() { localStorage.setItem("jVinteQuatre", "j24: &emsp; &#9745;"); j24.innerHTML = localStorage.getItem("jVinteQuatre"); } 
   //j24.innerHTML = localStorage.getItem("jVinteQuatre");
   //j24Bis.onclick = function() { localStorage.setItem("jVinteQuatreBis", "j24: &emsp;&nbsp; &#9745;"); j24Bis.innerHTML = localStorage.getItem("jVinteQuatreBis"); } 
   //j24Bis.innerHTML = localStorage.getItem("jVinteQuatreBis");
   j25.onclick = function() { localStorage.setItem("jVinteCinq", "j25j26: &nbsp;&#9745;"); j25.innerHTML = localStorage.getItem("jVinteCinq"); } 
   j25.innerHTML = localStorage.getItem("jVinteCinq");