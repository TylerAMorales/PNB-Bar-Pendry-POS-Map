
let current=null

const panel=document.getElementById("panel")

function openPanel(t){

current=t

panel.classList.remove("hidden")

document.getElementById("panelTitle").innerText=t.name

nameInput.value=t.name
snInput.value=t.sn
ipInput.value=t.ip
userInput.value=t.user
passInput.value=t.pass
notesInput.value=t.notes

}

closeBtn.onclick=()=>panel.classList.add("hidden")

saveBtn.onclick=()=>{

current.name=nameInput.value
current.sn=snInput.value
current.ip=ipInput.value
current.user=userInput.value
current.pass=passInput.value
current.notes=notesInput.value

saveData()
drawTerminals()

}

const bgUpload=document.getElementById("bgUpload")
const floorImage=document.getElementById("floorImage")

let saved=localStorage.getItem("floor_bg")

if(saved){
floorImage.src=saved
}

bgUpload.onchange=(e)=>{

let reader=new FileReader()

reader.onload=function(ev){

floorImage.src=ev.target.result
localStorage.setItem("floor_bg",ev.target.result)

}

reader.readAsDataURL(e.target.files[0])

}

document.getElementById("resetPositions").onclick=()=>{

localStorage.removeItem("micros_map")
location.reload()

}
