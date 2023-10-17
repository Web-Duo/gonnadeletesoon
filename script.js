let vdo = document.querySelector(".vdo-content")
let crsr = document.querySelector(".cursor")
let all = document.querySelector(".text")
let sec = document.querySelector(".sec3")
vdo.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+"px"
//    crsr.style.bottom = dets.y+"px"


})
vdo.addEventListener("mouseenter",function(dets){
    crsr.style.opacity = 1
 
 
 })
all.addEventListener("mouseenter",function(dets){
    crsr.style.opacity = 0
 
 
 })
sec.addEventListener("mouseenter",function(dets){
    crsr.style.opacity = 0
 
 
 })