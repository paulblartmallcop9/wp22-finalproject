<?php
// Retrieve game data from JSON file
$json_file = file_get_contents("../data/game_data.json");
$game_data = json_decode($json_file, true);

// Unset each data entry in the game data
foreach ($game_data as $key => $value) {
    unset($game_data[$key]);
    break;
}

// Rewrite the game data to empty list
$json_file = fopen("../data/game_data.json", "w");
fwrite($json_file, json_encode([]));
fclose($json_file);
?>