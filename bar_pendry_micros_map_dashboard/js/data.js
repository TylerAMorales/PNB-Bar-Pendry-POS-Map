
let terminals=[
{ id:"POS1",name:"POS1",x:200,y:200,sn:"",ip:"",user:"",pass:"",notes:""},
{ id:"POS2",name:"POS2",x:350,y:200,sn:"",ip:"",user:"",pass:"",notes:""},
{ id:"POS3",name:"POS3",x:500,y:200,sn:"",ip:"",user:"",pass:"",notes:""},
{ id:"POS4",name:"POS4",x:650,y:200,sn:"",ip:"",user:"",pass:"",notes:""},
{ id:"POS5",name:"POS5",x:800,y:200,sn:"",ip:"",user:"",pass:"",notes:""},
{ id:"POS6",name:"POS6",x:950,y:200,sn:"",ip:"",user:"",pass:"",notes:""}
]

function saveData(){
localStorage.setItem("micros_map",JSON.stringify(terminals))
}

function loadData(){

let stored=localStorage.getItem("micros_map")

if(stored){
terminals=JSON.parse(stored)
}

}
