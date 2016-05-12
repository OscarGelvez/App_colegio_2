/*
Componente para manejar los usuariosde la aplicacion y construir los objetod html
predeterminados

*/

function peticionAsincrona(tipoHttp, parametros, fSuccess, fError) {
$.ajax({
			data:  parametros,
	        url:   root,
	        type: tipoHttp,
	        success:  function (response) {
	        	console.log(response);

	        	fSuccess(response);
	        },
	        error: function(xhr, status){
	        	fError();
	        }
	    });
	}

function limpiarVista(id_vista){

var a=id_vista;
    $(a).empty();

}

function cargarGrados() {
    var parametros = {
                "mobile" : 'Grado_colegio'

        };
	peticionAsincrona("get", parametros, construirGrados, function(){});
}

function construirGrados(response){
	var data=JSON.parse(response);

var control="'controlgroup'";

var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione un Grado</legend> <br><br>";
var valIdRadio=1;
var estructura2="</fieldset>";
var dom = $("#GradosColegio");
dom.append(estructura1);
for(var val in data){
	//valido que el primero simepre este checked
	var validChecked = "";
	if(val == 0)
		validChecked = "checked = 'checked'";
	var nombreGrado = data[val].nombre_grado;
	var idGrado = data[val].id_grado;
	dom.append("<input type='radio' name='grado' id='radioGrado_"+valIdRadio+"' value='"+idGrado+"' "+validChecked+"/> <label for='radioGrado_"+valIdRadio+"'>" + nombreGrado + "</label>").trigger('create');
	valIdRadio++;
}

  dom.append(estructura2);

}

function cargarAreas () {
    var parametros = {
                "mobile" : 'Area_colegio',
                "grado_selec" : $('input[name=grado]:checked').attr('value')

        };
    peticionAsincrona("get", parametros, construirAreas, function(){});
}

function construirAreas(response){
var data=JSON.parse(response);

var control="'controlgroup'";

var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione un Área</legend> <br><br>";
var valIdRadio=1;
var estructura2="</fieldset>";

var dom = $("#AreasColegio");

dom.append(estructura1);


for(var val in data){
	var validChecked = "";
	if(val == 0)
		validChecked = "checked = 'checked'";
	var idArea = data[val].id_area;
	var nombreArea = data[val].nombre_area;
  dom.append("<input type='radio' name='area' id='radioArea_"+valIdRadio+"' value='"+idArea+"' "+validChecked+"/> <label for='radioArea_"+valIdRadio+"'>" + nombreArea + "</label>").trigger('create');
  valIdRadio++;
}

  dom.append(estructura2);

}

function cargarAsignaturas () {
   var parametros = {
                "mobile" : 'Asignatura_colegio',
                "area_selec" : $('input[name=area]:checked').attr('value')

        };
    peticionAsincrona("get", parametros, construirAsignaturas, function(){});

}

function construirAsignaturas(response){
	var data=JSON.parse(response);

	var control="'controlgroup'";

	var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione una Asignatura</legend> <br><br>";
	var valIdRadio=1;
	var estructura2="</fieldset>";

	var dom = $("#AsigColegio");

	dom.append(estructura1);

	for(var val in data){
		var validChecked = "";
		if(val == 0)
			validChecked = "checked = 'checked'";
		var idAsignatura = data[val].id_asignatura;
		var nombreAsignatura = data[val].nombre_asignatura;
	  dom.append("<input type='radio' name='asignatura' id='radioAsignatura_"+valIdRadio+"' value='"+idAsignatura+"' "+validChecked+"/> <label for='radioAsignatura_"+valIdRadio+"'>" + nombreAsignatura + "</label>").trigger('create');
	  valIdRadio++;
	}

	  dom.append(estructura2);

}

function cargarIndicadores() {
   var parametros = {
                "mobile" : 'Indicador_colegio',
                "asig_selec" : $('input[name=asignatura]:checked').attr('value')

        };
    peticionAsincrona("get", parametros, construirIndicadores, function(){});

}

