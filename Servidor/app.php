<?php

	include_once "querys.php";
	$mobileQuery = new MobileQuery();
	if(isset($_POST["mobile"])){
		if($_POST["mobile"]=="login"){

			// Los datos de login llegan por post. Hace echo de un json con campos "nombre", "codigo"
			// y "tipo" (1=Admin | 2=AA | 3=User) si los datos son validos, echo "error"
			// en caso contrario
			// Recibe: $_POST["codigo"] y $_POST["password"]
			/*
			if($_POST["codigo"]=="1150972" && $_POST["password"]=="http"){
				$output = array("nombre"=>"Gerson Lázaro", "codigo"=>"1150972", "tipo"=>"1");

				echo (json_encode($output));
			}else{
				echo "error";
			}
			*/
			$array = $mobileQuery->login($_POST["documento"],$_POST["password"]);
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
			//Recibe: $_POST["codigo"],$_POST["nombre"],$_POST["semestre"],$_POST["correo"], $_POST["password"] y $_POST["password2"]
			echo $mobileQuery->registrar($_POST["nombre"],$_POST["apellido"],$_POST["documento"],$_POST["password"],$_POST["password2"]);

		}

	}else if(isset($_GET["mobile"])){

		if($_GET["mobile"]=="Grado_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$output = $mobileQuery->GradosColegio();

			echo json_encode($output);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/


		}
		else if($_GET["mobile"]=="Area_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$output = $mobileQuery->AreasColegio($_GET["grado_selec"]);

			echo json_encode($output);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/


		}else if($_GET["mobile"]=="Asignatura_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$output = $mobileQuery->AsignaturasColegio($_GET["area_selec"]);

			echo json_encode($output);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/


		}else if($_GET["mobile"]=="Indicador_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$output = $mobileQuery->IndicadoresColegio($_GET["asig_selec"]);

			echo json_encode($output);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/


		}else if($_GET["mobile"]=="App_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$output = $mobileQuery->AppsColegio($_GET["indi_selec"]);

			echo json_encode($output);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/


		}

	}
?>
