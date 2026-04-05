<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

header('Content-Type: application/json');

try {
    // Check if a specific category is requested
    $category = isset($_GET['category']) ? $_GET['category'] : null;
    
    if ($category && $category !== 'All') {
        $stmt = $pdo->prepare("SELECT * FROM products WHERE category = ? ORDER BY id DESC");
        $stmt->execute([$category]);
    } else {
        $stmt = $pdo->query("SELECT * FROM products ORDER BY id DESC");
    }
    
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to fetch products: " . $e->getMessage()]);
}
?>