// DarkModeButton & LightModeButton
var DarkModeButton =document.getElementById("DarkModeButton");
var LightModeButton =document.getElementById("LightModeButton");

DarkModeButton.onclick = function()
{
   document.body.classList.add("dark-theme");
}
LightModeButton.onclick = function()
{
   document.body.classList.add("light-theme");
}