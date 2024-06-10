/**
 *Este codigo JS no spermite crear X filas * 4 columnas, ya que no se sabe con exactitud  cuatnos elementos se van a ingresar, asi que se permite 
 incrementar el tamanno de la tabla. 
**/

var contador = 0;
var tipoColumna = ["partida", "subpartida", "codigo", "monto", "bien/servicio", "descripcion"];

function crearFila() {
	var cantidadFilas = document.getElementById("cantidadFilas").value;
	//alert(cantidadFilas);
	
	for(var x = 0; x < cantidadFilas; x++){
		
		contador++;
		
		var fila = document.createElement("TR");
		fila.setAttribute("name", "fila#" + contador);
		//fila.setAttribute("class", "form-control mb-2 mr-sm-2" );
		document.getElementById("curpoTablaPresupuesto").appendChild(fila);


		for (var y = 0; y < 6; y++) { 
		var columna = document.createElement("TD");
		var entrada;
			
		if(y<5){
			entrada = document.createElement("input");
			entrada.setAttribute("class", "form-control mb-2 mr-sm-2");
			entrada.setAttribute("placeholder", tipoColumna[y]);
			entrada.setAttribute("id", "columna#" + contador + "x" + y);
			entrada.setAttribute("name", "columna#" + contador + "x" + y);
		}else{
			entrada = document.createElement("textarea");
			entrada.setAttribute("style", "height: 38px");
			entrada.setAttribute("class", "form-control mb-2 mr-sm-2");
			entrada.setAttribute("placeholder", tipoColumna[y]);
			entrada.setAttribute("id", "columna#" + contador + y);
			entrada.setAttribute("name", "columna#" + contador + y);
		}

		columna.appendChild(entrada);
		document.getElementById("fila#" + contador).appendChild(columna);
		}
	}
	//alert("Entro");
}

//var tipoColumna = ["subpartida", "monto", "bien/servicio", "descripcion"];
// JavaScript Document
