<?php
 require_once("model/pizzamodel.php");

 class pizzaController {
    public $model;

    public function __construct() {
        $this->model = new pizzaModel();
    }

    public function get() {
        $data = $this->model->get();
        header('Content-Type: application/json');
        echo json_encode($data);
    }

    public function post() {
        $action = $_POST['action'] ?? '';

        if ($action === 'getUserOrders') {
            $id_client = $_POST['id_client'] ?? '';
            $orders = $this->model->getUserOrders($id_client);
            echo json_encode($orders);
        } else {
            echo json_encode(['error' => 'Action invalide']);
        }
    }
}
