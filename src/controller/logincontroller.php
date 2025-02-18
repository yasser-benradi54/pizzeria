<?php
class loginController {
    public $model;

    public function __construct() {
        $this->model = new loginModel();
    }

    public function get() {
        $data = $this->model->get();
        header('Content-Type: application/json');
        echo json_encode($data);
    }

    public function post() {
        $action = $_POST['action'] ?? '';

        if ($action === 'register') {
            $nom = $_POST['nom'] ?? '';
            $prenom = $_POST['prenom'] ?? '';
            $adresse = $_POST['adresse'] ?? '';
            $telephone = $_POST['telephone'] ?? '';
            $email = $_POST['email'] ?? '';
            $mot_de_passe = $_POST['mot_de_passe'] ?? '';

            if ($this->model->register($nom, $prenom, $adresse, $telephone, $email, $mot_de_passe)) {
                echo (['success' => 'Inscription réussie']);
            } else {
                echo (['error' => 'Erreur lors de l\'inscription']);
            }
        } elseif ($action === 'login') {
            $email = $_POST['email'] ?? '';
            $mot_de_passe = $_POST['mot_de_passe'] ?? '';

            $user = $this->model->login($email, $mot_de_passe);
            if ($user) {
                echo "'success' => 'Connexion réussie', 'user' => $user";
            } else {
                echo "'error' => 'Identifiants incorrects'";
            }
        } else {
            echo "'error' => 'Action invalide'";
        }
    }
}
?>