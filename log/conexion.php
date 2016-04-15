<?php 

$db = new mysqli('localhost', 'root', 'toor', 'login');

if ($db->connect_errno) {

    printf("Error al conectar con la BD %s ",$mysql->connect_errno);

}