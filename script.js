let board = ["", "", "", "", "", "", "", "", ""];
function makeMove(i) {
    if (board[i] === "") {
        board[i] = "O";
        render();
        setTimeout(cpuMove, 500);
    }
}
function cpuMove() {
    let empty = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    if (empty.length > 0) {
        board[empty[Math.floor(Math.random() * empty.length)]] = "X";
        render();
    }
}
function render() {
    const cells = document.querySelectorAll('.cell');
    board.forEach((v, i) => cells[i].innerText = v);
}
function reset() {
    board = ["", "", "", "", "", "", "", "", ""];
    render();
}