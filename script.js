var btn = document.querySelector(".emojis")
var emojis = ["😘","😍","😜","😊","😂","😒","😎"]

btn.addEventListener("mouseover",()=>{
    btn.innerHTML =emojis[Math.floor(Math.random()*emojis.length)]
})