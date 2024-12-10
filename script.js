function deletebtn(event){

event.target.parentElement.remove()
}
var todo=document.querySelector(".todo")

var ul=document.getElementById("unl")
var todoinput=document.getElementById("todo-in")
function add(){
    var listitem=document.createElement("li")
    listitem.setAttribute("class","todo")
    listitem.innerHTML=`<button class="add" type="button" onclick="strike(event)">✔️</button>
    <h3 for ="${todoinput}"class="cont">${todoinput.value}</h3>
     <button  class='del-btn'  onclick='deletebtn(event)'>🗑️</button>
`
    ul.append(listitem)
   todoinput.value="";
}



function strike(event){
    
event.target.parentElement.style.textDecoration="line-through";
}

