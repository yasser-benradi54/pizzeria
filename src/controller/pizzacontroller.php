<?php
 require_once("model/pizzamodel.php");

class pizzaController {
   public $model;
 public function __construct() {
        $this->model = new pizzaModel();
    }
    public function get() {
        
        $data = new pizzaModel();
       header('Content-Type: application/json');
        echo json_encode($data->get());
    }
    public function post() {
        echo "POST";
    }
   
}