var contadorE = 0;
function crearFilaEspecificos(){
	
	contadorE++;
	var fila = document.createElement("textarea");
	fila.setAttribute("id", "esp" + contadorE);
	fila.setAttribute("name", "descripcion_especifico" + contadorE);
	fila.setAttribute("type", "text");
	fila.setAttribute("class", "form-control mb-2 mr-sm-2");
	fila.setAttribute("placeholder", "Objetivo Especifico");
	//fila.autofocus = true;
	
	document.getElementById("divObj").appendChild(fila);
	document.getElementById("esp" + contadorE).focus();
}

function obtenerCantidadEspecificos(){
	var contarElementos = document.getElementById('divObj').getElementsByTagName('textarea').length;
	document.getElementById("cantidadObjts").value = contarElementos;
}

function validacion() {
	
	var x = document.forms["formCategoria"][
	  	"nombreCategoria",
	  	"objEstrategico",
		"descripcionTema"	
	].value;
	
	if (x != "") {
		
		document.getElementById("formCategoria").submit();
		//document.getElementById("formTema").submit();
		//document.getElementById("formObjetivo").submit();
		return false;
		
	} else{
		
		var error = document.createElement("p");
		var node = document.createTextNode("¡Oh no! Hay un elemento en blanco.");
		error.appendChild(node);
		var divError = document.getElementById("divErrors");
		divError.appendChild(error);
		
		$('#modalError').modal();
	}
	
	
}

function verificarGuardar() {
	obtenerCantidadEspecificos();
  	validacion();
}
