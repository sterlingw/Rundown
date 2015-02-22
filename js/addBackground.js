if (document.getElementById("RemoveCSS-Style-ID") == null) {
    var css = '*{background-color:rgba(255,0,0,0.2)}* *{background-color:rgba(0,255,0,0.2)}* * *{background-color:rgba(0,0,255,0.2)}* * * *{background-color:rgba(255,0,255,0.2)}* * * * *{background-color:rgba(0,255,255,0.2)}* * * * * *{background-color:rgba(255,255,0,0.2)}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        oldElement = null,
        hoverDescription = "Hover over an element to focus on it.";

    style.type = 'text/css';
    style.id = "RemoveCSS-Style-ID";

    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);


    // Create HTML box for hover description
    var hoverElement = document.createElement("div");
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(hoverElement);
    hoverElement.id = "Rundown-HTML-Hover-Element";

    hoverElement.innerHTML = hoverDescription;

    hoverElement.style.textAlign = "center";
    hoverElement.style.margin = "0 auto";
    hoverElement.style.padding = "0.5em 3em";
    hoverElement.style.background = "#fff";
    hoverElement.style.border = "1px solid rgba(0,0,0, 0.5)";
    hoverElement.style.color = "#000";
    hoverElement.style.top = "0";
    hoverElement.style.position = "fixed";
    hoverElement.style.zIndex = "1000";



    document.addEventListener('mousemove', function (e) {
        var x = e.clientX,
            y = e.clientY,
            element = document.elementFromPoint(x, y);

        if((oldElement != element) && (element.tagName != "")) {
            hoverDescription = element.tagName;

            if (element.id != "") {
                hoverDescription += "#" + element.id;

                if (element.classList[0] != "") {
                    for (var classI = 0; classI < element.classList.length; classI++) {
                        hoverDescription += "." + element.classList[classI];
                    }
                }
            } else if (element.classList[0] != "") {
                if (element.classList[0] != "") {
                    for (var classI = 0; classI < element.classList.length; classI++) {
                        hoverDescription += "." + element.classList[classI];
                    }
                }
            }

            hoverElement.innerHTML = hoverDescription;
        }

        oldElement = element;
    }, false);



} else {
    var styleElement = document.getElementById("RemoveCSS-Style-ID");
    var hoverElement = document.getElementById("Rundown-HTML-Hover-Element");

    if (styleElement != null) styleElement.remove();
    if (hoverElement != null) hoverElement.remove();
}


