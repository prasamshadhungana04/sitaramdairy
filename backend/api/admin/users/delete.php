<?php
require_once "../../../config/cors.php";
require_once "../../../config/database.php";

$id = $_GET['id'] ?? null;

if ($id) {
    try {
        // Protect the main admin account from being deleted
        $stmt = $pdo->prepare("DELETE FROM users WHERE id = ? AND role != 'admin'");
        $stmt->execute([$id]);
        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>