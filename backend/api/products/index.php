<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

try {
    // Fetch all products from the database
    $stmt = $pdo->query("SELECT * FROM products ORDER BY id DESC");
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Send the data as JSON to React
    echo json_encode($products);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>