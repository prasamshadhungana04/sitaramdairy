<?php
require_once "../../../config/cors.php";
require_once "../../../config/database.php";

header('Content-Type: application/json');

try {
    $stmt = $pdo->query("SELECT id, name, email, role, created_at FROM users WHERE role != 'admin'");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>