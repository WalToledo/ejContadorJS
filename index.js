var btn = document.getElementById("btnSumar");
var txt = document.getElementById("txtAcum");

var counter = 0;

btn.addEventListener("click", function(){
    counter++;
    txt.innerText = counter;

    //counter = counter+1;
    //txt.innerText = `Cuenta: ${counter}`; //fran crack dice que con el `` se formatea usando ${}
}) 