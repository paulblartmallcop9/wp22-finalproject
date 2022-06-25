<?php
$json_file = file_get_contents("../data/game_data.json");
$game_data = json_decode($json_file, true);
$game_data = array_reverse($game_data);
$last_move = $game_data[0];
?>