<!doctype html>
<html>
<!--
Esta es la plantilla, por ahora es solo para probar la estetica y el funcionamiento de blade, mas esto nos permite crear la forma base de todas las paginas del pryecto, por ejemplo la cabezera, pie de pagina y los 3 pilares (columnas) basicas para el disenno con bootstrap.
-->	
<head>
@yield("Cabeza")
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
<!-- <title>Documento sin título</title> -->
<!--
<link href="{{asset('css/bootstrap-reboot.min.css')}}" rel="stylesheet">
<link href="{{asset('css/layoutStyle')}}" rel="stylesheet">	
-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	
</head>
	
<header>
	@yield("Cabecera")
	<nav id="topNavBar" class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
	  <!-- Logo MuniMora-->
		<a class="navbar-brand" href="#">
		<img src="{{asset('../public/imagenes/MuniMoraLogo.png')}}" alt="Logo Municipal" style="width:100px; height: 50px">
		</a>

	  <!-- Barra-->
	  <ul class="navbar-nav ">
		<li class="nav-item">
		  <a class="nav-link text-white" href="{{ route('plans.index') }}">Planes</a>
		</li>
		<li class="nav-item">
		  <a class="nav-link text-white" href="{{ route('especificos.index') }}">O. Especificos</a>
		</li>
		<!--<li class="nav-item">
		  <a class="nav-link text-white" href="#">Menú 3</a>
		</li>-->
	  </ul>
	</nav>
	<div style="height:70px"></div>

</header>
	


<div class="row" style="margin-bottom: 200px"> 
	@yield("cuadriculaPrincipal");	
	<div class="col-lg-2 text-center" style="">
		@yield("columnaIzq")
		
	</div>

	<div class="col-lg-8 text-center">
		@yield("columnaCen")
		
	</div>

	<div class="col-lg-2 text-center" style="">
		@yield("columnaDer")
		
	</div>
</div>

<!--<footer id="botNavBar" class="p-3 bg-dark text-white text-center">
	@yield("Pie")
	<p>Creado por la Municipalidad de Mora: <a href="https://mora.go.cr/">mora.go.cr</a></p> 
</footer>-->
	
<script>
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("topNavBar").style.top = "0";
			} else {
				document.getElementById("topNavBar").style.top = "-100px";
			}
		prevScrollpos = currentScrollPos;
	}
</script>
	
</html>
