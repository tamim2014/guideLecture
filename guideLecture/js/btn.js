

	var barre = document.getElementById("mySidebar");
	var main = document.getElementById("main");
	var openMenu = document.getElementById("openMenu");
	var titreMatin = document.getElementById("titreMatin");	

		

	function openNav() {
	  barre.style.width = "250px";
	  main.style.marginLeft = "250px";
	  openMenu.style.display = "none";
	  titreMatin.style.marginTop = "-40px";	

      // cas où @media screen and (max-width: 680px) 
      barre.style.display = "block";	  
	}
	function closeNav() {
	  barre.style.width = "0";
	  main.style.marginLeft= "0";
	  openMenu.style.display = "inline";

	  // cas où @media screen and (max-width: 680px) 
	  barre.style.display = "none";	  
	}
	
	/** Scroll To Top Button */
	var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	  } else {
		mybutton.style.display = "none";
	  }
	}
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}
	/* Loop through all dropdown buttons
	 * to toggle(between hiding and showing)its dropdown content 
	 * This allows the user to have multiple dropdowns without any conflict 
	 */
	var dropdown = document.getElementsByClassName("dropdownBtn");
	var i;

	for (i = 0; i < dropdown.length; i++) {

	  dropdown[i].addEventListener("click", function() {
		  this.classList.toggle("active");
		  
		  var dropdownContent = this.nextElementSibling;
		  
		  if (dropdownContent.style.display === "block") {
			  dropdownContent.style.display = "none";
		  } else {
			  dropdownContent.style.display = "block";
		  }
	  });
	}
