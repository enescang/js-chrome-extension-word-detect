document.addEventListener("DOMContentLoaded", function () {
  const checkPageButton = document.getElementById("clickIt");
  const input = document.getElementById("word");

  checkPageButton.addEventListener("click", function () {
    if (input.value === "") {
        input.style.border="2px solid red";
    } else {
      chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { word: input.value });
          }
        );
      });
    }
  });
});
