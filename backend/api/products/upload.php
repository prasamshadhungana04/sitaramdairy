<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $category = $_POST['category'];
    $price = $_POST['price_npr'];
    $stock = $_POST['stock_quantity'];
    $description = $_POST['description'];
    
    $imagePath = "";

    // Handle Image Upload
    if (isset($_FILES['image'])) {
        $targetDir = "../../uploads/";
        $fileName = time() . "_" . basename($_FILES["image"]["name"]);
        $targetFilePath = $targetDir . $fileName;
        
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)) {
            // This URL is what the frontend will use to display the image
            $imagePath = "/backend/uploads/" . $fileName;
        }
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO products (name, category, price_npr, stock_quantity, description, image_url) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$name, $category, $price, $stock, $description, $imagePath]);
        
        echo json_encode(["success" => true, "message" => "Product added successfully"]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>