chrome.browserAction.onClicked.addListener(function(tab) {

    /* Add CSS to page in a <style> tag if it isn't already there: */
    if (document.getElementById("RemoveCSS-Style-ID") == null) {
        chrome.tabs.executeScript({
            file: 'js/addBackground.js'
        });
    } else {
        chrome.tabs.executeScript({
            file: 'js/removeBackground.js'
        });
    }

});