<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

$id = $_GET['id'] ?? null;

if ($id) {
    // Safety check: Prevent admin from deleting themselves
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ? AND role != 'admin'");
    $stmt->execute([$id]);
    echo json_encode(["message" => "User removed"]);
}
?>