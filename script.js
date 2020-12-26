function detectText(element, word) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach((elem) => detectText(elem, word));
  } else if (element.nodeType === Text.TEXT_NODE) {
    const newElement = document.createElement("span");
    var reg = new RegExp(word, "gi");
    newElement.innerHTML = element.textContent.replace(
      reg,
      '<span class="detect">' + element.textContent + "</span>"
    );
    element.replaceWith(newElement);
  }
}

chrome.runtime.onMessage.addListener(function (request, sender) {
  detectText(document.body, request.word);
});
