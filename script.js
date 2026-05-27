let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let playerScore = 0;
let cpuScore = 0;

function makeMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = "O";
        draw();
        if (!checkWin()) {
            document.getElementById("status").innerText = "電腦思考中...";
            setTimeout(cpuMove, 500); 
        }
    }
}

function cpuMove() {
    let empty = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    if (empty.length > 0 && !gameOver) {
        let move = empty[Math.floor(Math.random() * empty.length)];
        board[move] = "X";
        draw();
        if (!checkWin()) {
            document.getElementById("status").innerText = "輪到你了 (O)";
        }
    }
}

function draw() {
    const cells = document.querySelectorAll('.cell');
    board.forEach((val, i) => {
        cells[i].innerText = val;
        // 根據 O 或 X 給予不同的顏色 class
        if (val === "O") {
            cells[i].className = "cell o-style";
        } else if (val === "X") {
            cells[i].className = "cell x-style";
        } else {
            cells[i].className = "cell";
        }
    });
}

function checkWin() {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let [a,b,c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById("status").innerText = "遊戲結束！";
            
            // 判斷誰贏並增加分數
            if (board[a] === "O") {
                playerScore++;
                document.getElementById("player-score").innerText = playerScore;
                alert("恭喜！你贏了！");
            } else {
                cpuScore++;
                document.getElementById("cpu-score").innerText = cpuScore;
                alert("可惜！電腦贏了！");
            }
            gameOver = true;
            return true;
        }
    }
    if (!board.includes("")) { 
        document.getElementById("status").innerText = "雙方平手！";
        alert("平手！再試一次吧。"); 
        gameOver = true; 
        return true; 
    }
    return false;
}

function reset() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    document.getElementById("status").innerText = "輪到你了 (O)";
    draw();
}