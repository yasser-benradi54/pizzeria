<?php
/*require_once("Database.php");

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

    public function register($nom, $prenom, $adresse, $telephone, $email, $mot_de_passe) {
        $db = DB::getInstance();
        $hashed_password = password_hash($mot_de_passe, PASSWORD_DEFAULT);
        $sql = "INSERT INTO client (nom_client, prenom_client, adresse_client, telephone_client, email_client, mot_de_passe_client) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $db->prepare($sql);
        $stmt->execute([$nom, $prenom, $adresse, $telephone, $email, $hashed_password]);
        return $stmt->rowCount() > 0;
    }

    public function login($email, $mot_de_passe) {
        $db = DB::getInstance();
        $sql = "SELECT * FROM client WHERE email_client = ?";
        $stmt = $db->prepare($sql);
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($mot_de_passe, $user['mot_de_passe_client'])) {
            return $user;
        }
        return false;
    }
}
*/

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

    public function register($nom, $prenom, $adresse, $telephone, $email, $mot_de_passe) {
        $db = DB::getInstance();
        $hashed_password = password_hash($mot_de_passe, PASSWORD_DEFAULT);
        $sql = "INSERT INTO client (nom_client, prenom_client, adresse_client, telephone_client, email_client, mot_de_passe_client) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $db->prepare($sql);
        $stmt->execute([$nom, $prenom, $adresse, $telephone, $email, $hashed_password]);
        return $stmt->rowCount() > 0;
    }

    public function login($email, $mot_de_passe) {
        $db = DB::getInstance();
        $sql = "SELECT * FROM client WHERE email_client = ?";
        $stmt = $db->prepare($sql);
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($mot_de_passe, $user['mot_de_passe_client'])) {
            return $user;
        }
        return false;
    }

    public function getUserOrders($id_client) {
        $db = DB::getInstance();
        $sql = "SELECT pizza.nom_pizza, commande.quantite_commande, commande.date_commande
                FROM commande
                JOIN pizza ON commande.id_pizza = pizza.id_pizza
                WHERE commande.id_client = ?";
        $stmt = $db->prepare($sql);
        $stmt->execute([$id_client]);
        return $stmt->fetchAll();
    }
}
?>
