/**
 * 方塊下降方法
 * 如果下方無碰壁，將方塊向下移動；否則鎖定方塊，生成新的方塊。
 */
Piece.prototype.moveDown = function () {
    if (!this.detect_wall(0, 1, this.active_blocks)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {
        this.lock();
        p = random_piece();
    }
}

/**
 * 方塊右移方法
 * 如果右方無碰壁，將方塊向右移動；否則鎖定方塊，生成新的方塊。
 */
Piece.prototype.moveRight = function () {
    if (!this.detect_wall(1, 0, this.active_blocks)) {
        this.unDraw();
        this.x++;
        this.draw();
        this.moveDown();
        dropStart = Date.now();
    }
}

/**
 * 方塊左移方法
 * 如果左方無碰壁，將方塊向左移動；否則鎖定方塊，生成新的方塊。
 */
Piece.prototype.moveLeft = function () {
    if (!this.detect_wall(-1, 0, this.active_blocks)) {
        this.unDraw();
        this.x--;
        this.draw();
        this.moveDown();
        dropStart = Date.now();
    }
}

/**
 * 方塊旋轉方法
 * 根據下一個旋轉模式進行旋轉，並檢查碰撞情況。如果碰到邊界，進行踢擊避免卡住。
 * 如果旋轉後下方無碰壁，也將方塊向下移動。
 */
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


Piece.prototype.detect_wall = function (x, y, piece) {
    for (let r = 0; r < piece.length; r++) {
        for (let c = 0; c < piece[r].length; c++) {
            // 如果方塊中的某個單元格是空的，繼續檢查下一個
            if (!piece[r][c]) {
                continue;
            }

            // 計算移動後的新座標
            let newX = this.x + c + x;
            let newY = this.y + r + y;

            // 判斷是否超出遊戲區域的邊界
            if (newX < 0 || newX >= COLUMN || newY >= ROW) {
                return true; // 發生邊界碰撞
            }

            // 如果移動後的位置在上方區域之外，繼續檢查下一個
            if (newY < 0) {
                continue;
            }

            // 檢查移動後的位置是否已經有方塊存在（碰撞檢測）
            if (board[newY][newX] !== NONE) {
                return true; // 發生方塊碰撞
            }
        }
    }
    return false; // 沒有碰撞
};



/**
 * 鎖定方塊，並檢查是否有滿行需要消除
 */
Piece.prototype.lock = function () {
    for (let r = 0; r < this.active_blocks.length; r++) {
        for (let c = 0; c < this.active_blocks[r].length; c++) {
            // 白的不鎖定
            if (!this.active_blocks[r][c]) {
                continue;
            }
            // 觸頂遊戲結束
            if (this.y + r < 0) {
                alert("Game Over");
                gameOver = true;
                break;
            }
            // 鎖定確定，將方塊的顏色填入遊戲區域
            board[this.y + r][this.x + c] = this.color;
        }
    }

    // 檢查是否有滿行需要消除
    for (let r = 0; r < ROW; r++) {
        let isRowFull = true;
        for (let c = 0; c < COLUMN; c++) {
            isRowFull = isRowFull && (board[r][c] !== NONE);
        }
        if (isRowFull) {
            // 如果那一列都不是 NONE，將上方所有的方塊下移
            for (let y = r; y > 1; y--) {
                for (let c = 0; c < COLUMN; c++) {
                    board[y][c] = board[y - 1][c];
                }
            }
            // 下移後那一行變為白色
            for (let c = 0; c < COLUMN; c++) {
                board[0][c] = NONE;
            }
            // 更新分數、等級等
            score += 10;
            level += 1;
            hardmode += 1;
            if (hardmode >= 22) {
                hardmode = 22; // 限制 hardmode 不超過 22
            }
        }
    }

    // 更新遊戲區域的顯示
    draw_board();

    // 更新分數和等級的顯示
    scoreElement.innerHTML = score;
    levelElement.innerHTML = level;
};



/**
 * 旋轉方塊
 */
Piece.prototype.rotate = function () {
    // 取得下一個旋轉模式
    let nextPattern = this.blocks[(this.rotation_cnt + 1) % this.blocks.length];
    let kick = 0;

    // 檢查是否在旋轉時碰到牆壁
    if (this.detect_wall(0, 0, nextPattern)) {
        // 如果在右側，則向左移動一格；在左側，則向右移動一格
        if (this.x > COLUMN / 2) {
            kick = -1;
        } else {
            kick = 1;
        }
    }

    // 如果沒有碰到牆壁，執行旋轉
    if (!this.detect_wall(kick, 0, nextPattern)) {
        this.unDraw(); // 清除當前方塊的顯示
        this.x += kick; // 移動方塊
        this.rotation_cnt = (this.rotation_cnt + 1) % this.blocks.length; // 更新旋轉狀態
        this.active_blocks = this.blocks[this.rotation_cnt]; // 取得更新後的方塊形狀
        this.draw(); // 重新顯示旋轉後的方塊

        // 如果旋轉後下方沒有障礙物，則向下移動一格
        if (!this.detect_wall(0, 1, this.active_blocks)) {
            this.unDraw(); // 清除當前方塊的顯示
            this.y++; // 向下移動一格
            this.draw(); // 重新顯示移動後的方塊
        }
    }
};
