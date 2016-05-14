<?php
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

	
	include_once "querys.php";
	$mobileQuery = new MobileQuery();
	if(isset($_POST["mobile"])){
		if($_POST["mobile"]=="login"){

			$array = $mobileQuery->login($_POST["documento"],sha1($_POST["password"]));
			if(!$array){
				echo "error";
			}
			else{
				$output = array("nombre"=>$array['nombre'],"apellido"=>$array['apellido']);
				echo (json_encode($output));
			}



}else if($_POST["mobile"]=="signup"){
			//Los datos de registro llegan por post. Hace echo "ok" si el registro es exitoso, echo "error"
			//en caso contrario
			
			echo $mobileQuery->registrar($_POST["nombre"],$_POST["apellido"],$_POST["documento"],sha1($_POST["password"]),sha1($_POST["password2"]));

		}

	}else if(isset($_GET["mobile"])){

		if($_GET["mobile"]=="Grado_colegio"){

			$output = $mobileQuery->GradosColegio();

			echo json_encode($output);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/


		}
		else if($_GET["mobile"]=="Area_colegio"){

			
			$output = $mobileQuery->AreasColegio($_GET["grado_selec"]);

			echo json_encode($output);
			


		}else if($_GET["mobile"]=="Asignatura_colegio"){

			
			$output = $mobileQuery->AsignaturasColegio($_GET["area_selec"]);

			echo json_encode($output);
			


		}else if($_GET["mobile"]=="Indicador_colegio"){

			
			$output = $mobileQuery->IndicadoresColegio($_GET["asig_selec"]);

			echo json_encode($output);
			


		}else if($_GET["mobile"]=="App_colegio"){

			
			$output = $mobileQuery->AppsColegio($_GET["indi_selec"]);

			echo json_encode($output);
			


		}

	}
?>
