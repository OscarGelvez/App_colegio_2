<?php

	/**
 	* .............................................
 	* UNIVERSIDAD  FRANCISCO  DE  PAULA  SANTANDER
 	*    PROGRAMA  DE  INGENIERIA   DE   SISTEMAS
 	*         AMIGOS ACADEMICOS INTERACTIVOS
 	*             SAN JOSE DE CUCUTA-2016
	* ............................................
 	*/

	/**
	* @author 
	* @author 
	* @author 
	*/


 class Modelo{

	private $connection;

	public function connect(){
		//cambiar parametros de conexión de acuerdo con los parametros locales de cada uno
		$this->connection = mysqli_connect("localhost","root","","apps_colegios") or die(("Error " . mysqli_error($connect)));

	}

	public function query($sql){
		//print_r($sql);
		return mysqli_query($this->connection,$sql);
	}

	public function terminate(){
		mysqli_close($this->connection);
	}

	public function lastId(){
		return mysqli_insert_id($this->connection);
	}

}

?>