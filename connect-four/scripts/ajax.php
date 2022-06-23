<?php
$player = $_POST['player'];
$square = $_POST['square'];
$entry_array = array("square" => $square, "player" => $player);
$entry_json = json_encode($entry_array);
file_put_contents('../data/game_data.json', PHP_EOL . $entry_json, FILE_APPEND)
?>