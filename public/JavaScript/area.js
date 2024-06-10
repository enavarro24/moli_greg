function crearArea(){
	crearNombre();
	crearObj();
	crearPolitica();
}

var contadorN = 0;
//var tituloNombre;
//var divTextoNombre;
//var nombre;
function crearNombre(){
	
	contadorN++;
	var linea = document.createElement("br");
	document.getElementById("divPrincipal").appendChild(linea);
	var borde = document.createElement("hr");
	document.getElementById("divPrincipal").appendChild(borde);
	var linea2 = document.createElement("br");
	document.getElementById("divPrincipal").appendChild(linea2);
	
	var divNombre = document.createElement("div");
	divNombre.setAttribute("class", "form-group row");
	divNombre.setAttribute("id", "divNombre" + contadorN);
	
	document.getElementById("divPrincipal").appendChild(divNombre);
	
	var tituloNombre = document.createElement("p");
	tituloNombre.setAttribute("class", "font-weight-bold");
	var node = document.createTextNode("Nombre del √°rea: ");
	tituloNombre.appendChild(node);
		
	var divTextoNombre = document.createElement("div");
	divTextoNombre.setAttribute("class", "col text-center");
	divTextoNombre.setAttribute("id", "divTextoNombre" + contadorN);
	
	//document.getElementById("divNombre").appendChild(titulo);
	//document.getElementById("divNombre").appendChild(divTexto);
	
	var nombre = document.createElement("textarea");
	nombre.setAttribute("name", "nombre_area" + contadorN);
	nombre.setAttribute("type", "text");
	nombre.setAttribute("class", "form-control mb-2 mr-sm-2");
	nombre.setAttribute("placeholder", "Nombre del ¡rea");
	
	agregarNombre(tituloNombre, divTextoNombre, nombre);
	
	//document.getElementById("divTexto").appendChild(nombre);
	//obtenerCantidadValores();

}

var contadorO = 0;
//var tituloObj;
//var divTextoObj;
//var obj;
function crearObj(){
	
	contadorO++;
	
	var divObj = document.createElement("div");
	divObj.setAttribute("class", "form-group row");
	divObj.setAttribute("id", "divObj" + contadorO);
	
	document.getElementById("divPrincipal").appendChild(divObj);
		
	var tituloObj = document.createElement("p");
	tituloObj.setAttribute("class", "font-weight-bold");
	var node = document.createTextNode("Objetivo: ");
	tituloObj.appendChild(node);
	
	var divTextoObj = document.createElement("div");
	divTextoObj.setAttribute("class", "col text-center");
	divTextoObj.setAttribute("id", "divTextoObj" + contadorO);
	
	//document.getElementById("divObj").appendChild(titulo1);
	//document.getElementById("divObj").appendChild(divTexto1);
	
	var obj = document.createElement("textarea");
	obj.setAttribute("name", "obj_desarrollo" + contadorO);
	obj.setAttribute("type", "text");
	obj.setAttribute("class", "form-control mb-2 mr-sm-2");
	obj.setAttribute("placeholder", "Objetivo de desarrollo");
	
	agregarObj(tituloObj, divTextoObj, obj);
	//document.getElementById("divTexto1").appendChild(obj);
	//obtenerCantidadValores();

}

var contadorP = 0;

function crearPolitica(){
	contadorP++;
	
	/**var divPolitica = document.createElement("div");
	divPolitica.setAttribute("class", "form-group row");
	divPolitica.setAttribute("id", "divPolitica" + contadorP);
	
	document.getElementById("divPrincipal").appendChild(divPolitica);
		
	var tituloPolitica = document.createElement("p");
	tituloPolitica.setAttribute("class", "font-weight-bold");
	var node = document.createTextNode("Pol√≠tica: ");
	tituloPolitica.appendChild(node);
	
	var divTextoPolitica = document.createElement("div");
	divTextoPolitica.setAttribute("class", "col text-center");
	divTextoPolitica.setAttribute("id", "divPolitica" + contadorP);
	
	//document.getElementById("divObj").appendChild(titulo1);
	//document.getElementById("divObj").appendChild(divTexto1);
	
	var politica = document.createElement("textarea");
	politica.setAttribute("name", "politica" + contadorPx);
	politica.setAttribute("type", "text");
	politica.setAttribute("class", "form-control mb-2 mr-sm-2");
	politica.setAttribute("placeholder", "Pol√≠tica");
	
	agregarPolitca(tituloPolitica, divTextoPolitica, politica);**/
	
	var politica = document.createElement("textarea");
	politica.setAttribute("name", "politica" + contadorP);
	politica.setAttribute("type", "text");
	politica.setAttribute("class", "form-control mb-2 mr-sm-2");
	politica.setAttribute("placeholder", "Politica");
	document.getElementById("divPolitica").appendChild(politica);
}

function agregarNombre(tituloNombre, divTextoNombre, nombre){
	document.getElementById("divNombre" + contadorN).appendChild(tituloNombre);
	document.getElementById("divNombre" + contadorN).appendChild(divTextoNombre);
	document.getElementById("divTextoNombre" + contadorN).appendChild(nombre);
	
	
}

function agregarObj(tituloObj, divTextoObj, obj){
	document.getElementById("divObj" + contadorO).appendChild(tituloObj);
	document.getElementById("divObj" + contadorO).appendChild(divTextoObj);
	document.getElementById("divTextoObj" + contadorO).appendChild(obj);
	
}

/**function agregarPolitca(tituloPolitica, divTextoPolitica, politica){
	document.getElementById("divPolitica" + contadorO).appendChild(tituloPolitica);
	document.getElementById("divPolitica" + contadorO).appendChild(divTextoPolitica);
	document.getElementById("divTextoPolitica" + contadorO).appendChild(politica);
}**/

function obtenerCantidadPoliticas(){
	var contarElementos = document.getElementById('divPolitica').getElementsByTagName('textarea').length;
	document.getElementById("cantidadAreas").value = contarElementos;
}

function validacion() {
	
	var x = document.forms["formPrincipal"][
	  "nombreArea",
	  "obj",
	  "politic"

	].value;
	  
	if (x != "") {
		
		document.getElementById("formPrincipal").submit();
		return false;
	} else{
		/**
		var error = document.createElement("p");
		var node = document.createTextNode("°Oh no! Hay un elemento en blanco");
		error.appendChild(node);
		var divError = document.getElementById("divErrors");
		divError.appendChild(error);**/
		
		//$('#modalError').modal();
	}
}

function verificarGuardar() {
	//obtenerCantidadValores();
	obtenerCantidadPoliticas();
  	validacion();
}
