const score_element = document.getElementById("score");
const end_container = document.getElementById("end-container");
const game_over_score = document.getElementById("score-end");
const length_question = document.getElementById("length_question");

function Quiz() {
    this.score = 0;
    this.current_question_index = 0;

    this.show_question = function (index) {
        if (index < questions.length) {
            const questionElement = document.getElementById("question");
            questionElement.textContent = `${this.current_question_index + 1}. ${questions[index].question}`;

            const optionsElement = document.getElementById("options");
            optionsElement.innerHTML = "";

            questions[index].options.forEach((option, i) => {
                const button = document.createElement("button");
                button.textContent = `(${String.fromCharCode(65 + i)}) ${option}`;
                button.onclick = () => this.check_answer(i);
                optionsElement.appendChild(button);
            });
        } else {
            end_container.style.display = "block";
        }
    };

    this.check_answer = function (selected_index) {
        if (selected_index === questions[this.current_question_index].correct_answer) {
            this.score += 1;
            game_over_score.textContent = this.score;
            score_element.textContent = this.score;
        } else {
            alert("答錯了唷！");
        }

        this.current_question_index++;
        this.show_question(this.current_question_index);
    };
}

const quiz = new Quiz();

game_over_score.innerHTML = quiz.score;
score_element.innerHTML = quiz.score;
length_question.innerHTML = questions.length;

quiz.show_question(quiz.current_question_index);
