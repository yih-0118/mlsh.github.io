Vocabulary Flashcard Overview
=============================

Website Introduction
--------------------

-   There are flashcards and a quiz section on the website!![yih-0118.github.io_mlsh.github.io_%E5%96%AE%E5%AD%97_indi_va.html(iPhone 6_7_8 Plus)](https://hackmd.io/_uploads/BysPkA036.png)

-   The quiz section is divided into `看英文選中文`and`看中文選英文`. The rest are flashcards.

### Vocabulary Flashcards

-   The index on the top left can adjust the order of flashcards. There are directional arrows on the bottom right to switch between cards. There is a lightbulb icon on the bottom left that will reveal the Chinese when pressed. ![yih-0118.github.io_mlsh.github.io_%E5%96%AE%E5%AD%97_html_vocabulary(L2%20Unit1).html(Pixel 7) (1)](https://hackmd.io/_uploads/rJmqJ0RnT.png)
![yih-0118.github.io_mlsh.github.io_%E5%96%AE%E5%AD%97_html_vocabulary(L2%20Unit1).html(Pixel 7)](https://hackmd.io/_uploads/SJfcJ0Cha.png)


### Quiz Section

-   It is divided into two parts `看英文選中文`and`看中文選英文`. After selecting a chapter, you can start! ![yih-0118.github.io_mlsh.github.io_%E5%96%AE%E5%AD%97_e2c.html(Samsung Galaxy S8+)](https://hackmd.io/_uploads/Syhjy002a.png)

---

# Quiz Game Development Overview

-   Github link: [https://github.com/yih-0118/mlsh.github.io](https://github.com/yih-0118/mlsh.github.io)
-   Webpage link: [https://yih-0118.github.io/mlsh.github.io/%E6%A0%A1%E6%A0%A1%E6%85%B6%E6%85%B6/index.html](https://yih-0118.github.io/mlsh.github.io/%E6%A0%A1%E6%A0%A1%E6%85%B6%E6%85%B6/index.html)
-   HackMD link: https://hackmd.io/@yih0118/rklFyi_Q6

## HTML
### Create heading
```xml=
<h1>明倫知多少？</h1>
```
### Insert question
1.  Create `div` with `id` as `question`
```xml=
<div id="question"></div>
```
### Create options
1.  Create `div` with `id` as `options`
2.  Make four option buttons, `id` in order `option-1` to `option-4`
3.  Connect to question repositories, for easy array organization, `onclick="check_answer(0)"` to `onclick="check_answer(3)"`

```xml=
<div id="options">
    <button id="option-1" onclick="check_answer(0)"></button>
    <button id="option-2" onclick="check_answer(1)"></button>         
    <button id="option-3" onclick="check_answer(2)"></button>
    <button id="option-4" onclick="check_answer(3)"></button>
</div>
```
### Create score container

1.  Create `div` with `id` as `score-container`
2.  Create `span` with `id` as `score`

```xml=
<div id="">
    答對題數: <span id="score">0</span>
</div>
```
### Create end screen
1.  Place at top, initially hidden, show after game ends

```xml=
<div id="end-container" style="display: none;">
    <div id="end-container-text">遊戲結束</div>
    <div id="end-container-score">答對題數: <span id="score-end">0</span></div>
    <div id="end-container-length_questions">共 <span id="length_question"> 0 </span> 題</div>
</div>
```
### Import 
1. Import question repositories

```xml=
<script src="Questions Repositories.js"></script>
```
2. Import rule repositories

```xml=
<script src="rule.js"></script>
```
3. Import CSS
```xml=
<link rel="stylesheet" href="style.css">
```
---
## Javascript
### Declare variables
```javascript=
const score_element = document.getElementById("score");
const end_container = document.getElementById("end-container");
const game_over_score = document.getElementById("score-end");
const length_question = document.getElementById("length_question");

let score = 0; 
let current_question_index = 0; 
```
### Within question

1. First confirm question repositories length is less than, so questions can proceed

```javascript=
function show_question(index) {
    if (index < questions.length) {
        ...
    }
}
```
#### Create question variable
```javascript=
const questionElement = document.getElementById("question");
```
#### Display question number
```javascript=
questionElement.textContent = current_question_index + 1 + (". ") + questions[index].question; 
```
---
### Create options
1.  First create options variable
2.  Clear content

```javascript=
const optionsElement = document.getElementById("options");
optionsElement.innerHTML = "";
```
#### Fill in options
1.  Loop through question repositories

```javascript=
questions[index].options.forEach((option, i) => {
        ...
        });
```
#### Create button variable
```javascript=
const button = document.createElement("button");
```
#### Option content and number
1.  Use ASCII code to create option number
2.  Option content option

```javascript=
button.textContent = "(" + String.fromCharCode(65 + i) + ") " + option;
```
#### Confirm option and connect to next question
```javascript=
button.onclick = () => check_answer(i);
optionsElement.appendChild(button);
```
#### Length finished, so game ends
```javascript=
else {
    end_container.style.display = "block";
    }
```
---
### Score changes
```javascript=
function check_answer(selected_index) {
    ...
}
```
1.  If option is correct, add score
2.  If wrong, display "答錯了"

```javascript=
if (selected_index === questions[current_question_index].correct_answer) {
        score += 1;
        game_over_score.textContent = score;
        score_element.textContent = score;
    } else {
        alert("答錯了唷！")
    }
```
3.  Update question, variable +1
```javascript=
current_question_index++;
show_question(current_question_index);
```

#### Return
```javascript=
game_over_score.innerHTML = score;
score_element.innerHTML = score;
length_question.innerHTML = questions.length;
show_question(current_question_index);
```
---
### Question repositories example
```javascript=
const questions = [
    {
        question: "請問除了太陽之外距離明倫高中最近的恆星是？",
        options: ["南門二","半人馬座α星C","天狼星","參宿四"],
        correct_answer: 1
    },
```
And so on...

---
