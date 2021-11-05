var j=255;
for (let i=1;i<11;i++)
{
    let root=document.querySelector('#app')
    let title=document.createElement('h1')
    title.setAttribute("id", "divs"+i);
    let txt=document.createTextNode(+i)
    title.appendChild(txt)
    root.appendChild(title)
    let content=document.querySelector('#app')
    content.classList.add('container')
    var g=document.querySelector('#divs'+i)
    g.classList.add('element')
}
for (let i=1;i<11;i++)
{
    setInterval(() => {
        var g=document.querySelector('#divs'+i)
        j=j+1
        k=j.toString(16)
        g.style.background='#'+k
        }, 100);
}