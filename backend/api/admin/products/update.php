<?php
require_once "../../../config/cors.php";
require_once "../../../config/database.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $category = $_POST['category'];
    $price = $_POST['price_npr'];
    $stock = $_POST['stock_quantity'];

    try {
        $stmt = $pdo->prepare("UPDATE products SET name = ?, category = ?, price_npr = ?, stock_quantity = ? WHERE id = ?");
        $stmt->execute([$name, $category, $price, $stock, $id]);
        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>