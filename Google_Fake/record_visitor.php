<?php
// CORS 헤더 설정
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// MySQL 데이터베이스 연결 설정
require 'db.php';

// POST로 전달된 방문자 정보 가져오기
$ip = $_POST['ip'];
$userAgent = $_POST['userAgent'];

// 데이터베이스에 방문자 정보 저장
$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
	die('데이터베이스 연결 실패: ' . $conn->connect_error);
}

// Prepared Statement를 사용하여 쿼리 실행
$sql = "INSERT INTO visitor_info (ip, user_agent) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $ip, $userAgent);

if ($stmt->execute()) {
  echo '방문자 정보가 성공적으로 기록되었습니다.';
} else {
  echo '방문자 정보 기록 중 오류가 발생했습니다.';
}

$stmt->close();
$conn->close();
?>
