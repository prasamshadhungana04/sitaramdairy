// backend/api/settings/logo.php
<?php
require_once "../../config/cors.php";
require_once "../../config/database.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->prepare("SELECT value FROM settings WHERE `key` = 'site_logo'");
    $stmt->execute();
    echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['logo'])) {
    $upload_dir = "../../uploads/logos/";
    if (!file_exists($upload_dir)) mkdir($upload_dir, 0777, true);

    $file_name = "logo_" . time() . ".png";
    move_uploaded_file($_FILES['logo']['tmp_name'], $upload_dir . $file_name);
    
    $url = "http://localhost/backend/uploads/logos/" . $file_name;
    $stmt = $pdo->prepare("INSERT INTO settings (`key`, `value`) VALUES ('site_logo', ?) ON DUPLICATE KEY UPDATE `value` = ?");
    $stmt->execute([$url, $url]);

    echo json_encode(["logo_url" => $url]);
}
?>