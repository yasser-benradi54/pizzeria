<?php

class HomeController {
    public function __construct() {
        
    }
    function get() {
        include("./view/pizzeria_page_menu.php");
       
    }
}