// backend/api/auth/register.php
<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->password)) {
    $hashed_password = password_hash($data->password, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    
    try {
        $stmt->execute([$data->name, $data->email, $hashed_password]);
        echo json_encode(["message" => "User registered."]);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(["error" => "Email already exists."]);
    }
}
?>