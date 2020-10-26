var index = 0;
var timer = setInterval(function(){
    document.getElementById('source').value = words[index];
    ++index;
    if(index>=words.length){
        clearInterval(timer);
    }
}, 5000);