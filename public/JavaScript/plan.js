function  obtenerAnnos() {
	//Con esta funcion podemos insertar años en los select de fechas de inicio y fin de timepo que dura el proyecto.
	var d = new Date();
	var anno = d.getFullYear();
	var annoMaximo = anno + 16;
	
	var annoInicio = document.getElementById("annoInicio");
	//var annoFin = document.getElementById("annoFin");
	
	for(var x = anno; x < annoMaximo; x++){
		
		var opcionInicio = document.createElement("option");
		opcionInicio.setAttribute("value", x);
		opcionInicio.text = x;
		
		/**var opcionFin = document.createElement("option");
		opcionFin.setAttribute("value", x);
		opcionFin.text = x;**/
		
		annoInicio.add(opcionInicio);
		//annoFin.add(opcionFin);
	}
}

function desactivar(){
	document.getElementById("insertarPlan").disabled = true;
}

var contador = 0;
function obtenerPlan(seleccion){
	
	//var contador = 0;
	contador++;
	
	document.getElementById("annoInicio").disabled = false;
		
	if(contador > 1){
		var annoFin = document.getElementById("annoFin").value;
		var annoSeleccion = document.getElementById("annoInicio").value;
		var tipoPlan = seleccion.options[seleccion.selectedIndex].value;
		
		insertarTiempoNombre(annoFin, annoSeleccion, tipoPlan);
	}
	/**
	var planSeleccion = seleccion.options[seleccion.selectedIndex].value;
	if(planSeleccion !== "--Seleccionar--"){
		document.getElementById("annoInicio").disabled = false;
		//document.getElementById("insertarPlan").disabled = false;
	}**/
}

function obtenerPlazo(seleccion){
	//var annoInicio = document.getElementById("annoInicio");
	var annoSeleccion = seleccion.options[seleccion.selectedIndex].value;
	var annoFin = parseInt(annoSeleccion, 10);	
	
	var tipoPlan = document.getElementById("tipoPlan").value;
	switch(tipoPlan) {
	  case 'PCDHL':
		annoFin = annoFin + 10;
		insertarTiempoNombre(annoFin, annoSeleccion, tipoPlan);
		break;

	  case 'PEM':
		annoFin = annoFin + 5;
		insertarTiempoNombre(annoFin, annoSeleccion, tipoPlan);
		break;

	  default:
		//alert("Advertencia: Debe de escoger un tipo de plan primero");
		var error = document.createElement("p");
		var node = document.createTextNode("Importante: Debe de escoger un tipo de plan primero y volver a seleccionar la fecha");
		error.appendChild(node);
		var divError = document.getElementById("divErrors");
		divError.appendChild(error);
		
		$('#modalError').modal();	
	}
}

function insertarTiempoNombre(annoFin, annoSeleccion, tipoPlan){
	document.getElementById("annoFin").value = annoFin;
	document.getElementById("nombre").value = tipoPlan + "_" + annoSeleccion + "-" + annoFin;
}

function obtenerFecha() {
	//Con esta función podemos obtener la fecha actual, para establecer la fecha de creacion de algun elemento
	var d = new Date();
	var anno = d.getFullYear();
    var mes = d.getMonth();
    var dia = d.getDate();

    if(mes <= 9){
        mes = "0" + mes; 
    }

    if(dia <= 9){
        dia = "0" + dia; 
    }

	var fechaCreacion = anno + "-" + mes + "-" + dia;
  	document.getElementById("fechaCreacion").value = fechaCreacion;

}

var contadorV = 0;
function crearFilaValores(){
	
	contadorV++;
	var fila = document.createElement("textarea");
	fila.setAttribute("id", "v" + contadorV);
	fila.setAttribute("name", "valor" + contadorV);
	fila.setAttribute("type", "text");
	fila.setAttribute("class", "form-control mb-2 mr-sm-2");
	fila.setAttribute("placeholder", "Valores");
	//fila.autofocus = true;
	
	
	document.getElementById("divValores").appendChild(fila);
	document.getElementById("v" + contadorV).focus();
}

function obtenerCantidadValores(){
	var contarElementos = document.getElementById('divValores').getElementsByTagName('textarea').length;
	document.getElementById("valores").value = contarElementos;
	
}


var contadorP = 0;
function crearFilaPrincipios(){
	
	contadorP++;
	var fila = document.createElement("textarea");
	fila.setAttribute("id", "p" + contadorP);
	fila.setAttribute("name", "principio" + contadorP);
	fila.setAttribute("type", "text");
	fila.setAttribute("class", "form-control mb-2 mr-sm-2");
	fila.setAttribute("placeholder", "Principios");
	//fila.autofocus = true;
	document.getElementById("divPrincipios").appendChild(fila);
	document.getElementById("p" + contadorP).focus();
}

function obtenerCantidadPrincipios(){
	var contarElementos = document.getElementById('divPrincipios').getElementsByTagName('textarea').length;
	document.getElementById("principios").value = contarElementos;
	
}

/**function crearArea() {
	//Con esta función podemos hacer que el botón de crear PEM en index se redirecciones a un fomrulario.
	var url = "http://localhost/laravel/ejemploCRUD/public/areas/create";
     window.location.assign(url);
}**/

