// ==UserScript==
// @name         Positive Physics CalculatorSoup embed
// @version      1.2
// @description  Embeds CalculatorSoup into Positive Physics
// @author       ollinruiz
// @match        https://www.positivephysics.org/lesson/physics/*
// @grant        none
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/rullinoiz/userscript/master/scripts/PositivePhysics.user.js
// @downloadURL  https://raw.githubusercontent.com/rullinoiz/userscript/master/scripts/PositivePhysics.user.js
// @require      https://code.jquery.com/jquery-3.6.0.js
// @require      https://code.jquery.com/ui/1.13.1/jquery-ui.js
// ==/UserScript==

var dragBox = document.createElement("div");
var iframe = document.createElement("iframe");

iframe.style.width = "100%";
iframe.style.height = "300px"
iframe.src = "https://www.calculatorsoup.com/calculators/physics/";

dragBox.id = "frame";
dragBox.title = "Calculator Soup";

dragBox.style.display = "none"

document.addEventListener("keydown", function (e) {  
  if(!e.shiftKey){
    return false;
  }
  if(dragBox.style.display === 'none'){
    dragBox.style.display = 'block';
  }
  else{
    dragBox.style.display = 'none';
  }
});

dragBox.appendChild(iframe);
$("#pageContent").append(dragBox);
