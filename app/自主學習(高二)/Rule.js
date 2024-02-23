const cvs = document.getElementById("tetris");
const ctx = tetris.getContext("2d");//用canvas做畫布

const scoreElement = document.getElementById("score");
const levelElement = document.getElementById("level");//版面元素，分數與等級

const pauseButton = document.getElementById("pause-button");
const restartButton = document.getElementById("restart-button");
const moveLeftButton = document.getElementById("move-left-button");
const moveRightButton = document.getElementById("move-right-button");
const moveDownButton = document.getElementById("move-down-button");
const rotateButton = document.getElementById("rotate-button");//連結按鈕

let isPaused = false; //暫停要素

const ROW = 20;//行
const COLUMN = 10;//列
const square_side = 20;//每個方格的邊長
const NONE = "WHITE"; // 空值方格顏色

cvs.width = COLUMN * square_side; //總共的寬度：列數＊每個方格的邊長
cvs.height = ROW * square_side;//總共的長度：行數＊每個方格的邊長

// 創造遊戲執行區域的二維陣列
let board = [];
for (r = 0; r < ROW; r++) {
    board[r] = [];
    for (c = 0; c < COLUMN; c++) {
        board[r][c] = NONE;
    }
}

// 畫每個方格
function draw_square(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * square_side, y * square_side, square_side, square_side);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.strokeRect(x * square_side + 0.5, y * square_side + 0.5, square_side, square_side);
}

// 畫遊戲執行區域
function draw_board() {
    for (r = 0; r < ROW; r++) {
        for (c = 0; c < COLUMN; c++) {
            draw_square(c, r, board[r][c]);
        }
    }
}

draw_board();

// 每個下墜方塊的樣式
const PIECES =
    [
        [I, "rgb(244, 179, 80)"],    // Macaron Yellow
        [J, "rgb(180, 219, 184)"],   // Macaron Green
        [L, "rgb(231, 167, 199)"],   // Macaron Pink
        [O, "rgb(171, 204, 247)"],   // Macaron Blue
        [S, "rgb(235, 174, 149)"],   // Macaron Orange
        [T, "rgb(200, 242, 255)"],   // Macaron Light Blue
        [Z, "rgb(186, 177, 214)"],   // Macaron Purple

        //跳脫傳統模式，由五個方格組成的
        [U, "rgb(255, 209, 220)"],   // Macaron Light Pink
        [Q, "rgb(167, 219, 216)"],   // Macaron Aqua
        [P, "rgb(255, 219, 172)"],   // Macaron Peach
        [H, "rgb(255, 191, 186)"],   // Macaron Salmon
        [K, "rgb(245, 231, 188)"],   // Macaron Pale Yellow
        [M, "rgb(180, 237, 255)"],   // Macaron Sky Blue
        [N, "rgb(166, 217, 169)"],   // Macaron Soft Green
        [V, "rgb(255, 243, 132)"],   // Macaron Bright Yellow
        [Z5, "rgb(234, 179, 223)"],  // Macaron Light Purple
        [S5, "rgb(223, 189, 252)"],  // Macaron Lavender
        [W, "rgb(180, 231, 255)"],   // Macaron Light Blue
        [X, "rgb(255, 207, 165)"],   // Macaron Light Orange
        [G, "rgb(163, 239, 184)"],   // Macaron Pastel Green
        [A, "rgb(211, 182, 232)"],   // Macaron Lilac
        [I5, "rgb(249, 205, 173)"]   // Macaron Yellow
    ];

let level = 1;
let hardmode = 8;
let score = 0;//先設定版面元素，分數與等級

function random_piece() {
    if (score < 30) {
        let r = Math.floor(Math.random() * 7);
        return new Piece(PIECES[r][0], PIECES[r][1]);
    } else {
        r = Math.floor(Math.random() * hardmode);
        return new Piece(PIECES[r][0], PIECES[r][1]);
    }
}

let p = random_piece();

function Piece(blocks, color) {
    this.blocks = blocks;//類別
    this.color = color;
    this.rotation_cnt = 0; 
    this.active_blocks = this.blocks[this.rotation_cnt];
    // 開始生成點位置，二維陣列
    this.x = 3;
    this.y = -2;
}

// 填充顏色
Piece.prototype.fill = function (color) {
    for (r = 0; r < this.active_blocks.length; r++) {
        for (c = 0; c < this.active_blocks.length; c++) {
            // 我們只填充該值＝1的
            if (this.active_blocks[r][c]) {
                draw_square(this.x + c, this.y + r, color);
            }
        }
    }
}

// 在畫布上畫方塊
Piece.prototype.draw = function () {
    this.fill(this.color);
}

// 清除方塊
Piece.prototype.unDraw = function () {
    this.fill(NONE);
}

// 方塊下降
Piece.prototype.moveDown = function () {
    if (!this.detect_wall(0, 1, this.active_blocks)) {  //(x變化量, y變化量, this.active_blocks)。下方無碰壁
        this.unDraw();
        this.y++;
        this.draw();
    }
    else {
        // 鎖定方塊並生成新的
        this.lock();
        p = random_piece();
    }

}

