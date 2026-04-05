// backend/api/orders/verify.php
<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

// eSewa sends data in base64 via a GET request after success
$data = $_GET['data'] ?? null;

if ($data) {
    $decoded = json_decode(base64_decode($data), true);

    if ($decoded['status'] === 'COMPLETE') {
        // Here you would normally extract user_id from a session or token
        // For this Pure PHP example, we'll assume the user is known
        $stmt = $pdo->prepare("INSERT INTO orders (user_id, total_amount, payment_status, esewa_ref_id) VALUES (?, ?, ?, ?)");
        $stmt->execute([
            1, // Replace with dynamic user ID
            $decoded['total_amount'],
            'completed',
            $decoded['transaction_code']
        ]);

        echo json_encode(["status" => "success", "message" => "Payment Verified"]);
    }
}
?>