<?php
require_once("model/loginmodel.php");
class loginController {
    public $model;
    public function __construct() {
        $this->model = new loginModel();
    }
    public function get() {
        $data = new loginModel();
        header('Content-Type: application/json');
        echo json_encode($data->get());
    }
    public function post() {
        echo "POST";
    }
}