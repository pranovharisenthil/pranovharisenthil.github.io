var aText = [
  "Hi!",
  "I'm Pranov",
  "A Professional",
  "Amateur Tinkerer"
];

var iSpeed = 100;
var iIndex = 0;
var iTextPos = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var sContents = '';
var iRow;

var typedImage = document.getElementById("main-image");

function typewriter() {
    sContents = '';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />'; // keep break for all lines
    }

    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + '<span class="cursor">|</span>';

    // Fade-in image after "I'm Pranov"
    if (iIndex === 1 && iTextPos === iArrLength) {
        typedImage.classList.add("show");
    }

    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;

            // Only add the 500ms pause after the first two lines
            let delay = iIndex <= 2 ? 500 : 0;
            setTimeout(typewriter, delay);
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

typewriter();



