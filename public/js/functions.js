var url = 'http://localhost:8080/moli/public/';
var dir = '';
window.addEventListener('load', function () {
    function getNivel(n1, n2) {
        $.ajax({
            url: url + 'estructura/byPadre/' + $(n1).val(),
            type: 'GET',
            success: function (response) {
                if (response) {
                    $(n2).html('');
                    $(n2).html('<option value="">No aplica</option>');
                    for (var i = 0; i < response.nivel.length; i++) {
                        $(n2).append('<option value="' + response.nivel[i].id + '">' + response.nivel[i].nombre + '</option>');
                    }
                } else {
                    $(n2).html('');
                    $(n2).html('<option value="">No aplica</option>');
                }
            }
        });
    }
    ;
    function getLugar(l1, l2, l3 = null, l4 = null) {
        $.ajax({
            url: url + 'lugares/byPadre/' + $(l1).val(),
            type: 'GET',
            success: function (response) {
                if (response) {
                    $(l2).html('');
                    $(l2).html('<option value="">No aplica</option>');
                    for (var i = 0; i < response.lugares.length; i++) {
                        $(l2).append('<option value="' + response.lugares[i].id + '">' + response.lugares[i].nombre + '</option>');
                    }
                } else {
                    $(l2).html('');
                    $(l2).html('<option value="">No aplica</option>');
                }
                if (l3) {
                    $(l3).html('');
                    $(l3).html('<option value="">No aplica</option>');
                }
                if (l4) {
                    $(l4).html('');
                    $(l4).html('<option value="">No aplica</option>');
                }
            }
        });
    }
    ;
    function traePersona(entidad_id, persona_id, persona_fisica_id, num_identidad, nombre, apellido_1, apellido_2, tel, email) {
        if ($(num_identidad).val().length > 5) {
            dir = 'persona/byNum_identidad/';
            $.ajax({
                url: url + dir + $(num_identidad).val(),
                type: 'GET',
                success: function (response) {
                    if (response) {
                        $(entidad_id).attr('value', response[0].id);
                        $(persona_id).attr('value', response[1].id);
                        $(persona_fisica_id).attr('value', response[2].id);
                        $(nombre).attr('value', response[2].nombre);
                        $(apellido_1).attr('value', response[2].apellido_1);
                        $(apellido_2).attr('value', response[2].apellido_2);
                        $(tel).attr('value', response[3]);
                        $(email).attr('value', response[4]);
                    } else {
                        $(entidad_id).attr('value', '');
                        $(persona_id).attr('value', '');
                        $(persona_fisica_id).attr('value', '');
                        $(nombre).attr('value', '');
                        $(apellido_1).attr('value', '');
                        $(apellido_2).attr('value', '');
                        $(tel).attr('value', '');
                        $(email).attr('value', '');
                    }
                }
            });
        } else {
            $(entidad_id).attr('value', '');
            $(persona_id).attr('value', '');
            $(persona_fisica_id).attr('value', '');
            $(nombre).attr('value', '');
            $(apellido_1).attr('value', '');
            $(apellido_2).attr('value', '');
            $(tel).attr('value', '');
            $(email).attr('value', '');
        }
    }
    ;
    function mostrardias(desde, hasta, dias) {
        if ($(desde).val() !== "" && $(hasta).val() !== "") {
            var fecha_iniciot = new Date($(desde).val());
            var fecha_finalt = new Date($(hasta).val());
            fecha_iniciot.setDate(fecha_iniciot.getDate() + 1);
            fecha_finalt.setDate(fecha_finalt.getDate() + 1);
            $(dias).html('');
            while (fecha_iniciot <= fecha_finalt) {
                semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                if (fecha_iniciot.getDay() === 0 || fecha_iniciot.getDay() === 6) {
                    $(dias).append('<tr>' +
                            '<td>' + semana[fecha_iniciot.getDay()] + '</td>' +
                            '<td><input class="form-control" type="text" readonly name="dia[]" value="' + fecha_iniciot.getDate() + '/' + (fecha_iniciot.getMonth() + 1) + '/' + fecha_iniciot.getFullYear() + '"></td>' +
                            '<td><select class="form-control" name="tipo[]"><option value="1">Completo</option><option value="2">Medio</option><option value="0">Feriado</option><option value="0" selected>No contar este día</option></select></td>' +
                            '</tr>');
                    fecha_iniciot.setDate(fecha_iniciot.getDate() + 1);
                } else {
                    $(dias).append('<tr>' +
                            '<td>' + semana[fecha_iniciot.getDay()] + '</td>' +
                            '<td><input class="form-control" type="text" readonly name="dia[]" value="' + fecha_iniciot.getDate() + '/' + (fecha_iniciot.getMonth() + 1) + '/' + fecha_iniciot.getFullYear() + '"></td>' +
                            '<td><select class="form-control" name="tipo[]"><option value="1">Completo</option><option value="2">Medio</option><option value="0">Feriado</option><option value="0">No contar este día</option></select></td>' +
                            '</tr>');
                    fecha_iniciot.setDate(fecha_iniciot.getDate() + 1);
                }
            }
        }
    }

    function mostrarInfo(tipo, dato, id, info) {
        $(info).html('');
        if (tipo == 'finca') {
            dir = 'fincas/byNumero/';
            $.ajax({
                url: url + dir + $(dato).val(),
                type: 'GET',
                success: function (response) {
                    if (response) {
                        $(id).attr('value', response[0].id);
                        $(info).append('<tr><td><b>Área:</b></td><td>' + response[0].area + '</td></tr>' +
                                '<tr><td><b>Plano:</b></td><td>' + response[1].numero + '</td></tr>' +
                                '<tr><td><b>Propietario:</b></td><td>' + response[2].num_identidad + '</td></tr>');
                    }
                }});
        } else if (tipo == 'patente') {
            dir = 'licencia/byCodigo/';
            $.ajax({
                url: url + dir + $(dato).val(),
                type: 'GET',
                success: function (response) {
                    if (response) {
                        $(id).attr('value', response[0].id);
                        $(info).append('<tr><td><b>Nombre:</b></td><td>' + response[0].nombre + '</td></tr>' +
                                '<tr><td><b>Actividad:</b></td><td>' + response[1].actividad + '</td></tr>' +
                                '<tr><td><b>Propietario:</b></td><td>' + response[2].num_identidad + '</td></tr>');
                    }
                }});
        } else if (tipo == 'tramite') {
            dir = 'formulario_respuesta/byIdentificador/';
            $.ajax({
                url: url + dir + $(dato).val(),
                type: 'GET',
                success: function (response) {
                    if (response) {
                    $(id).val(response[0].id);
                    $(info).append('<tr><td><b>Trámite:</b></td><td>' + response[1].nombre + '</td></tr>' +
                            '<tr><td><b>Solicitante:</b></td><td>' + response[2].num_identidad + '</td></tr>' +
                            '<tr><td><b>Fecha de solicitud:</b></td><td>' + response[0].finalizo + '</td></tr>' +
                            '<tr><td><b>Estado:</b></td><td>' + response[0].estado + '</td></tr>');
                }
                }});
        }
    }

    function mostrarDiv(elem) {
        $("#texto").css("display", "none");
        $('#texto-bd').css("display", "none");
        $('#adjunto').css("display", "none");
        $('#listado').css("display", "none");
        $('#listado-bd').css("display", "none");
        $('#rango').css("display", "none");

        if ($(elem).val() == 1) {
            $("#texto").css("display", "block");
        } else if ($(elem).val() == 2) {
            $('#texto-bd').css("display", "block");
        } else if ($(elem).val() == 3) {
            $('#adjunto').css("display", "block");
        } else if ($(elem).val() == 4) {
            $('#listado').css("display", "block");
        } else if ($(elem).val() == 5) {
            $('#listado-bd').css("display", "block");
        } else if ($(elem).val() == 6) {
            $('#rango').css("display", "block");
        }
    }

    $('#pregunta_tipo_id').change(function () {
        mostrarDiv('#pregunta_tipo_id');
    });
    $('#desde').change(function () {
        mostrardias('#desde', '#hasta', '#dias');
    });
    $('#hasta').change(function () {
        mostrardias('#desde', '#hasta', '#dias');
    });
    $('#nivel_1').unbind('change').change(function () {
        getNivel('#nivel_1', '#nivel_2');
    });
    $('#nivel_2').unbind('change').change(function () {
        getNivel('#nivel_2', '#nivel_3');
    });
    $('#pais_id').unbind('change').change(function () {
        getLugar('#pais_id', '#provincia_id', '#canton_id', '#distrito_id');
    });
    $('#provincia_id').unbind('change').change(function () {
        getLugar('#provincia_id', '#canton_id', '#distrito_id');
    });
    $('#canton_id').unbind('change').change(function () {
        getLugar('#canton_id', '#distrito_id');
    });
    $('#num_identidad').unbind('keyup').keyup(function () {
        traePersona('#entidad_id', '#persona_id', '#persona_fisica_id', '#num_identidad', '#nombre', '#apellido_1', '#apellido_2', '#numero', '#correo');
    });
    $('#num_identidad_e').unbind('keyup').keyup(function () {
        traePersona('#entidad_id_e', '#persona_id_e', '#persona_fisica_id_e', '#num_identidad_e', '#nombre_e', '#apellido_1_e', '#apellido_2_e', '#numero_e', '#correo_e');
    });
    $('#numero_finca').unbind('keyup').keyup(function () {
        if ($('#numero_finca').val().length > 5) {
            mostrarInfo('finca', '#numero_finca', '#finca_id', '#info_finca');
        }
    });
    $('#codigo_licencia').unbind('keyup').keyup(function () {
        if ($('#codigo_licencia').val().length > 5) {
            mostrarInfo('patente', '#codigo_licencia', '#licencia_comercial_id', '#info_patente');
        }
    });
    $('#identificador_formulario').unbind('keyup').keyup(function () {
        if ($('#identificador_formulario').val().length > 5) {
            mostrarInfo('tramite', '#identificador_formulario', '#respuesta_id', '#info_tramite');
        }
    });
});