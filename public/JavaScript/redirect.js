function redireccionStore() {
	
	setInterval(
		function(){ 
		var url = "areas.create";
		window.location.assign(url);
		}, 3000
	);
}

function redireccionUpdate() {
	
	setInterval(
		function(){ 
		var url = "plans.index";
		window.location.assign(url);
		}, 3000
	);
}

function redireccionEspecificos() {
	
	setInterval(
		function(){ 
		var url = "especificos.index";
		window.location.assign(url);
		}, 3000
	);
}
/**function crearPlan() {
	//Con esta función podemos hacer que el botón de crear planes en index se redirecciones a un fomrulario.
	var url = "http://localhost/laravel/ejemploCRUD/public/plans/create";
     window.location.assign(url);
}**/


/**function obtenerPlan() {
	setInterval(
		function(){ 
		var url = "http://localhost/laravel/ejemploCRUD/public/plans/create";
		window.location.assign(url);
		}, 5000
	);
}**/




