<?php
$email = $_POST['email_r'];
$password = $_POST['password_r'];
$password2 = $_POST['password_r2'];

require_once 'conexion.php';

if ( filter_var($email,FILTER_VALIDATE_EMAIL)  ) {

    if ( $password == $password2 ) {

        $validacion = " SELECT email FROM usuario WHERE email='$email' ";

        $resultado = $db->query($validacion);

        if ($resultado->num_rows > 0 ) {

            echo "El email ya existe en la base de datos";

        } else {

            $hash = password_hash($password,PASSWORD_DEFAULT);

            $query = " INSERT INTO usuario (email,password) VALUES ('$email','$hash') ";

            if ( $db->query($query) ) {
                echo "El usuario se registro correctamente";
            } else {

            echo "Error al registrar usuario";

        }

    }

    } else {

        echo "Passwords no coincide";

    }

} else {

    echo "El email no es valido";
}
?>