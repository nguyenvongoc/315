function checkboxgood()
{
if(document.getElementById('fast').checked==true&&document.getElementById('cheap').checked==true)
{
document.getElementById('fast').checked=false;
}
}
function checkboxfast()
{
if(document.getElementById('good').checked==true&&document.getElementById('cheap').checked==true)
{
document.getElementById('cheap').checked=false;
}
}
function checkboxcheap()
{
if(document.getElementById('fast').checked==true && document.getElementById('good').checked == true)
{
document.getElementById('good').checked = false;
}
}