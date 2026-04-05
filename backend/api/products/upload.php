<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $price = $_POST['price_npr'];
    $category = $_POST['category'];
    
    // Handle File
    if (isset($_FILES['image'])) {
        $target_dir = "../../uploads/products/";
        if (!file_exists($target_dir)) mkdir($target_dir, 0777, true);
        
        $file_name = time() . "_" . basename($_FILES["image"]["name"]);
        $target_file = $target_dir . $file_name;
        
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            // Success! Save path to DB
            $image_url = "http://localhost/backend/uploads/products/" . $file_name;
            
            $sql = "INSERT INTO products (name, price_npr, category, image_url) VALUES (?, ?, ?, ?)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$name, $price, $category, $image_url]);
            
            echo json_encode(["message" => "Product uploaded successfully", "url" => $image_url]);
        } else {
            echo json_encode(["message" => "Failed to upload image"]);
        }
    }
}
?>