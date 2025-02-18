<?php
require_once("Database.php");

class pizzaModel {
    public function __construct() {
    }

    public function get() {
        try {
            $db = DB::getInstance();
            $sql = "SELECT pizza.nom_pizza, pizza.prix_pizza, base.nom_base, images.chemin_image FROM pizza
                    JOIN base ON pizza.id_base = base.id_base
                    JOIN images ON pizza.id_pizza = images.id_pizza";
            $stmt = $db->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (\PDOException $exc) {
            exit($exc->getMessage());
        }
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