// 方塊右移
Piece.prototype.moveRight = function () {
    if (!this.detect_wall(1, 0, this.active_blocks)) {//右方無碰壁
        this.unDraw();
        this.x++;
        this.draw();
        this.moveDown(); // 當右移時，方塊也下降
        dropStart = Date.now(); // 計時器重啟，每 N ms下降一次
    }
}

// 方塊左移
Piece.prototype.moveLeft = function () {
    if (!this.detect_wall(-1, 0, this.active_blocks)) {
        this.unDraw();
        this.x--;
        this.draw();
        this.moveDown(); // 當左移時，方塊也下降
        dropStart = Date.now(); // 計時器重啟，每 N ms下降一次
    }
}

// 方塊旋轉
Piece.prototype.rotate = function () {
    let nextPattern = this.blocks[(this.rotation_cnt + 1) % this.blocks.length];
    let kick = 0;

    if (this.detect_wall(0, 0, nextPattern)) {
        if (this.x > COLUMN / 2) {
            kick = -1;
        }
        else {
            kick = 1;
        }
    }

    if (!this.detect_wall(kick, 0, nextPattern)) {
        this.unDraw();
        this.x += kick;
        this.rotation_cnt = (this.rotation_cnt + 1) % this.blocks.length;
        this.active_blocks = this.blocks[this.rotation_cnt];
        this.draw();

        // 如果轉的時候下面空的也下移
        if (!this.detect_wall(0, 1, this.active_blocks)) {
            this.unDraw();
            this.y++;
            this.draw();
        }
    }
}


Piece.prototype.lock = function () {
    for (r = 0; r < this.active_blocks.length; r++) {
        for (c = 0; c < this.active_blocks.length; c++) {
            // 白的不鎖定
            if (!this.active_blocks[r][c]) {
                continue;
            }
            // 觸頂遊戲結束
            if (this.y + r < 0) {
                alert("Game Over")
                gameOver = true;
                break;
            }
            // 鎖定確定
            board[this.y + r][this.x + c] = this.color;
        }
    }
    // 刪除行
    for (r = 0; r < ROW; r++) {
        let isRowFull = true;
        for (c = 0; c < COLUMN; c++) {
            isRowFull = isRowFull && (board[r][c] != NONE);
        }
        if (isRowFull) {
            // 如果那一列都不是NONE
            // 將上方所有的方塊下移
            for (y = r; y > 1; y--) {
                for (c = 0; c < COLUMN; c++) {
                    board[y][c] = board[y - 1][c];
                }
            }
            //下移後那一行變白
            for (c = 0; c < COLUMN; c++) {
                board[0][c] = NONE;
            }
            // 變更分數等級等等
            score += 10;
            level += 1;
            hardmode += 1;
            if (hardmode >= 22)//限制 22
            {
                hardmode = 22;
            }
        }
    }
    draw_board();

    scoreElement.innerHTML = score;
    levelElement.innerHTML = level;
}

// 碰撞判定
Piece.prototype.detect_wall = function (x, y, piece) {
    for (r = 0; r < piece.length; r++) {
        for (c = 0; c < piece.length; c++) {
            // 如果是空值，那繼續
            if (!piece[r][c]) {
                continue;
            }
            // 移動後的新碰撞
            let newX = this.x + c + x;
            let newY = this.y + r + y;

            // 判定邊界
            if (newX < 0 || newX >= COLUMN || newY >= ROW) {
                return true;
            }
            // 代表疊得過高，超越上方邊界
            if (newY < 0) {
                continue;
            }
            // 旋轉的地方是空的
            if (board[newY][newX] != NONE) {
                return true;
            }
        }
    }
    return false;
}

// 用鍵盤控制
document.addEventListener("keydown", CONTROL);

function CONTROL(event) {
    if (event.keyCode == 37) {
        p.moveLeft();
        dropStart = Date.now();
    } else if (event.keyCode == 38) {
        p.rotate();
        dropStart = Date.now();
    } else if (event.keyCode == 39) {
        p.moveRight();
        dropStart = Date.now();
    } else if (event.keyCode == 40) {
        p.moveDown();
    }
}

rotateButton.addEventListener("click", () => {
    p.rotate();
    dropStart = Date.now();
});

moveDownButton.addEventListener("click", () => {
    p.moveDown();
});

moveLeftButton.addEventListener("click", () => {
    p.moveLeft();
    dropStart = Date.now();
});

moveRightButton.addEventListener("click", () => {
    p.moveRight();
    dropStart = Date.now();
});

pauseButton.addEventListener("click", () => {
    if (isPaused) {
        isPaused = false;
        drop();
        pauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        isPaused = true;
        pauseButton.innerHTML = '<i class="fas fa-play"></i> Resume';
    }
});

restartButton.addEventListener("click", () => {
    location.reload();
});

// 方塊下降控制
let dropStart = Date.now();
let gameOver = false;

function drop() {
    let now = Date.now();
    let delta = now - dropStart;

    if (isPaused) {
        requestAnimationFrame(drop);
        return;
    }

    if (delta > 250) {
        p.moveDown();
        dropStart = Date.now();
    }

    if (!gameOver) {
        requestAnimationFrame(drop);
    }
}


drop();
