var pg6FAQ = document.querySelectorAll(".pg6FAQ")
var pg6Lower = document.querySelectorAll(".pg6Lower")
var pg6Plus = document.querySelectorAll(".pg6Plus")
pg6FAQ.forEach((element,index) => {
    element.addEventListener("click",()=>{
        if( pg6Lower[index].style.display === "block") {
            pg6Lower[index].style.display = "none"
            pg6Plus[index].style.rotate ="0deg"
        }
        else {
            pg6Lower[index].style.display = "block"
            pg6Plus[index].style.rotate ="90deg"
            
        }
    })
});