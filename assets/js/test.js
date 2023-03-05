// Mohammad Halaweh - 0598939763
// Dark mode and Light mode with local storage
var darkModeButton =document.getElementById("darkModeButton");
var lightModeButton =document.getElementById("lightModeButton");


darkModeButton.onclick = function()
{
   document.body.classList.add("dark-theme");
   localStorage.setItem("mode",0);
}
lightModeButton.onclick = function()
{
   document.body.classList.remove("dark-theme");
   localStorage.setItem("mode",1);
}

document.body.onload=()=>
{
   localStorage.getItem("mode") === '0' ? document.body.classList.add("dark-theme") : document.body.classList.remove("dark-theme");
}