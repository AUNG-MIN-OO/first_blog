<?php 

    function con(){
        return mysqli_connect("localhost","root","","user");
    }
    
    $info = array(
        "name"=>"login"
    );
?>