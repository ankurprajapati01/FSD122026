function addPara(){
    const para=document.createElement("p");
    para.innerText="This is new Para";
    para.style.color="blue";
    const parent =document.getElementById("root");
    parent.appendChild(para);
}

function removePara(){
    
}