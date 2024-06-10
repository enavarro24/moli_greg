var getInputType = "";
var getInputID = "";

function multiplicar(valor, identificador) {

    identificarInput = identificador.split(/[1-9]/g); //Sustraer Input
    getInputType = identificarInput[0];

    var identificarInput = identificador.split(getInputType); //ID numerico
    getInputID = identificarInput[1];

    var valor1 = parseFloat($("#cantidades" + getInputID).val());

    var valor2 = parseFloat($("#costos" + getInputID).val());

    if (valor1 && valor2) {
        document.getElementById("totalesBruto" + getInputID).value = valor1 * valor2;
        cambiarColorMultiplica(false)
    } else {
        cambiarColorMultiplica(true);
    }
}

function cambiarColorMultiplica(valor) {
    var bgCostos = document.getElementById("costos" + getInputID);
    var bgCantidades = document.getElementById("cantidades" + getInputID);
    var bgBruto = document.getElementById("totalesBruto" + getInputID);

    if (valor) {
        bgCostos.setAttribute("class", "form-control bg-warning");
        bgCantidades.setAttribute("class", "form-control bg-warning");
        bgBruto.setAttribute("class", "form-control bg-danger");
        bgBruto.value = null;
    } else {
        bgCostos.setAttribute("class", "form-control");
        bgCantidades.setAttribute("class", "form-control");
        bgBruto.setAttribute("class", "form-control");
    }
}

var contadorPresupuesto = 0;

function eliminarFila() {
    document.getElementById("tablaPresupuesto").deleteRow(-1);
    contadorPresupuesto--;
}


var unidades = [
    "metro lineal",
    "metro cubico",
    "metro cuadrado",
    "unidad",
    "kilo",
    "tonelada",
    "litro",
    "galon",
    "hora",
    "cm",
    "m",
    "m^2;",
    "m^3;",
    "Km",
    "Km^2;",
    "g",
    "kg",
    "T",
    "Hrs",
    "dias",
    "semanas",
    "meses",
    "anos",
    "ml",
    "L",
    "gal",
    "A",
    "K",
    "cd",
    "W",
    "C",
    "V",
    "mol",
    "Kg/m^3"
];

var plazos = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
    "I Bimestre",
    "II Bimestre",
    "III Bimestre",
    "IV Bimestre",
    "V Bimestre",
    "VI Bimestre",
    "I Trimestre",
    "II Trimestre",
    "III Trimestre",
    "IV Trimestre",
    "I Cuatrimestre",
    "II Cuatrimestre",
    "III Cuatrimestre",
    "I Semestre",
    "II Semestre",
    "Anual"
]


