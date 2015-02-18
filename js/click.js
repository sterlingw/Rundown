


document.getElementById("backgroundButton").addEventListener("click", function(){
    chrome.tabs.executeScript({
        file: 'js/addBackground.js'
    });

    // Hide background button.
    document.getElementById('backgroundButton').style.display='none';
    // Show disable button.
    document.getElementById('removeButton').style.display='block';
});



document.getElementById("removeButton").addEventListener("click", function(){
    chrome.tabs.executeScript({
        file: 'js/removeBackground.js'
    });

    // Show background button.
    document.getElementById('backgroundButton').style.display='block';
    // Hide disable button.
    document.getElementById('removeButton').style.display='none';
});
