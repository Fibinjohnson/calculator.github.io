function clickbtn(val){
document.getElementById("srn").value=document.getElementById("srn").value+val
}
function cleardisplay(){
    document.getElementById("srn").value=""
}
function rslt(){
    document.getElementById("srn").value= eval( document.getElementById("srn").value) 
}
