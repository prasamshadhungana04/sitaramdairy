<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->password)) {
    try {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$data->email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // In production, use password_verify($data->password, $user['password'])
        if ($user && $data->password === $user['password']) {
            unset($user['password']); // Don't send password back
            echo json_encode([
                "success" => true,
                "user" => $user,
                "token" => "simulated-jwt-token" 
            ]);
        } else {
            http_response_code(401);
            echo json_encode(["error" => "Invalid email or password"]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>