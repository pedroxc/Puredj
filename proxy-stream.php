<?php
header('Content-Type: application/javascript; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Try with cURL first (more reliable)
if (function_exists('curl_init')) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'http://cast.suaradionanet.net:2199/system/streaminfo.js');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $data = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($data === false) {
        echo "// Error: " . $error;
    } else {
        echo $data;
    }
} else {
    // Fallback to file_get_contents
    $data = @file_get_contents('http://cast.suaradionanet.net:2199/system/streaminfo.js');
    if ($data === false) {
        echo "// Error: Could not fetch stream info";
    } else {
        echo $data;
    }
}
?>
