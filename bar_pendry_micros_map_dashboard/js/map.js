
const layer=document.getElementById("terminalsLayer")

function drawTerminals(){

layer.innerHTML=""

terminals.forEach(t=>{

let el=document.createElement("div")
el.className="terminal"
el.style.left=t.x+"px"
el.style.top=t.y+"px"
el.innerText=t.name

el.onclick=(e)=>{
e.stopPropagation()
openPanel(t)
}

dragElement(el,t)

layer.appendChild(el)

})

}

function dragElement(el,data){

let offsetX,offsetY

el.onmousedown=(e)=>{

offsetX=e.offsetX
offsetY=e.offsetY

document.onmousemove=(e)=>{

data.x=e.pageX-offsetX
data.y=e.pageY-offsetY

el.style.left=data.x+"px"
el.style.top=data.y+"px"

}

document.onmouseup=()=>{
document.onmousemove=null
saveData()
}

}

}

loadData()
drawTerminals()
