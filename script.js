function showMessage(icon) {
    // Hide the envelope icon
    icon.style.display = 'none';

    // Show the message box
    const messageBox = document.getElementById('messageBox');
    messageBox.classList.add('show');

    // Play background music if available
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.volume = 0.2; // Set volume to low
        bgMusic.play().catch(err => {
            // Some browsers block autoplay; catch the error gracefully
            console.warn("Autoplay might be blocked by the browser.", err);
        });
    }
}