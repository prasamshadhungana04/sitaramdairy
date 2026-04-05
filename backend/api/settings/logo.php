<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['logo'])) {
    $targetDir = "../../uploads/settings/";
    if (!is_dir($targetDir)) mkdir($targetDir, 0777, true);
    
    $fileName = "site_logo_" . time() . ".png";
    $targetFile = $targetDir . $fileName;

    if (move_uploaded_file($_FILES["logo"]["tmp_name"], $targetFile)) {
        $logoUrl = "/backend/uploads/settings/" . $fileName;
        // You could store this URL in a 'settings' table in the DB
        echo json_encode(["success" => true, "logo_url" => $logoUrl]);
    }
} else {
    // GET request to fetch current logo
    echo json_encode(["logo_url" => "/vite.svg"]); // Default fallback
}
?>