// Function to handle the toggle functionality
function toggleVisibility(buttonId, textId, toggleButtonId) {
    const button = document.getElementById(buttonId);
    const text = document.getElementById(textId);
    const toggleButton = document.getElementById(toggleButtonId);

    button.addEventListener('click', function() {
        text.classList.toggle('hidden');
        button.classList.toggle('hidden');
        toggleButton.classList.toggle('hidden');
    });

    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('hidden');
        button.classList.toggle('hidden');
        text.classList.toggle('hidden');
    });
}

// Initialize the toggle functionality for all sets
toggleVisibility('btn-1', 'text-1', 'btn+1');
toggleVisibility('btn-2', 'text-2', 'btn+2');
toggleVisibility('btn-3', 'text-3', 'btn+3');
toggleVisibility('btn-4', 'text-4', 'btn+4');
