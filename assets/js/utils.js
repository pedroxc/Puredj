// Utility Functions
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
