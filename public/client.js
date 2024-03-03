const socket=io();

let name;
let textarea=document.querySelector("#textarea")
let messageArea=document.querySelector("message_area")
do{
   name=prompt("Please enter your name:"); 

}while(!name);
textarea.addEventListener( "keyup", function ( event ) {} );
if(event.which==="enter"){
    sendMessage(event.target.value)
}

function sendMessage(msg){
    let msg={
    user:name,
    message:msg
}
appendMessage(msg,"outgoing")
}

function appendMessage(msg,type){
    let  mainDiv = document.createElement('div');
    let className=type
    mainDiv.classList.add(className,"message");

    let markup=`
    <h4>${msg.user}</h4>,
    <p>$ {msg.message}</p>`

    mainDiv.innerHTML=markup
    messageArea.appendChild(mainDiv)
    

}