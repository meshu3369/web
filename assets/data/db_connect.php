<?php

  class DB_CONNECT{

        function __construct(){
            $this->connect();
        } 
        function __destruct(){
            $this->close();
        }
      
        function connect(){
            require_once __DIR__ . '/db_config.php';
            $con = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD) or die(mysql_error());
            $db = mysqli_select_db($con,DB_NAME) or die(mysql_error());
    
            return $con;
        } 
      
       function close(){
            $link = $this->connect();
            mysqli_close($link);
        }
      
  }

?>