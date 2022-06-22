<?php
/* Header */
$page_title = 'Connect four';
$navigation = Array(
    'active' => 'Connect four',
    'items' => Array(
        'Connect four' => '/WP22/connect-four/index.php'
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
