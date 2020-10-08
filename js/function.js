//Pantalla de Carga
window.onload = horaa();
window.onload = function pantalla(){
  const contenedor = document.getElementById("contenedor_carga");
  contenedor.style.display = "none";
  const section = document.getElementById("section");
  section.classList.add("carga");
}

//Detectar Hora y Zona Horaria
function horaa(){
    let hoy = new Date();
    let resolvedOptions = Intl.DateTimeFormat().resolvedOptions()
    let minutes = hoy.getMinutes();
    let zona = hoy.getTimezoneOffset()/60;
    if(minutes<10){
      minutes = '0' + minutes;
    }
    if (zona>0) {
      zona = '+' + zona;
    }
    let hora = hoy.getHours() + ':' + minutes + ' - UTC' + zona;
    //console.log('El nombre de tu zona horaria es ', resolvedOptions.timeZone);
    const hora2 = document.getElementById("hora").innerHTML = hora;
    setTimeout("horaa()",1000)
}


//Funciones Modal
const btn = document.getElementById("btnenviar");
const limpiar = document.getElementById("limpiar");
const no = document.getElementById("no");

const btn2 = document.getElementById("btnenviar1");
const btn1 = document.getElementById("btncerrar")
const alert = document.getElementById("alertt")

var name = document.getElementsByName("name")
var name2 = document.getElementsByName("name2")
var email = document.getElementsByName("email")
var text = document.getElementById("exampleFormControlTextarea1")


btn2.addEventListener("click", function () {
    if (name.value!="" && name2.value!="" && email.value!="" && text.value!="") {
      btn2.setAttribute("data-target", "#exampleModal")
      btn2.setAttribute("type", "button")
    }
});

no.addEventListener("click", function () {
    btn2.setAttribute("type", "submit")
    btn2.setAttribute("data-target", "")
});

btn.addEventListener("click", function () {
    btn2.setAttribute("data-target", "")
    btn2.setAttribute("type", "submit") 
    alert.classList.remove("alert1")
    $(limpiar).trigger("click");
     
    //$("[type=submit]").trigger("click");
    //$('form').submit()
});

btn1.addEventListener("click", function () {
    alert.classList.add("alert1")
});