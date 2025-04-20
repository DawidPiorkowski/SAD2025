window.addEventListener('load', () => {
    const timeout = setTimeout(() => {
        // If something hasn't loaded after 5 seconds
        window.location.href = "https://www.visitczechia.com/";
    }, 5000);

    // Example: If a specific element loads, cancel the redirect
    const checkElement = setInterval(() => {
        if (document.querySelector('.main-content')) {
            clearTimeout(timeout);
            clearInterval(checkElement);
        }
    }, 500);
});