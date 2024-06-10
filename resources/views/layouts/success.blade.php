<!doctype html>
<html>
@extends("../layouts.plantilla")


	<!-- 
	Para llamar una secciccion de la plantilla se realiza lo siguiente:
	@section("nombre de la seccion yield")
	 //Contenido
	@endesection
	-->
	@section("Cabeza")
		<title>Información</title>
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	@endsection

	@section("Cabecera")

	@endsection
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
	
	<style>
	body,h1 {font-family: "Raleway", sans-serif}
	body, html {height: 100%}
	.bgimg {
	  background-image: url('https://img1.wsimg.com/isteam/ip/f36e4cd5-d20c-4e64-a5a0-af8b5beec88a/fa03969b-236d-4ecb-848c-f962f90df61c.jpg');
	  min-height: 100%;
	  background-position: center;
	  background-size: cover;
	}
	</style>
	
	<body onLoad="redireccionEspecificos()" class="bg-light">
		<div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
			<div class="w3-display-middle">
				<div class="card text-center" style="width: 18rem;">
					<div class="card-body">
						@yield("Tarejta");
						<h5 style="color: black" class="card-title">¡Bien!</h5>
						<p style="color: black" class="card-text">Se han ingresado los datos con normalidad</p>
						<button class="btn btn-success" type="button" disabled>
						<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						Redireccionando...
						</button> 
					</div>
				</div>
			</div>
		</div>
		<script>
			function redireccionEspecificos() {
				setInterval(
					function(){ 
					var url = "{{ route('especificos.index') }}";
					window.location.assign(url);
					}, 1500
				);
			}
		</script>
	</body>
	
	
	@section("Pie")

	@endsection
</html>