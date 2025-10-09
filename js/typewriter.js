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

var destination = document.getElementById("typedtext");

// --- measure longest line and set the typed box width in px ---
(function setTypedWidth() {
  var longest = aText.reduce(function(a, b) { return a.length > b.length ? a : b; }, "");
  // create hidden measurer
  var meas = document.createElement('span');
  meas.style.position = 'absolute';
  meas.style.visibility = 'hidden';
  meas.style.whiteSpace = 'pre';
  // copy font styles so measurement matches actual rendering
  var cs = window.getComputedStyle(destination);
  meas.style.fontFamily = cs.fontFamily;
  meas.style.fontSize = cs.fontSize;
  meas.style.fontWeight = cs.fontWeight;
  meas.style.letterSpacing = cs.letterSpacing;
  meas.textContent = longest;
  document.body.appendChild(meas);
  var width = Math.ceil(meas.getBoundingClientRect().width);
  document.body.removeChild(meas);
  destination.style.width = width + 'px';
})();


typewriter();



