<?php
require_once("Database.php");

class pizzaModel {
    public function __construct() {
       
    }
    public function get() {
      try
        {
            $db = DB::getInstance();
            $sql="SELECT pizza.nom_pizza,pizza.prix_pizza, base.nom_base, images.chemin_image FROM pizza
             join base on pizza.id_base = base.id_base
            join images on pizza.id_pizza = images.id_pizza";
            
            $stmt = $db->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll();
        }
        catch (\PDOException $exc)
        {
            exit($exc->getMessage());
        }
    }
    public function post() {
        echo "POST";
    }
}