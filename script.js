let goburgerkingbtn = document.querySelector(".option-one");
let homebtn = document.querySelector(".option-two");
let story = document.querySelector(".story-opening");
let uber = document.querySelector(".option-two-screen");
let show = document.querySelector(".option-one-screen");
let buttonstwo = document.querySelector(".buttonstwo");
let buttons = document.querySelector(".buttons");
let burgerbtn = document.querySelector(".option-three");
let chickenbtn = document.querySelector(".option-four");
let whopper = document.querySelector(".option-one-end");
let chicking = document.querySelector(".option-two-end");

goburgerkingbtn.onclick = function(){
  buttons.style.display="none";
buttonstwo.style.display="block";
   story.style.display="none";
  uber.style.display="block";
}
homebtn.onclick = function(){
   buttons.style.display="none";
  show.style.display="block";
  story.style.display="none";
}
burgerbtn.onclick = function(){
  whopper.style.display="block";
buttonstwo.style.display="none";
  uber.style.display="none";
}
chickenbtn.onclick = function(){
   buttonstwo.style.display="none";
chicking.style.display="block";
  uber.style.display="none";
}
