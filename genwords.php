<?php
$content = file_get_contents('google-10000-english-usa.txt');
$arrWords = explode("\n",$content);
foreach($arrWords as &$word){
    $word = '"'.trim($word).'"';
}
$inside = implode(',',$arrWords);
$fileContent = 'var words=['.$inside.'];';
file_put_contents('words.js',$fileContent);