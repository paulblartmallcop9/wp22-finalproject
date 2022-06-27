<?php
// Retrieve new player turn data
$player = $_POST['player'];
$square = $_POST['square'];
$entry_array = array('square' => $square, 'player' => $player);
$entry_json = json_encode($entry_array);

// Add new data to existing data
$json_file = file_get_contents("../data/game_data.json");
$game_data = json_decode($json_file, true);
array_push($game_data, [
    'square' => $square,
    'player' => $player
]);

// Save to external file
$json_file = fopen("../data/game_data.json", "w");
fwrite($json_file, json_encode($game_data));
fclose($json_file);
?>