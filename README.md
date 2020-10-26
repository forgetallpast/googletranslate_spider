# googletranslate_spider
A chrome extension to grab English to English words translation and pronunciation mp3  
Can be used for other languages too  
For something input like this list [google-10000-english-usa](https://raw.githubusercontent.com/forgetallpast/googletranslate_spider/main/google-10000-english-usa.txt) , we get the output files like this [output files screenshot](https://raw.githubusercontent.com/forgetallpast/googletranslate_spider/main/output.png)

# usage
First,get a words list like google-10000-english-usa.txt  
Then,use ``` php genwords.php ``` to get words.js
At last, you can deploy this extension, and open a tab with url mainUrl in the background.js in Chrome  
So, it will download the json file of explaination and mp3 file of pronunciation of each words in words.js

