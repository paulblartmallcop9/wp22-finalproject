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

    <div class="currentPlayer">The current player is
        <span class="player"></span>
        <div class="board"></div>
        <div class="restart">
            <button class="playAgain">play again</button>
        </div>
    </div>

<script src="scripts/main.js"></script>

<?php
include __DIR__ . '/tpl/body_end.php';
?>
