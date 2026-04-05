<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->user_id) && !empty($data->product_id)) {
    $stmt = $pdo->prepare("INSERT INTO ratings (user_id, product_id, rating, comment) VALUES (?, ?, ?, ?)");
    $stmt->execute([$data->user_id, $data->product_id, $data->rating, $data->comment]);
    
    echo json_encode(["message" => "Rating submitted!"]);
}
?>