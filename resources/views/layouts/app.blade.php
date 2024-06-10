<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>moli</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="{{ asset('img/logo_m.png') }}">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <a class="navbar-brand" href="{{ url('home/') }}"><img src="{{ asset('img/logo.png') }}" alt="Moli" height="40"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->

                    <ul class="navbar-nav mr-auto">

                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Trámites digitales <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="">
                                        Solicitar un nuevo trámite
                                    </a>
                                    <a class="dropdown-item" href="">
                                        Mis trámites solicitados
                                    </a>
                                </div>
                            </li>


                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Herramientas Municipales <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                        <a class="dropdown-item" href="">
                                            Mi Perfil
                                        </a>


                                        <a class="dropdown-item" href="">
                                            Justificar ausencia de marca
                                        </a>


                                        <a class="dropdown-item" href="">
                                            Solicitud de Vacaciones
                                        </a>


                                        <a class="dropdown-item" href="">
                                            Revisión de justificaciones del departamento
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Revisión de vacaciones del departamento
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Creación y mantenimineto de trámites
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Revisión de trámites pendientes
                                        </a>

                                </div>
                            </li>


                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Talento Humano <span class="caret"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                        <a class="dropdown-item" href="">
                                            Panel de Control
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Colaboradores
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Revisión de vacaciones
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Lista de Justificaciones
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Lista de Incapacidades
                                        </a>

                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Licencias Comerciales <span class="caret"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                        <a class="dropdown-item" href="">
                                            Panel de Control
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Licencias Comerciales
                                        </a>

                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Seguridad <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                        <a class="dropdown-item" href="">
                                            Perfiles
                                        </a>

                                        <a class="dropdown-item" href="">
                                            Usuarios
                                        </a>

                                </div>
                            </li>

                    </ul>


                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav navbar-dark ml-auto">
                    <!-- Authentication Links -->

                        <li class="nav-item">
                            <a class="nav-link" href="">{{ __('Login') }}</a>
                        </li>

                            <li class="nav-item">
                                <a class="nav-link" href="">{{ __('Register') }}</a>
                            </li>


                </ul>
            </div>
        </div>
    </nav>

    <main class="py-4">
        @yield('content')
    </main>
</div>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

@yield('scripts')
</body>
</html>
