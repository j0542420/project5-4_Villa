"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Jose Villa
      Date:   4/6/2025

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

// step 3 creating a for loop to loop through each phrases[i] applying an onclick that runs a function()
for (let i = 0; i < phrases.length; i++) {
      phrases[i].onclick = function(){
            // step 4 creating the phrase variable containing the h1 element
            let phrase = document.createElement("h1");
            // set the textContent of phrase to the textContent of the clicked element
            phrase.textContent = this.textContent;

            // step 5 creating the footnote variable containing the p element
            let footnote = document.createElement("p");
            // set the value of textContent to footnote[i], also adding the font-style and font-size
            footnote.textContent = footnotes[i];
            footnote.style.fontStyle = "italic";
            footnote.style.fontSize = "1.2em";

            // step 6 creating a closeButton variable containing the input element
            let closeButton = document.createElement("input");
            // setting the values of the closeButton type to button and value to Close Footnote
            // applying the style of display to block and margin to 10px auto
            closeButton.type = "button";
            closeButton.value = "Close Footnote";
            closeButton.style.display = "block";
            closeButton.style.margin = "10px auto";

            // step 7 creating a variable named popup to open up a window with set value
            let popup = window.open("","footnote","width = 300, height = 200, top = 100, left = 100");
            // step 8 applying a style rule to the popup
            popup.document.body.style.backgroundColor = "ivory";
            popup.document.body.style.fontSize = "16px";
            popup.document.body.style.padding = "10px";

            // step 9 using the appendChild method to append the other methods to popup.document.body
            popup.document.body.appendChild(phrase);
            popup.document.body.appendChild(footnote);
            popup.document.body.appendChild(closeButton);
            
            // step 10 adding a onclick handler to closeButton into a function that has the statement popup.close()
            // closes the popup window when clicked on
            closeButton.onclick = function() {
                  popup.close();
            }

      }
}