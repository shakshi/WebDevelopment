
var a=document.getElementsByTagName('audio')[0];
var source=document.getElementsByTagName("source")[0];
source.setAttribute("src",'Khuda_Jaane.mp3');

console.log(a);
var play=document.getElementById('play');
var pause=document.getElementById('pause');
var stop=document.getElementById('stop');

play.addEventListener('click',function(){
   
    a.play();});
pause.addEventListener('click',function(){
    a.pause();});
stop.addEventListener('click',function(){
     a.load();});