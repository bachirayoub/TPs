let running=true;
var i=0;
let si=null;
let a=document.getElementById("test") 
let v=parseInt(a.innerText)
function start()
{ 
    si=setInterval(() => {
        v=v+1;
        a.innerText=v;
    }, 1000);

}
function stop()
{
    clearInterval(si)
}
