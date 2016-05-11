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

function cargarGrados () {
    var parametros = {
                "mobile" : 'Grado_colegio'
                
        };
	peticionAsincrona("get", parametros, construirGrados, function(){});
}

function construirGrados(response){
	var data=JSON.parse(response);

var control="'controlgroup'";

var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione un Grado</legend> <br><br>";
var num=1;
var valIdRadio=1;
var name = "radioGrado";


var estructura2="</fieldset>";

var dom = $("#GradosColegio");

dom.append(estructura1);

	
	for(var val in data){

        var para = name + "_" + valIdRadio;
		var grado = data[val];
   		dom.append("<input type='radio' name='"+name+num+"' id='radioGrado_"+valIdRadio+"' value='"+val+"'/> <label for='"+para+"'>" + grado + "</label>").trigger('create');
        valIdRadio++;
   	}

  dom.append(estructura2);

}

function cargarAreas () {
    var parametros = {
                "mobile" : 'Area_colegio',
                "grado_selec" : $('input[name=radioGrado1]:checked').attr('value')
                
        };
    peticionAsincrona("get", parametros, construirAreas, function(){});
}

function construirAreas(response){
    var data2=JSON.parse(response);

var control="'controlgroup'";

var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione un Área</legend> <br><br>";
var num=1;
var valIdRadio=1;
var name = "radioArea";


var estructura2="</fieldset>";

var dom = $("#AreasColegio");

dom.append(estructura1);

    
    for(var val in data2){

        var para = name + "_" + valIdRadio;
        var area = data2[val];
        dom.append("<input type='radio' name='"+name+num+"' id='radioArea_"+valIdRadio+"' value='"+val+"'/> <label for='"+para+"'>" + area + "</label>").trigger('create');
        valIdRadio++;
    }

  dom.append(estructura2);

}

function cargarAsignaturas () {
   var parametros = {
                "mobile" : 'Asignatura_colegio',
                "area_selec" : $('input[name=radioArea1]:checked').attr('value')
                
        };
    peticionAsincrona("get", parametros, construirAsignaturas, function(){});
 
}

function construirAsignaturas(response){
    var data2=JSON.parse(response);
var control="'controlgroup'";
var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione una Asignatura</legend> <br><br>";
var num=1;
var valIdRadio=1;
var name = "radioAsig";
var estructura2="</fieldset>";
var dom = $("#AsigColegio");
dom.append(estructura1);
   
    for(var val in data2){

        var para = name + "_" + valIdRadio;
        var asig = data2[val];

        dom.append("<input type='radio' name='"+name+num+"' id='radioAsig_"+valIdRadio+"'value='"+val+"' /> <label for='"+para+"'>" + asig + "</label>").trigger('create');
        valIdRadio++;
    }
  dom.append(estructura2);
}

function cargarIndicadores() {
   var parametros = {
                "mobile" : 'Indicador_colegio',
                "asig_selec" : $('input[name=radioAsig1]:checked').attr('value')
                
        };
    peticionAsincrona("get", parametros, construirIndicadores, function(){});
 
}

function construirIndicadores(response){
    var data2=JSON.parse(response);
var control="'controlgroup'";
var estructura1= "<fieldset data-role="+control+"> <legend>Seleccione una Indicador</legend> <br><br>";
var num=1;
var valIdRadio=1;
var name = "radioIndic";
var estructura2="</fieldset>";
var dom = $("#IndicColegio");
dom.append(estructura1);
   
    for(var val in data2){

        var para = name + "_" + valIdRadio;
        var indic = data2[val];
        dom.append("<input type='radio' name='"+name+num+"' id='radioIndic_"+valIdRadio+"'/> <label for='"+para+"'>" + indic + "</label>").trigger('create');
        valIdRadio++;
    }
  dom.append(estructura2);
}
function cargarApps() {
   var parametros = {
                "mobile" : 'App_colegio',
                //"asig_selec" : $('input[name=radioAsig1]:checked').attr('value')
                
        };
    peticionAsincrona("get", parametros, construirApps, function(){});
 
}

function construirApps(response){
    var data=JSON.parse(response);

var txt1="<h3>Nombre del Indicador: </h3>";
var rta1;

var txt2="<h3>Grados donde aplica</h3>";
var rta2;

var txt3="<h3>Asignaturas donde aplica</h3>";
var rta3;

var TituloDescrip="<h3>Descripción del Indicador: </h3>";
var contenido;
var descrip="<p>"+contenido+"</p>";


var dom = $("#caja1");


//de aqui pa abajo falta crear la estructura dinamica.  pille la vista Estudiante linea 150. hay dos divs que contienes todo. dentro de ellos genere lo dinamico. 
//se llaman caja1 y caja2... aqui no tengo ni idea. mire la vista y pille q necesito mostrar el grado, la asignatura, el nombre y descrip del indicador ni idea.  
// aparte de las apps relacionadas...
dom.append(estructura1);
   
    for(var val in data2){

        var para = name + "_" + valIdRadio;
        var indic = data2[val];
        dom.append("<input type='radio' name='"+name+num+"' id='radioIndic_"+valIdRadio+"'/> <label for='"+para+"'>" + indic + "</label>").trigger('create');
        valIdRadio++;
    }
  dom.append(estructura2);
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