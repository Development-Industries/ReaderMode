document.getElementById("activate-reader-mode").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: enableReaderMode
        });
    });
});

function enableReaderMode() {
    // Dark background and white text for better readability
    document.body.style.background = "#1e1e1e"; // Dark background
    document.body.style.color = "#ffffff"; // White text
    document.body.style.fontSize = "18px"; // Increase font size for readability
    document.body.style.lineHeight = "1.6"; // Improved line height

    // Remove elements like ads and sidebars
    const elementsToRemove = document.querySelectorAll('header, footer, aside, .ad, .sidebar');
    elementsToRemove.forEach(el => el.remove());

    // Center content with proper margins
    const content = document.querySelector('main') || document.querySelector('article') || document.body;
    content.style.maxWidth = "800px";
    content.style.margin = "0 auto";
}
