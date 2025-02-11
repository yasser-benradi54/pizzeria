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
