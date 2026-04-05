<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

// Pure PHP doesn't handle PUT/PATCH with FormData well, so we use POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $price = $_POST['price_npr'];
    $category = $_POST['category'];

    $sql = "UPDATE products SET name = ?, price_npr = ?, category = ? WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$name, $price, $category, $id]);

    echo json_encode(["message" => "Product updated"]);
}
?>