<?php
require_once("Database.php");
class loginModel {
    public function __construct() {
        
    }
    public function get() {
        $db = DB::getInstance();
        $sql = "SELECT * FROM client";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    }
    public function post() {
        echo "POST";
    }
}
?>
