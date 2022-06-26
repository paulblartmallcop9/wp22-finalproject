let board=document.querySelector(".board")
let player=document.querySelector(".player")
let message=document.querySelector(".message")
let playAgain=document.querySelector(".playAgain")
let restart=document.querySelector(".restart")
let gameData = []
let winStatus = false
let winningArray = [
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10],
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24],
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31],
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22],
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18],
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24],
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10],
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17],
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18],
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25],
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32],
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4],
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25],
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30],
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
];
let currentPlayer=1
document.addEventListener("DOMContentLoaded", reset)
//load dom function

function loadDOM(){
    createBoard()
    player.innerHTML=`Player Turn: Player ${currentPlayer} (Red)`
    playAgain.addEventListener("click",reset)
    let squares =document.querySelectorAll(".board div")
    Array.from(squares).forEach(square=>{
        square.addEventListener("click",clickBox)

    })
}
// createBoard function

function createBoard(){
    for(let i=0;i<49;i++){
        let div =document.createElement("div")
        div.setAttribute("data-id",i)
        div.className = "square"
        if (i>=42){
            div.className="taken"
        }
        board.appendChild(div)
    }
}
//clickBoard function

function clickBox(){
    let squares =document.querySelectorAll(".board div")
    let click =parseInt(this.dataset.id)
    message.innerHTML = ""
    if( squares[click+7].classList.contains("taken") && !squares[click].classList.contains("taken") && winStatus === false){
        let newEntry = {"square": this.dataset.id, "player": currentPlayer}
        gameData.push(newEntry)
        console.log(newEntry)
        $.ajax({
            url: 'scripts/ajax.php', //This is the current doc
            type: "POST",
            dataType:'json', // add json datatype to get json
            data: newEntry,
            success: function(data){
                console.log(data);
            }
        });
        $.ajax({
            url: "scripts/open_json.php",
            type: 'GET',
            dataType: 'json', // added data type
            success: function(data) {
                console.log(data);
            }
        });
        console.log($data);
//        $last_move = $.getJSON('data/game_data.json')[-1];
//        console.log($last_move);
        if(currentPlayer===1){
            currentPlayer=2
            player.innerHTML=`Player Turn: Player ${currentPlayer} (Yellow)`
            this.className="player-one taken"
            checkWon()
            checkTie()
        }else if(currentPlayer===2){
            currentPlayer=1
            player.innerHTML=`Player Turn: Player ${currentPlayer} (Red)`
            this.className="player-two taken"
            checkWon()
            checkTie()
        }
    }else{
        // alert("You cannot build on an empty space or on a space that has not been built on")
        if(winStatus === false) {
            message.innerHTML = "You cannot build on an empty space or on a space that has not been built on!"
        }
        else {
            message.innerHTML = "The game is over!"
        }
    }
}
//the checkWon function

function checkWon(){
    let squares =document.querySelectorAll(".board div")
    for (let y=0;y<winningArray.length;y++){
        let square =winningArray[y]
        if(square.every(q=>squares[q].classList.contains("player-one"))){
            setTimeout(() =>player.innerHTML = "Player 1 (Red) wins!")
            setTimeout(() =>restart.style.display="flex", 500)
            winStatus = true
        }else if(square.every(q=>squares[q].classList.contains("player-two"))){
            setTimeout(() =>player.innerHTML = "Player 2 (Yellow) wins!")
            setTimeout(() =>restart.style.display="flex", 500)
            winStatus = true
        }
    }
}
//checkTie function

function checkTie(){
    let squares =document.querySelectorAll(".board div")
    allSquares = document.getElementsByClassName("square")
    if (allSquares.length === 0) {
        setTimeout(() =>alert("it is a tie! "), 200)
        setTimeout(() =>restart.style.display="flex", 500)
    }
}


function reset(){
    board.innerHTML=""
    winStatus = false
    currentPlayer = 1
    gameData = []
    message.innerHTML = ""
    loadDOM()
    restart.style.display="none"
    $.ajax({
        url: 'scripts/clear_board.php', //This is the current doc
        type: "GET"
    });
}