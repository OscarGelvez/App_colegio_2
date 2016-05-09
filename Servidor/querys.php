<?php

include_once "modelo.php";

class MobileQuery extends Modelo{

	public function login($id,$password){
		$this->connect();
		$query = $this->query("SELECT nombre,apellido FROM usuario WHERE documento='".$id."' AND clave = '".$password."'");
		$this->terminate();
		$user = "";
		$cont = 0;

		while($row = mysqli_fetch_array($query)){
			$cont++;
			$user = $row;
		}

		if($cont>0){	
			return $user;
		}
		return false;
	}

public function registrar($nombre,$apellido,$documento,$contra,$contra2){
		$this->connect();

		if($contra === $contra2){

			$query = $this->query("INSERT INTO usuario(documento,nombre,apellido,clave) VALUES('".$documento."','".$nombre."','".$apellido."','".$contra."')");

			$this->terminate();
			
			return $query;
		}
		else{
			return false;
		}
	}
	public function GradosColegio(){
		$this->connect();
		$query = $this->query("SELECT id_curso,nombre_curso FROM curso");
		$this->terminate();
		$array = array();

		while($row = mysqli_fetch_array($query)){
			array_push($array,$row);
		}

		return $array;
	}
	public function AreasColegio(){
		$this->connect();
		$query = $this->query("SELECT id_area,nombre_area FROM area");
		$this->terminate();
		$array = array();

		while($row = mysqli_fetch_array($query)){
			array_push($array,$row);
		}

		return $array;
	}
	public function AsignaturasColegio($areaSelec){
		$this->connect();
		$query = $this->query("SELECT id_asignatura,nombre_asignatura FROM asignatura WHERE id_area='".$areaSelec."'");
		$this->terminate();
		$array = array();

		while($row = mysqli_fetch_array($query)){
			array_push($array,$row);
		}

		return $array;
	}
}
	?>