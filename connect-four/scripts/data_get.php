<?php
if (isset($_POST['call_now'])) {
    // Read game data from JSON file
    $json_file = file_get_contents("../data/game_data.json");
    $game_data = json_decode($json_file, true);
    $game_data = array_reverse($game_data);

    // Create string representation of game data
    $game_data_str = "";
    foreach ($game_data as $key => $value) {
        $game_data_str .= $value['square'];
        $game_data_str .= ":";
        $game_data_str .= $value['player'];
        $game_data_str .= ",";
    }
    // Save game data into an array
    $export_data = [
        'game_data' => $game_data_str
    ];
    // Return JSON data
    header('Content-Type: application/json');
    echo json_encode($export_data);
}
?>
