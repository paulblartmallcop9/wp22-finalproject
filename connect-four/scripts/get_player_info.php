<?php
if (isset($_POST['call_now'])) {
    // Read game data from JSON file
    $json_file = file_get_contents("../data/playerInfo.json");
    $player_info = json_decode($json_file, true);
    $player_info = array_reverse($player_info);

    $player_info_str = "";
    foreach ($game_data as $value) {
        $game_data_str .= $value['player'];
        $game_data_str .= ",";
    }
    // Save game data into an array
    $export_data = [
        'player_info' => $player_info_str
    ];
    // Return JSON data
    header('Content-Type: application/json');
    echo json_encode($export_data);
}
?>