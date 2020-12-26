function detectText(element, word) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach((elem) => detectText(elem, word));
  } else if (element.nodeType === Text.TEXT_NODE && !element.parentElement.classList.contains('detect') ) {
    const newElement = document.createElement("span");
    var reg = new RegExp('('+word+')', "gi");
    newElement.innerHTML = element.textContent.replace(
      reg,
      '<span class="detect">$1</span>'
    );
    element.replaceWith(newElement);
  }
}

chrome.runtime.onMessage.addListener(function (request, sender) {
  detectText(document.body, request.word);
});
