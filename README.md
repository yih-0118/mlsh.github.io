# "校校慶慶"
# 答題遊戲製作介紹
* Github 連結：https://github.com/yih-0118/mlsh.github.io
* 網頁連結：https://yih-0118.github.io/mlsh.github.io/%E6%A0%A1%E6%A0%A1%E6%85%B6%E6%85%B6/index.html
* HackMD 連結：https://hackmd.io/@yih0118/rJnrYIuQT
## HTML
### 建立標題
```xml=
<h1>明倫知多少？</h1>
```
### 插入題目
1. 建立`id`為`question`的`div`
```xml=
<div id="question"></div>
```
### 建立選項
1. 建立`id`為`options`的`div`
2. 製作四個選項的按鈕，id依序為`option-1 ~option-4`
3. 與題目庫作為連結，為方便陣列統整，`onclick="check_answer(0)"~onclick="check_answer(3)"`
```xml=
<div id="options">
    <button id="option-1" onclick="check_answer(0)"></button>
    <button id="option-2" onclick="check_answer(1)"></button>         
    <button id="option-3" onclick="check_answer(2)"></button>
    <button id="option-4" onclick="check_answer(3)"></button>
</div>
```
### 建立分數容器
1. 建立`id`為`score-container`的`div`
2. 建立`id`為`score`的`span`
```xml=
<div id="">
    答對題數: <span id="score">0</span>
</div>
```
### 建立最終畫面
1. 放置在最上方，先隱藏，遊戲結束後再顯示
```xml=
<div id="end-container" style="display: none;">
    <div id="end-container-text">遊戲結束</div>
    <div id="end-container-score">答對題數: <span id="score-end">0</span></div>
    <div id="end-container-length_questions">共 <span id="length_question"> 0 </span> 題</div>
</div>
```
### 引入
1. 引入題目庫
```xml=
<script src="Questions Repositories.js"></script>
```
2. 引入規則庫
```xml=
<script src="rule.js"></script>
```
3. 引入CSS
```xml=
<link rel="stylesheet" href="style.css">
```
---
## Javascript
### 建立變數
```javascript=
const score_element = document.getElementById("score");
const end_container = document.getElementById("end-container");
const game_over_score = document.getElementById("score-end");
const length_question = document.getElementById("length_question");

let score = 0; 
let current_question_index = 0; 
```
### 題目內
1. 先確認題目庫長度小於，這樣題目才能進行
```javascript=
function show_question(index) {
    if (index < questions.length) {
        ...
    }
}
```
#### 建立題目變數
```javascript=
const questionElement = document.getElementById("question");
```
#### 顯示題號
```javascript=
questionElement.textContent = current_question_index + 1 + (". ") + questions[index].question; 
```
---
### 創建選項
1. 先建立選項變數
2. 清空內容
```javascript=
const optionsElement = document.getElementById("options");
optionsElement.innerHTML = "";
```
#### 填充選項
1. 題目庫內的先跑一遍
```javascript=
questions[index].options.forEach((option, i) => {
        ...
        });
```
#### 建立按鈕變數
```javascript=
const button = document.createElement("button");
```
#### 選項內容及題號
1. 用ASCII碼，建立選項編號
2. 選項內容 option
```javascript=
button.textContent = "(" + String.fromCharCode(65 + i) + ") " + option;
```
#### 確認選項及接連下一題
```javascript=
button.onclick = () => check_answer(i);
optionsElement.appendChild(button);
```
#### length已盡，故遊戲結束
```javascript=
else {
    end_container.style.display = "block";
    }
```
---
### 分數的變動
```javascript=
function check_answer(selected_index) {
    ...
}
```
1. 如果選項正確，加分
2. 如果答錯，顯示"答錯了"
```javascript=
if (selected_index === questions[current_question_index].correct_answer) {
        score += 1;
        game_over_score.textContent = score;
        score_element.textContent = score;
    } else {
        alert("答錯了唷！")
    }
```
3. 更新題目，變數+1
```javascript=
current_question_index++;
show_question(current_question_index);
```

#### 回傳
```javascript=
game_over_score.innerHTML = score;
score_element.innerHTML = score;
length_question.innerHTML = questions.length;
show_question(current_question_index);
```
---
### 題目庫示範
```javascript=
const questions = [
    {
        question: "請問除了太陽之外距離明倫高中最近的恆星是？",
        options: ["南門二","半人馬座α星C","天狼星","參宿四"],
        correct_answer: 1
    },
```
很多之類的～

---
