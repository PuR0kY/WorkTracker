// Get references to the input and button elements
const input = document.querySelector('.editable-button');
const button = document.querySelector('.counter-button');

// Add event listener to the input element to update button text
input.addEventListener('input', function(event) {
    button.textContent = event.target.value;
});

// Add event listener to handle the Enter key press
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior
        input.blur(); // Remove focus from the input field
    }
});