const score_element = document.getElementById("score");
const end_container = document.getElementById("end-container");
const game_over_score = document.getElementById("score-end");
const length_question = document.getElementById("length_question"); //dom提出element

let score = 0; //分數
let current_question_index = 0; //現在題目

function show_question(index) {
    if (index < questions.length) {
        const questionElement = document.getElementById("question");
        questionElement.textContent = current_question_index + 1 + (". ") + questions[index].question; //顯示題號和題目

        const optionsElement = document.getElementById("options");
        optionsElement.innerHTML = "";

        questions[index].options.forEach((option, i) => {
            const button = document.createElement("button");
            button.textContent = "(" + String.fromCharCode(65 + i) + ") " + option;
            button.onclick = () => check_answer(i);
            optionsElement.appendChild(button);
        });//建立選項和題號並確認答案
    } else {
        end_container.style.display = "block";
    }//length已盡，故遊戲結束
}

function check_answer(selected_index) {
    if (selected_index === questions[current_question_index].correct_answer) {
        score += 1;
        game_over_score.textContent = score;
        score_element.textContent = score;
    } else {
        alert("答錯了唷！")
    }//更新答對題數

    current_question_index++;
    show_question(current_question_index);
}

game_over_score.innerHTML = score;
score_element.innerHTML = score;
length_question.innerHTML = questions.length; //回傳回去
show_question(current_question_index);