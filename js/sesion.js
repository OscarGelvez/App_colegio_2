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
	        	fSuccess(response); 
	        },
	        error: function(xhr, status){
	        	fError();
	        }
	    });
	}






function errorDeRed () {
		$( ":mobile-pagecontainer" ).pagecontainer( "change", "#errorRed", { 
			role: "dialog"
		});
	}


	/**
	*	Inicio de sesión
	*/
    $('#login').submit(function() {  
		var parametros = {
        		"mobile" : 'login',
                "documento" : $("#id_user").val(),
                "password" : $("#password").val()
        };
        peticionAsincrona("post", parametros, inicioDeSesion, errorDeRed);
		return false;
		
	});

	/**
	*	Funcion encargada de la redirección al iniciar sesión
	*/
	function inicioDeSesion(response){
		if(response=="error"){
            $( ":mobile-pagecontainer" ).pagecontainer( "change", "#errorLogin", { 
				role: "dialog"
			});
        }else{
        	 //todo: validar que la respuesta se nula o falsa
        	var data = JSON.parse(response);
        	var domi = $("#saludo");

        	var h= "<h2>"+data["nombre"]+" "+ data["apellido"]+ "</h2>";
        	domi.append(h);

        	$( ":mobile-pagecontainer" ).pagecontainer( "change", "#bienvenido", { 
				role: "dialog"
			});

        	
        	    	
        	//window.location.href = "Estudiante.html";
        	//$("#SpanNombre").text("Bienvenido "+data.nombre+" "+data.apellido);
            
          
        }
	}


	/**
	*	Registro de usuario	
	*/
	 $('#registro').submit(function() {  
	 	if($("#passR").val() != $("#pass2").val()){
	 		$( ":mobile-pagecontainer" ).pagecontainer( "change", "#errorPassword", { 
		    	role: "dialog"
			});
	 	}else{
	 		var parametros = {
        		"mobile" : 'signup',
                "nombre" : $("#nombre").val(),
                "apellido" : $("#apellido").val(),
                "documento" : $("#id_userR").val(),
                "password" : $("#passR").val(),
                "password2" : $("#pass2").val()

                	        };
	        peticionAsincrona("post", parametros, signup, errorDeRed);
	    }
		return false;

	});

	function signup (response) {
		if(response == 1){
	        $( ":mobile-pagecontainer" ).pagecontainer( "change", "#successSignup", { 
				role: "dialog"
			});
	    }else{
	        $( ":mobile-pagecontainer" ).pagecontainer( "change", "#errorSignup", { 
				role: "dialog"
			});
	    }
	}