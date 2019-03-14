import '../css/content_script.scss';

// Starts the app only once the page has completely finished loading
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.test === undefined) {
        request.test = "Fun";
    }

    logSettings(request);
});

function logSettings(settings) {
    console.log(settings)
}