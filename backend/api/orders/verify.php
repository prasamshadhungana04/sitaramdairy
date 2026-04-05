<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

// Get the 'data' parameter from eSewa's redirect
$encodedData = $_GET['data'] ?? null;

if (!$encodedData) {
    die(json_encode(["error" => "No response data received from eSewa."]));
}

// 1. Decode the Base64 response
$decodedData = base64_decode($encodedData);
$response = json_decode($decodedData, true);

if (!$response || !isset($response['status'])) {
    die(json_encode(["error" => "Invalid response format."]));
}

// 2. Prepare data for signature verification
// The message format must exactly match eSewa's requirement:
// "transaction_code={value},status={value},total_amount={value},transaction_uuid={value},product_code={value},signed_field_names={value}"
$message = "transaction_code=" . $response['transaction_code'] . 
           ",status=" . $response['status'] . 
           ",total_amount=" . $response['total_amount'] . 
           ",transaction_uuid=" . $response['transaction_uuid'] . 
           ",product_code=" . $response['product_code'] . 
           ",signed_field_names=" . $response['signed_field_names'];

// Use the Secret Key provided by eSewa (Test key: 8gBm/:&EnhH.1/q)
$secretKey = "8gBm/:&EnhH.1/q"; 
$s = hash_hmac('sha256', $message, $secretKey, true);
$localSignature = base64_encode($s);

// 3. Verify Signature & Status
if ($localSignature === $response['signature'] && $response['status'] === 'COMPLETE') {
    try {
        // Here you would update your 'orders' table in the database
        // $stmt = $pdo->prepare("UPDATE orders SET status = 'paid' WHERE transaction_id = ?");
        // $stmt->execute([$response['transaction_uuid']]);

        echo "<h1>Payment Successful!</h1>";
        echo "<p>Thank you for your order. Your transaction ID is: " . htmlspecialchars($response['transaction_uuid']) . "</p>";
        echo "<a href='http://localhost:5173/history'>View Order History</a>";
    } catch (PDOException $e) {
        die("Database Error: " . $e->getMessage());
    }
} else {
    echo "<h1>Payment Verification Failed</h1>";
    echo "<p>The signature mismatch or payment status is incomplete.</p>";
}