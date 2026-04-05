<?php
require_once "../../../config/cors.php";
require_once "../../../config/database.php";

$id = $_GET['id'] ?? null;

if ($id) {
    try {
        // Optional: Get the image path first to delete the file from the folder
        $query = $pdo->prepare("SELECT image_url FROM products WHERE id = ?");
        $query->execute([$id]);
        $product = $query->fetch();
        
        if ($product && !empty($product['image_url'])) {
            $fullPath = "../../.." . $product['image_url'];
            if (file_exists($fullPath)) unlink($fullPath);
        }

        $stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>