<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

// Fetch featured products or filter by category
$category = isset($_GET['category']) ? $_GET['category'] : 'All';

if ($category === 'All') {
    $stmt = $pdo->prepare("SELECT * FROM products ORDER BY created_at DESC");
    $stmt->execute();
} else {
    $stmt = $pdo->prepare("SELECT * FROM products WHERE category = ? ORDER BY created_at DESC");
    $stmt->execute([$category]);
}

$products = $stmt->fetchAll();

echo json_encode($products);
?>