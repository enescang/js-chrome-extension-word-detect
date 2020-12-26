document.addEventListener('DOMContentLoaded', function(){
    const checkPageButton = document.getElementById('clickIt');
    const input = document.getElementById('word');
    
    checkPageButton.addEventListener('click', function(){
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {word: input.value});
            });
        })
    })
});