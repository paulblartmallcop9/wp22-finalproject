<?php
$json_file = file_get_contents("../data/game_data.json");
$game_data = json_decode($json_file, true);
foreach ($game_data as $key => $value){
    unset($game_data[$key]);
    break;
}
$json_file = fopen('../data/game_data.json', 'w');
fwrite($json_file, json_encode($game_data));
fclose($json_file);
?>