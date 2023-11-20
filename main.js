function changeColor(newColor){
    const elem=document.getElementById('example');
    elem.style.color=newColor;
}

document.getElementById('example').addEventListener("click",showAlert);
function showAlert(){
    alert("addEnenListener worls");
}