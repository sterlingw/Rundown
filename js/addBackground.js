if (document.getElementById("RemoveCSS-Style-ID") == null) {
    var css = '*{background-color:rgba(255,0,0,0.2)}* *{background-color:rgba(0,255,0,0.2)}* * *{background-color:rgba(0,0,255,0.2)}* * * *{background-color:rgba(255,0,255,0.2)}* * * * *{background-color:rgba(0,255,255,0.2)}* * * * * *{background-color:rgba(255,255,0,0.2)}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    style.id = "RemoveCSS-Style-ID";

    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);

} else {
    document.getElementById("RemoveCSS-Style-ID").remove();
}


