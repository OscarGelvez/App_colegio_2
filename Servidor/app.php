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
			$query = $mobileQuery->registrar($_POST["nombre"],$_POST["apellido"],$_POST["documento"],$_POST["password"],$_POST["password2"]);
			if($query){
				echo "ok";
			}
			else{
				echo "error";
			}


		}

	}else if(isset($_GET["mobile"])){

		if($_GET["mobile"]=="Grado_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$array = $mobileQuery->GradosColegio();

			$output = array();
			$index=0;					
					
				while($index<sizeof($array)){
					$output[$array[$index][0]]= $array[$index][1];		
					$index++;
					//print_r($output);
				}

				echo json_encode($output);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/
				
			
		}
		else if($_GET["mobile"]=="Area_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$array = $mobileQuery->AreasColegio();

			$output2 = array();
			$index=0;					
					
				while($index<sizeof($array)){
					$output2[$array[$index][0]]= $array[$index][1];		
					$index++;
					//print_r($output);
				}

				echo json_encode($output2);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/
				
			
		}else if($_GET["mobile"]=="Asignatura_colegio"){

			// Retorna la lista de temas de la semana con sus respectivas materias, como en el ejemplo siguiente:
			// La clave es el tema, el valor la materia
			$array = $mobileQuery->AsignaturasColegio($_GET["area_selec"]);

			$output2 = array();
			$index=0;					
					
				while($index<sizeof($array)){
					$output2[$array[$index][0]]= $array[$index][1];		
					$index++;
					//print_r($output);
				}

				echo json_encode($output2);
			/*
				grado1-> 1 Primero Primaria
				grado2-> 2 Segundo Primaria

			*/
				
			
		}

	}
?>
