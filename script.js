window.onresize = screenWidth
window.onload = screenWidth

function screenWidth() {
    let screenInnerWidth = window.innerWidth;
    document.getElementById('center-width').innerHTML = `Width: ${screenInnerWidth} px`; 
}




