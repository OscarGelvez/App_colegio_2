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


function cargarGrados () {
	//$("#GradosColegio").load('Servidor/app.php?mobile=Grado_colegio');
	peticionAsincrona("get", {"mobile" : 'Grado_colegio'}, construirGrados, function(){});
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
   		dom.append("<input type='radio' name='"+name+num+"' id='radioGrado_"+valIdRadio+"'/> <label for='"+para+"'>" + grado + "</label>").trigger('create');
        valIdRadio++;
   	}

  dom.append(estructura2);

}

function cargarAreas () {
    //$("#GradosColegio").load('Servidor/app.php?mobile=Grado_colegio');
    peticionAsincrona("get", {"mobile" : 'Area_colegio'}, construirAreas, function(){});
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
        dom.append("<input type='radio' name='"+name+num+"' id='radioArea_"+valIdRadio+"' value='area_"+valIdRadio+"'/> <label for='"+para+"'>" + area + "</label>").trigger('create');
        valIdRadio++;
    }

  dom.append(estructura2);

}

function cargarAsignaturas () {
    //$("#GradosColegio").load('Servidor/app.php?mobile=Grado_colegio');


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
        dom.append("<input type='radio' name='"+name+num+"' id='radioAsig_"+valIdRadio+"'/> <label for='"+para+"'>" + asig + "</label>").trigger('create');
        valIdRadio++;
    }

  dom.append(estructura2);

}




        
         








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