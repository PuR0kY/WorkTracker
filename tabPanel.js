// Define the showPanel function in the global scope
function showPanel(panelIndex, colorCode) {
    var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
    var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");
    
    tabButtons.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    tabPanels.forEach(function(node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}

// Ensure the function is accessible when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Your existing code inside DOMContentLoaded event listener
});