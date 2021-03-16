var i = 0;
function movimiento() {
    // Elementos de html
    var progreso = document.getElementById("progreso");
    var divanio = document.getElementById("anio");
    var divfecha = document.getElementById("fecha");
    var divhora = document.getElementById("hora");
    var divporcentaje = document.getElementById("porcentaje");
    // variables usadas para usar los datos del tiempo
    var tiempo, getanio, getdiadelasemana, getmes, getdia, gethora, getminutos, getsegundos, getmilisegundos, porcentaje;
    // función que se repite cada milisegundo
    var cambiar = setInterval(actualizar, 1);
    function actualizar() {
        // obtención de datos de la fecha
        tiempo = new Date();
        getanio = tiempo.getFullYear();
        getdia = tiempo.getDate();
        getmes = tiempo.getMonth() + 1;
        getdiadelasemana = tiempo.getDay();
        gethora = tiempo.getHours();
        getminutos = tiempo.getMinutes();
        getsegundos = tiempo.getSeconds();
        getmilisegundos = tiempo.getMilliseconds();
        // Establece el año actua
        divanio.innerText = "% del año "+getanio;
        // Anotación: padStart() se usa para que los números siempre tengan el mismo número de carácteres, si no es así completa con 0
        // Establece la fecha actual
        divfecha.innerText = (getdiadelasemana).toString().padStart(2, 0)+" del "+(getmes).toString().padStart(2, 0)+" de "+(getanio).toString().padStart(4, 0);
        // Establece la hora actual
        divhora.innerText = (gethora).toString().padStart(2, 0)+":"+(getminutos).toString().padStart(2, 0)+":"+(getsegundos).toString().padStart(2, 0) +":"+(getmilisegundos).toString().padStart(3, 0);
        // porcentaje de año transcurrido
        porcentaje = ((100*(getmes-1))/12) + ((100*getdia)/365) + ((100*gethora)/8760) + ((100*getminutos)/525600);
        progreso.style.width = porcentaje + "%";
        divporcentaje.innerText = Math.round(porcentaje*100)/100 + "%";
    }
}
