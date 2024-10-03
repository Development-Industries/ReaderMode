chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "enterReaderMode") {
        enableReaderMode();
    }
});

function enableReaderMode() {
    // Apply dark mode and white text
    document.body.style.background = "#1e1e1e"; // Dark background
    document.body.style.color = "#ffffff"; // White text for readability
    document.body.style.fontSize = "18px";
    document.body.style.lineHeight = "1.6";

    const elementsToRemove = document.querySelectorAll('header, footer, aside, .ad, .sidebar');
    elementsToRemove.forEach(el => el.remove());

    const content = document.querySelector('main') || document.querySelector('article') || document.body;
    content.style.maxWidth = "800px";
    content.style.margin = "0 auto";
}