function crearFilaPresupuesto(subpartidas) {
    //tablaPresupuestoCuerpo
    contadorPresupuesto++;

    //Fila
    var crearGranFila = document.createElement("tr");//Fila
    crearGranFila.setAttribute("id", "fila" + contadorPresupuesto);
    document.getElementById("tablaPresupuestoCuerpo").appendChild(crearGranFila);

    //indice
    var crearColumnaIndice = document.createElement("td");//columna
    crearColumnaIndice.setAttribute("id", "colIndice" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaIndice);

    var columnaIndice = document.createElement("span");
    columnaIndice.setAttribute("id", "span" + contadorPresupuesto);
    columnaIndice.setAttribute("class", "input-group-text");
    columnaIndice.innerHTML = contadorPresupuesto;
    crearColumnaIndice.appendChild(columnaIndice);

    //Subpa
    var crearColumnaSubpartida = document.createElement("td");//columna
    crearColumnaSubpartida.setAttribute("id", "colSubpartida" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaSubpartida);

    var columnaSubpartida = document.createElement("select");
    columnaSubpartida.setAttribute("id", "subpartidas" + contadorPresupuesto);
    columnaSubpartida.setAttribute("style", "font-size: 75%");
    columnaSubpartida.setAttribute("class", "form-control dynamic");
    columnaSubpartida.setAttribute("name", "subpartida" + contadorPresupuesto);
    columnaSubpartida.setAttribute("onchange", "seleccionDescripcion(this.value, this.id)");
    columnaSubpartida.required = true;
    crearColumnaSubpartida.appendChild(columnaSubpartida);

    var opcionDefecto = document.createElement("option");
    opcionDefecto.setAttribute("value", "");
    opcionDefecto.disabled = true;
    opcionDefecto.selected = true;
    opcionDefecto.text = "Subpartida";
    columnaSubpartida.add(opcionDefecto);

    var opcionSubpartida = "";
    subpartidas.forEach(function (element) {
        opcionSubpartida = document.createElement("option");
        opcionSubpartida.setAttribute("value", element);
        opcionSubpartida.text = element;
        columnaSubpartida.add(opcionSubpartida);
    });

    //B/S
    var crearColumnaDescripcion = document.createElement("td");//columna
    crearColumnaDescripcion.setAttribute("id", "colDescripcion" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaDescripcion);

    var columnaDescripcion = document.createElement("select");
    columnaDescripcion.setAttribute("id", "descripciones" + contadorPresupuesto);
    columnaDescripcion.setAttribute("style", "font-size: 75%");
    columnaDescripcion.setAttribute("class", "form-control dynamic");
    columnaDescripcion.setAttribute("name", "descripcion" + contadorPresupuesto);
    columnaDescripcion.setAttribute("onchange", "seleccionCodigo(this.value)");
    columnaDescripcion.required = true;
    crearColumnaDescripcion.appendChild(columnaDescripcion);

    var opcionDefecto = document.createElement("option");
    opcionDefecto.setAttribute("value", "");
    opcionDefecto.disabled = true;
    opcionDefecto.selected = true;
    opcionDefecto.text = "Bien o servicio";
    columnaDescripcion.add(opcionDefecto);

    //Código 
    var crearColumnaCodigo = document.createElement("td");//columna
    crearColumnaCodigo.setAttribute("id", "colCodigo" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaCodigo);

    var columnaCodigo = document.createElement("input");
    columnaCodigo.setAttribute("id", "codigos" + contadorPresupuesto);
    columnaCodigo.setAttribute("style", "font-size: 75%");
    columnaCodigo.setAttribute("class", "form-control");
    columnaCodigo.setAttribute("name", "codigo" + contadorPresupuesto);
    columnaCodigo.setAttribute("title", "Codigos");
    columnaCodigo.setAttribute("placeholder", "Codigos");
    columnaCodigo.readOnly = true;
    columnaCodigo.required = true;
    crearColumnaCodigo.appendChild(columnaCodigo);

    //Unidad 
    var crearColumnaUnidad = document.createElement("td");//columna
    crearColumnaUnidad.setAttribute("id", "colUnidad" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaUnidad);

    var columnaUnidad = document.createElement("select");
    columnaUnidad.setAttribute("id", "unidades" + contadorPresupuesto);
    columnaUnidad.setAttribute("style", "font-size: 75%");
    columnaUnidad.setAttribute("class", "form-control dynamic");
    columnaUnidad.setAttribute("name", "unidad" + contadorPresupuesto);
    columnaUnidad.required = true;
    crearColumnaUnidad.appendChild(columnaUnidad);

    var opcionDefecto = document.createElement("option");
    opcionDefecto.setAttribute("value", "");
    opcionDefecto.disabled = true;
    opcionDefecto.selected = true;
    opcionDefecto.text = "Unidad de medicion";
    columnaUnidad.add(opcionDefecto);

    var opcionUnidad = "";
    unidades.forEach(function (element, index) {
        opcionUnidad = document.createElement("option");
        opcionUnidad.text = element;
        columnaUnidad.add(opcionUnidad);
    });

    //Cantd 
    var crearColumnaCantidad = document.createElement("td");//columna
    crearColumnaCantidad.setAttribute("id", "colCantidad" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaCantidad);

    var columnaCantidad = document.createElement("input");
    columnaCantidad.setAttribute("id", "cantidades" + contadorPresupuesto);
    columnaCantidad.setAttribute("style", "font-size: 75%");
    columnaCantidad.setAttribute("class", "form-control");
    columnaCantidad.setAttribute("name", "cantidad" + contadorPresupuesto);
    columnaCantidad.setAttribute("title", "Cantidad de unidades");
    //columnaCantidad.setAttribute("placeholder", "Cantidad");
    columnaCantidad.setAttribute("onchange", "multiplicar(this.value, this.id)");
    columnaCantidad.setAttribute("type", "number");
    columnaCantidad.setAttribute("value", "0");
    columnaCantidad.required = true;
    crearColumnaCantidad.appendChild(columnaCantidad);


    //Costo
    var crearColumnaCosto = document.createElement("td");//columna
    crearColumnaCosto.setAttribute("id", "colCosto" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaCosto);

    var columnaCosto = document.createElement("input");
    columnaCosto.setAttribute("id", "costos" + contadorPresupuesto);
    columnaCosto.setAttribute("style", "font-size: 75%");
    columnaCosto.setAttribute("class", "form-control");
    columnaCosto.setAttribute("name", "costo" + contadorPresupuesto);
    columnaCosto.setAttribute("title", "Costo de cada unidades");
    //columnaCosto.setAttribute("placeholder", "Costo");
    columnaCosto.setAttribute("onchange", "multiplicar(this.value, this.id)");
    columnaCosto.setAttribute("value", "0");
    columnaCosto.setAttribute("type", "number");
    columnaCosto.required = true;
    crearColumnaCosto.appendChild(columnaCosto);

    //Plazo
    var crearColumnaPlazo = document.createElement("td");//columna
    crearColumnaPlazo.setAttribute("id", "colPlazo" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaPlazo);

    var columnaPlazo = document.createElement("select");
    columnaPlazo.setAttribute("id", "plazos" + contadorPresupuesto);
    columnaPlazo.setAttribute("style", "font-size: 75%");
    columnaPlazo.setAttribute("class", "form-control dynamic");
    columnaPlazo.setAttribute("name", "plazo" + contadorPresupuesto);
    columnaPlazo.required = true;
    crearColumnaPlazo.appendChild(columnaPlazo);

    var opcionDefecto = document.createElement("option");
    opcionDefecto.setAttribute("value", "");
    opcionDefecto.disabled = true;
    opcionDefecto.selected = true;
    opcionDefecto.text = "Tiempo";
    columnaPlazo.add(opcionDefecto);

    var opcionPlazo = "";
    plazos.forEach(function (element, index) {
        opcionPlazo = document.createElement("option");
        opcionPlazo.setAttribute("value", element);
        opcionPlazo.text = element;
        columnaPlazo.add(opcionPlazo);
    });


    //Total
    var crearColumnaTotalBruto = document.createElement("td");//columna
    crearColumnaTotalBruto.setAttribute("id", "colTotalBruto" + contadorPresupuesto);
    crearGranFila.appendChild(crearColumnaTotalBruto);

    var columnaTotalBruto = document.createElement("input");
    columnaTotalBruto.setAttribute("id", "totalesBruto" + contadorPresupuesto);
    columnaTotalBruto.setAttribute("style", "font-size: 75%");
    columnaTotalBruto.setAttribute("class", "form-control");
    columnaTotalBruto.setAttribute("name", "total_bruto" + contadorPresupuesto);
    columnaTotalBruto.setAttribute("title", "total_bruto");
    columnaTotalBruto.setAttribute("placeholder", "Total Bruto");
    columnaTotalBruto.readOnly = true;
    columnaTotalBruto.required = true;
    crearColumnaTotalBruto.appendChild(columnaTotalBruto);

    //Meter todo
    //document.getElementById("tablaPresupuestoCuerpo").appendChild(fila);
    //document.getElementById("v" + contadorPresupuesto).focus();
}

function obtenerCantidadFila() {//Obtine la cantidad de filas que tiene la tabla presupuesto
    var contarElementos = document.getElementById("tablaPresupuestoCuerpo").rows.length;
    document.getElementById("filas_presupuesto").value = contarElementos;

}

function verificarGuardar() {
    var vacio;

    $("#formPrincipal").each(function () {
        if ($(this).val() == "") {
            vacio = true;
        }
    })

    if (vacio) {
        /**var divError = document.getElementById("divErrors"); 
         $("#divErrors").empty();
         var error = document.createElement("p");
         var node = document.createTextNode("😞 Hay un elemento en blanco");
         error.appendChild(node);
         divError.appendChild(error);
         $('#modalError').modal();**/
        return false;
    } else {
        obtenerCantidadFila();
        document.getElementById("formPrincipal").submit();
    }
}
