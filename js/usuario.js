/**
 	* .............................................
 	* UNIVERSIDAD  FRANCISCO  DE  PAULA  SANTANDER
 	*    PROGRAMA  DE  INGENIERIA   DE   SISTEMAS
 	*        DESARROLLO DE APLICACION MOVIL 
 	*              "ACADEMICAPP"
 	*          SAN JOSE DE CUCUTA-2016
	* ............................................
 	*/

	/**
	* @author OSCAR ANDRES GELVEZ SOLER     1150973
	* @author KELLY JOHANA SEPÚLVEDA VERA   1150144
	* @author MANUEL ELISEO OSORIO JAIMES   1150715
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



$(document).on("pagecontainertransition", adjustContentHeight);
    $(window).on("resize" , adjustContentHeight) ;
    $(window).on("orientationchange", adjustContentHeight);

    function adjustContentHeight()
    {
        var headerHeights = 0;

        $('.ui-header').each(function(index, obj){
                 var itm = $( this );
                 if (itm)
                 {
                    headerHeights = headerHeights + itm.outerHeight();
                 }
        });

        var screen = $.mobile.getScreenHeight();
        var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();
        var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();

        var content = screen - headerHeights - footer - contentCurrent;
        $(".ui-content").height(content);
    }






function limpiarVista(id_vista){

var a=id_vista;
    $(a).empty();

}
function limpiarVista2(id_vista1,id_vista2){

var a=id_vista1;
    $(a).empty();

var b=id_vista2; 
    $(b).empty();   

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

dom.append(estructura1);
dom = $("#caja2");
var valIdRadio = 1;

    for(var val in data){
    			var ran=Math.floor(Math.random() * 8) + 1  
				var UrlApp=data[val].url_app;
				var idApp=data[val].id_app;
				var nombreApp=data[val].nombre_app;
				var descipcionApp=data[val].descripcion_app;
        dom.append("<li class='ui-li-has-thumb ui-first-child'><a href='"+UrlApp+"' target='_blank' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><img src='img/l"+ran+".png' id="+idApp+"/><h3>"+nombreApp+"</h3><p>"+descipcionApp+"</p></a></li>").trigger('create');
        valIdRadio++;
    }
}















