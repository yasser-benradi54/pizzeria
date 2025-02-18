<?php
require_once __DIR__ . '/../vendor/autoload.php';
    require_once("./model/pizzamodel.php");
      // Load environment variables from .env file
      $dotenv = \Dotenv\Dotenv::createImmutable(__DIR__);
      $dotenv->load();
    

    

    $methode = $_SERVER['REQUEST_METHOD'];
    $route = isset($_GET['route']) ? $_GET['route'] : 'home';

    switch ($route) {
        case 'pizza':
            require_once("./controller/pizzacontroller.php");
            $controller = new pizzaController();
            $controller->$methode();
            break;
        case 'login':
            require_once("./controller/logincontroller.php");
            $controller = new loginController();
            $controller->$methode();
            break;

        case 'home':
            require_once("./controller/HomeController.php");
            $controller = new HomeController();
            $controller->get();
            break;

        default:
            $controller = new HomeController();
            $controller->get();
            break;
    }

//     header("Content-Type: application/json");

// if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['route'] === 'commande') {
//     $data = json_decode(file_get_contents("php://input"), true);

//     if (isset($data['commandes']) && is_array($data['commandes'])) {
//         $id_client = 1; // Remplacez par l'ID du client actuellement connecté
//         $date_commande = date("Y-m-d H:i:s");

//         foreach ($data['commandes'] as $commande) {
//             $id_pizza = intval($commande['id_pizza']);
//             $quantite = intval($commande['quantite']);

//             // Connexion à la base de données
//             $conn = new mysqli("localhost", "username", "password", "database");

//             if ($conn->connect_error) {
//                 http_response_code(500);
//                 echo json_encode(["error" => "Erreur de connexion à la base de données"]);
//                 exit;
//             }

//             // Insertion de la commande
//             $stmt = $conn->prepare("INSERT INTO commande (id_pizza, id_client, quantite_commande, date_commande) VALUES (?, ?, ?, ?)");
//             $stmt->bind_param("iiis", $id_pizza, $id_client, $quantite, $date_commande);
//             $stmt->execute();

//             if ($stmt->error) {
//                 http_response_code(500);
//                 echo json_encode(["error" => "Erreur lors de l'insertion de la commande"]);
//                 exit;
//             }
//         }

//         echo json_encode(["success" => "Commande enregistrée avec succès"]);
//     } else {
//         http_response_code(400);
//         echo json_encode(["error" => "Données de commande invalides"]);
//     }
// }
// 
?>