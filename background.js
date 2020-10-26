let mainUrl = 'https://translate.google.com/#view=home&op=translate&sl=en&tl=en';

// start the download task when open translate.google.com
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(tab.url);
    if (changeInfo.status == 'complete' && tab.active) {
        if (tab.url === mainUrl) {
            chrome.tabs.executeScript(tabId,{
                file: 'words.js',
                runAt: 'document_end'
            });
            chrome.tabs.executeScript(tabId,{
                file: 'timer.js',
                runAt: 'document_end'
            });
        }
    }
});

// download word explanation file and pronunciation file
var previousWord = '';
chrome.webRequest.onCompleted.addListener(
    function(details){
        console.log(details.url);
        console.log(details);
        if(details.url.indexOf('https://translate.google.com/translate_a/single')!==-1){
            let jsonUrl = details.url;
            const urlParams = new URLSearchParams(jsonUrl);
            let word = urlParams.get('q');
            let tk = urlParams.get('tk');
            if(word != previousWord){
                chrome.downloads.download({
                    url: jsonUrl,
                    filename: word+'.json',
                    method: 'GET'
                });
                let mp3Url = 'https://translate.google.com/translate_tts?ie=UTF-8&q='+word+'&tl=en&total=1&idx=0&textlen='+word.length+'&tk='+tk+'&client=webapp&prev=input';
                chrome.downloads.download({
                    url: mp3Url,
                    filename: word+'.mp3',
                    method: 'GET'
                });
                previousWord = word;
            }
        }
    },
    {urls: ["<all_urls>"]}
);