let button=document.querySelectorAll(".drum").length;
let btn=document.querySelectorAll(".drum");
for(let i=0;i<button;i++){
btn[i].addEventListener("click", function() {
    let audio= new Audio(`./sounds/tom-${i+1}.mp3`);
    audio.play();
});
}