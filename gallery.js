/* gallery.js */

function upDate(previewPic) {
    console.log("Event triggered: Updating display for " + previewPic.alt);
    
    let displayDiv = document.getElementById("image");
    
    // Changing the background image
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Changing the text
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Event triggered: Resetting display");
    
    let displayDiv = document.getElementById("image");
    
    // Resetting background and text
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded: Initializing tab indices.");
    
    let images = document.querySelectorAll(".preview");
  
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to image " + (i + 1));
    }
}

// Ensure the onload function is assigned correctly
window.onload = function() {
    addTabFocus();
};
