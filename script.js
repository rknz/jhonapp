/* NAV DROPDOWNS */

/* Toggle personas dropdown */
function togglePersonas() {
  document.getElementById("nav").classList.toggle("showpersonas");
}
/* Toggle scenarios dropdown */
function toggleScenarios() {
  document.getElementById("nav").classList.toggle("showscenarios");
}


// Close the personas dropdown if the user clicks outside of the group icon
window.onclick = function(event) {
  if (!event.target.matches('.fa-group')) {
    var personaNav = document.getElementById("nav");
  personaNav.classList.remove("showpersonas");
}
	if (!event.target.matches('.fa-list-ul')) {
    var scenarioNav = document.getElementById("nav");
  scenarioNav.classList.remove("showscenarios");
}
}

/* Toggle exit overlay dropdown */
function toggleExit() {
  document.getElementById("exitoverlay").classList.toggle("exitcheck");
}

/* Toggle preshow overlay dropdown */
function togglePreshow() {
  document.getElementById("preshowoverlay").classList.toggle("hidden");
}


// Previous and Next button control
var v = document.querySelector('.viewercontainer');
              
        var i = 1;
  
        function prev() {
  
            // Start position 
            if (i == 1) {
  
                // Add disabled attribute on
                // prev button
                document.getElementsByClassName('previous').disabled = true;
  
                // Remove disabled attribute 
                // from next button 
                document.getElementsByClassName(
                        'next').disabled = false;
            } else {
                i--;
				
				// Add 'active' class to the previous step elements
				var item = '.item-';
				var combined = `${item}${i}`;
				var active = document.querySelectorAll(combined), x;
				for (x = 0; x < active.length; ++x) {
				active[x].classList.add('active');
				}
				
				// Remove 'active' class from current step elements
				var item = '.item-';
				var previtem = i + 1;
				var combined = `${item}${previtem}`;
				var deactive = document.querySelectorAll(combined), x;
				for (x = 0; x < deactive.length; ++x) {
  					deactive[x].classList.remove('active');
				}
				
                return stepNo();
            }
        }
  
        function next() {
  
            // End position
            if (i == stepcount) {
  
                // Add disabled attribute on 
                // next button
                document.getElementsByClassName(
                        'next').disabled = true;
  
                // Remove disabled attribute
                // from prev button
                document.getElementsByClassName(
                        'previous').disabled = false;
            } else {
                i++;
				// Add 'active' class to the next step elements
				var item = '.item-';
				var combined = `${item}${i}`;
				var active = document.querySelectorAll(combined), x;
				for (x = 0; x < active.length; ++x) {
				active[x].classList.add('active');
				}
				
				// Remove 'active' class from old step elements
				var item = '.item-';
				var previtem = i - 1;
				var combined = `${item}${previtem}`;
				var deactive = document.querySelectorAll(combined), x;
				for (x = 0; x < deactive.length; ++x) {
  					deactive[x].classList.remove('active');
				}
				
                return stepNo();
            }
        }
  
        function stepNo() {
  
            // Change datastep
            return document.getElementById('viewercontainer').setAttribute("data-step", i);
			
        }