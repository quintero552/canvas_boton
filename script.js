var kmpo = document.getElementById("campo"); // agregarmos una variable que llamara el id campo desde html
var bton = document.getElementById("boton" );// agregarmos una variable que llamara el id boton desde html
bton.addEventListener("click", dibujarporclick); // en esta linea llamamos un evento que al darle click genere la funcion ""dibujarporclick"


var lienzo = document.getElementById("cb"); // llamamos el canvas desde html
var d = lienzo.width; // esta variable me indica el valor del ancho del lienzo
var dLienzo = lienzo.getContext("2d"); // declaramos la variable que dibujara el lienzo


// declaramos la funcion que recorrrera las cordenadas del lienzo
function canliezo(color, xi, yi, xf, yf){
    dLienzo.beginPath();
    dLienzo.strokeStyle = color;
    dLienzo.moveTo(xi, yi);
    dLienzo.lineTo(xf, yf);
    dLienzo.stroke();
    dLienzo.closePath();
}

// esta funcion toma el valor de la caja de texto y hace la funcion. 
function dibujarporclick(){
    var mp = parseInt(kmpo.value);
    var n_lienzo = mp;
    var espacio = d / n_lienzo; // aca divide el valor del ancho de la caja entre el numero de lineas
    var yi, xf = d;

    for(i=0; i < n_lienzo; i++){
        yi = espacio * i;
        xf = espacio * (i+1);
        canliezo("black", 1, yi, xf, 299);
        canliezo("black", 299, yi, xf, 1);
    }

    for(i=0; i < n_lienzo; i++){
        yi = espacio * i;
        xf = xf - espacio;
        canliezo("black", 0, yi, xf, 0);
        canliezo("black", 299, yi, xf, 299);
    }

}

/*
    var n_lienzo = 30; // se declara a 30, porque se multiplicara cada 10 pixeles hasta llegar a 300 px que se indico en el index canva    
    var yi, xf;

for(i=0; i < n_lienzo; i++){
    yi = 10 * i;
    xf = 10 * (i+1);
    canliezo("black", 1, yi, xf, 299);
}*/