function validacion() {
	var x = document.forms["formPrincipal"][
	  	"tipoPlan",
		"mision",
		"vision",
		"valores",
		"principios",
		"nombre"
	].value;
	  
	if (x != "") {
		
		document.getElementById("formPrincipal").submit();
		return false;
	} else{
		
		var error = document.createElement("p");
		//<p title="Carita triste">&#128533;</p>
		var node = document.createTextNode("Hay un elemento en blanco");
		error.appendChild(node);
		var divError = document.getElementById("divErrors");
		divError.appendChild(error);
		
		//$('#modalError').modal();
	}
}

function crearTablaCategoria(identificador, tabla){
	
	var ID = identificador.toString() + tabla.toString();
	
	var crearTabla = document.createElement("table");
	crearTabla.setAttribute("id", "tablaCategoria" + ID);
	crearTabla.setAttribute("class", "table table-bordered table-hover table-responsive-md text-break");
	//----------------------------------------------------
	var crearFila1 = document.createElement("tr");
	
	var crearColumnaTitulo = document.createElement("th");
	crearColumnaTitulo.setAttribute("colspan", "3");
	crearColumnaTitulo.setAttribute("scope", "row");
	crearColumnaTitulo.setAttribute("class", "text-center");
	crearColumnaTitulo.innerHTML = "Categoría";
	
	crearFila1.setAttribute("id", "fila1");
	crearFila1.appendChild(crearColumnaTitulo);
		
	var crearCabeza = document.createElement("thead");
	crearCabeza.setAttribute("class", "thead-dark"); 
	crearCabeza.appendChild(crearFila1);	
	crearTabla.appendChild(crearCabeza);
	
	document.getElementById("todo" + identificador.toString()).appendChild(crearTabla);
	
	//------------------------------------------------------------
	
	var crearColumnaCategoria = document.createElement("td");
	crearColumnaCategoria.setAttribute("id", "categoria" + ID);
	crearColumnaCategoria.setAttribute("colspan", "3");
	crearColumnaCategoria.setAttribute("class", "text-center table-warning");
	
	var crearFila2 = document.createElement("tr");
	crearFila2.setAttribute("id", "fila2");
	crearFila2.appendChild(crearColumnaCategoria);
	//----------------------------------------------
	var crearFila3 = document.createElement("tr");
	crearFila3.setAttribute("id", "fila3");
	
	var crearColumnaEstrategico = document.createElement("td");
	crearColumnaEstrategico.setAttribute("class", "text-center font-weight-bold");
	crearColumnaEstrategico.innerHTML = "Obj. Estrategico";
	
	var crearColumnaDoble = document.createElement("td");
	crearColumnaDoble.setAttribute("id", "estrategico" + ID);
	crearColumnaDoble.setAttribute("colspan", "2");
	
	crearFila3.appendChild(crearColumnaEstrategico);
	crearFila3.appendChild(crearColumnaDoble);
	//---------------------------------------------
	var crearFila4 = document.createElement("tr");
	crearFila4.setAttribute("id", "fila4");
	
	var crearTemaTitulo = document.createElement("td");
	crearTemaTitulo.setAttribute("class", "text-center font-weight-bold table-secondary");
	crearTemaTitulo.innerHTML = "Temas";
	
	var crearEspecificoTitulo = document.createElement("td");
	crearEspecificoTitulo.setAttribute("class", "text-center font-weight-bold table-secondary");
	crearEspecificoTitulo.setAttribute("colspan", "2");
	crearEspecificoTitulo.innerHTML = "Especifico -> Proyectos";
	
	//var crearProyectoTitulo = document.createElement("td");
	//crearProyectoTitulo.setAttribute("class", "text-center font-weight-bold table-secondary");
	//crearProyectoTitulo.innerHTML = "Proyecto";
	
	crearFila4.appendChild(crearTemaTitulo);
	crearFila4.appendChild(crearEspecificoTitulo);
	//crearFila4.appendChild(crearProyectoTitulo);
	//-------------------------------------------
	var crearFila5 = document.createElement("tr");
	crearFila5.setAttribute("id", "fila5");
	
	var crearColumnaTema = document.createElement("td");
	crearColumnaTema.setAttribute("id", "tema" + ID);
	crearColumnaTema.setAttribute("rowspan", "0");
	crearColumnaTema.setAttribute("class", "align-middle text-break text-center"); 
	
	var crearColumnaEspecifico = document.createElement("td");
	crearColumnaEspecifico.setAttribute("id", "especifico" + ID);
	crearColumnaEspecifico.setAttribute("class", "text-center");
	crearColumnaEspecifico.setAttribute("colspan", "2");
	//crearColumnaEspecifico.setAttribute("class", "table-success"); 
	
	//var crearColumnaProyecto = document.createElement("td");
	//crearColumnaProyecto.setAttribute("id", "proyecto" + ID);
	//crearColumnaProyecto.setAttribute("class", "table-info"); 
	
	crearFila5.appendChild(crearColumnaTema);
	crearFila5.appendChild(crearColumnaEspecifico);
	//crearFila5.appendChild(crearColumnaProyecto);
	
	//----------------------------------------------
	var crearCuerpo = document.createElement("tbody");
	crearCuerpo.appendChild(crearFila2);
	crearCuerpo.appendChild(crearFila3);
	crearCuerpo.appendChild(crearFila4);
	crearCuerpo.appendChild(crearFila5);
	
	crearTabla.appendChild(crearCuerpo);
	
	document.getElementById("todo" + identificador.toString()).appendChild(crearTabla);
	
}



function verificarGuardar() {
	obtenerCantidadValores();
	obtenerCantidadPrincipios();
	validacion();
	//miModal();
  	//document.getElementById("formPrincipal").submit();
	
}


