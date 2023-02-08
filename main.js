
//for Key C//
const drum1 = document.getElementById("c");
const audio1 = new Audio('sound/crash.mp3');
drum1.addEventListener("click",()=>{
  audio1.play();
})
document.addEventListener("keypress",(event) =>{
  if(event.code == "KeyC"){
    audio1.play();
    }})

//for Key l//
const drum2 = document.getElementById("l");
const audio2 = new Audio('sound/kick-bass.mp3');
drum2.addEventListener("click",()=>{
  audio2.play();
})
document.addEventListener("keypress",(event) =>{
  if(event.code == "KeyL"){
    audio2.play();
    }})

//for Key e//
const drum3 = document.getElementById("e");
const audio3 = new Audio('sound/snare.mp3');
drum3.addEventListener("click",()=>{
  audio3.play();
})
document.addEventListener("keypress",(event) =>{
  if(event.code == "KeyE"){
    audio3.play();
    }})

//for Key m//

const drum4 = document.getElementById("m");
const audio4 = new Audio('sound/tom-1.mp3');
drum4.addEventListener("click",()=>{
  audio4.play();
})
document.addEventListener("keypress",(event) =>{
  if(event.code == "KeyM"){
    audio4.play();
    }})
//for key a//
const drum5 = document.getElementById("a");
const audio5 = new Audio('sound/tom-2.mp3');
drum5.addEventListener("click",()=>{
  audio5.play();
})
document.addEventListener("keypress",(event) =>{
  if(event.code == "KeyA"){
    audio5.play();
    }})

//for key n//
const drum6 = document.getElementById("n");
const audio6 = new Audio('sound/tom-3.mp3');
drum6.addEventListener("click",()=>{
  audio6.play();
})
document.addEventListener("keypress",(event) =>{
  if(event.code == "KeyN"){
    audio6.play();
    }})
//for key t//
const drum7 = document.getElementById("t");
const audio7 = new Audio('sound/tom-4.mp3');
drum7.addEventListener("click",()=>{
  audio7.play();
})
document.addEventListener("keypress",(event) =>{
  if(event.code == "KeyT"){
    audio7.play();
    }})