function construirIndicadores(response){
	var data=JSON.parse(response);

	var control="'controlgroup'";

	var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione un Indicador</legend> <br><br>";
	var valIdRadio=1;
	var estructura2="</fieldset>";

	var dom = $("#IndicColegio");

	dom.append(estructura1);

	for(var val in data){
		var validChecked = "";
		if(val == 0)
			validChecked = "checked = 'checked'";
		var idIndicador = data[val].id_indicador;
		var nombreIndicador = data[val].nombre_indicador;
		dom.append("<input type='radio' name='indicador' id='radioIndicador_"+valIdRadio+"' value='"+idIndicador+"' "+validChecked+"/> <label for='radioIndicador_"+valIdRadio+"'>" + nombreIndicador + "</label>").trigger('create');
		valIdRadio++;
	}

		dom.append(estructura2);

}
function cargarApps() {
   var parametros = {
                "mobile" : 'App_colegio',
                "indi_selec" : $('input[name=indicador]:checked').attr('value')

        };
    peticionAsincrona("get", parametros, construirApps, function(){});

}

function construirApps(response){
var data=JSON.parse(response);

var txt1="<h3>Nombre del Indicador: </h3>";
var rta1="<h4>"+data[0].nombre_indicador+"<h4>";

var TituloDescrip="<h3>Descripción del Indicador: </h3>";
var contenido=data[0].descripcion;
var descrip="<p>"+contenido+"</p>";


var dom = $("#caja1");

var estructura1=txt1+"\n"+rta1+"\n"+TituloDescrip+"\n"+descrip;

//de aqui pa abajo falta crear la estructura dinamica.  pille la vista Estudiante linea 150. hay dos divs que contienes todo. dentro de ellos genere lo dinamico.
//se llaman caja1 y caja2... aqui no tengo ni idea. mire la vista y pille q necesito mostrar el grado, la asignatura, el nombre y descrip del indicador ni idea.
// aparte de las apps relacionadas...
dom.append(estructura1);
dom = $("#caja2");
var valIdRadio = 1;
    for(var val in data){
				var UrlApp=data[val].url_app;
				var idApp=data[val].id_app;
				var nombreApp=data[val].nombre_app;
				var descipcionApp=data[val].descripcion_app;
        dom.append("<li class='ui-li-has-thumb ui-first-child'><a href='"+UrlApp+"'class='ui-btn ui-btn-icon-right ui-icon-carat-r'><img src='img/' id="+idApp+"/><h3>"+nombreApp+"</h3><p>"+descipcionApp+"</p></a></li>").trigger('create');
        valIdRadio++;
    }
}

/*
<div id="caja1">
        <h3>Nombre del Indicador: </h3>
        <h4> Lorem ipsum dolor sit</h4>
        <h3>Grados donde aplica</h3>
        <h3>Asignaturas donde aplica</h3>

        <h3>Descripción: </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>















/*





<fieldset data-role="controlgroup" data-mini="false">
        <legend>Seleccione un curso</legend>
        <br><br>
        <input type="radio" name="radioGrado" id="radioGrado-1" />
        <label for="radioGrado-1">Grado1</label>
        <input type="radio" name="radioGrado" id="radioGrado-2" />
        <label for="radioGrado-2">Grado</label>
        <input type="radio" name="radioGrado" id="radioGrado-3" />
        <label for="radioGrado-3">Grado</label>
        <input type="radio" name="radioGrado" id="radioGrado-4" />
        <label for="radioGrado-4">Grado</label>
        <input type="radio" name="radioGrado" id="radioGrado-5" />
        <label for="radioGrado-5">Grado</label>
        <input type="radio" name="radioGrado" id="radioGrado-6" />
        <label for="radioGrado-6">Grado6</label>
    </fieldset>
   */
