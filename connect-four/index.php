<?php
/* Header */
$page_title = 'Connect4';
$navigation = Array(
    'active' => 'Connect4',
    'items' => Array(
        'Connect4' => '../connect-four/index.php'
    )
);
include __DIR__ . '/tpl/head.php';

include __DIR__ . '/tpl/body_start.php';
?>

    <div class="currentPlayer"><span class="player"></span>
        <div class="board"></div>
        <div class="message"></div>
        <div class="restart">
            <button class="playAgain">Play Again</button>
        </div>
    </div>

<script src="scripts/main.js"></script>

<?php
include __DIR__ . '/tpl/body_end.php';
?>
