$(function () {
    const rateSlider = $('#rate-slider');
    const pitchSlider = $('#pitch-slider');
    const rateValue = $('#rate-value');
    const pitchValue = $('#pitch-value');

    // 更新數值並保留一位小數
    function updateRateValue(value) {
        rateValue.text(value.toFixed(1)); // 保留一位小數
    }

    function updatePitchValue(value) {
        pitchValue.text(value.toFixed(1)); // 保留一位小數
    }

    // 初始數值
    updateRateValue(parseFloat(rateSlider.val()));
    updatePitchValue(parseFloat(pitchSlider.val()));

    // 監聽滑桿變化事件
    rateSlider.on('input', function () {
        state.rate = parseFloat(this.value);
        updateRateValue(state.rate); // 更新語速數值元素的內容
    });

    pitchSlider.on('input', function () {
        state.pitch = parseFloat(this.value);
        updatePitchValue(state.pitch); // 更新音高數值元素的內容
    });
});

const state = {
    words: [],
    currentIndex: 0,
    isRandom: false,
    showChinese: false,
    minIndex: 0,
    maxIndex: 0,
    isAlphabeticalOrder: false,
    rate: 1, // 新增語速屬性
    pitch: 1 // 新增音高屬性
};

document.addEventListener('DOMContentLoaded', function () {
    var fullPath = decodeURI(window.location.pathname);
    var fileName = fullPath.split('/').pop();
    var dotIndex = fileName.lastIndexOf('.');
    if (dotIndex !== -1) {
        fileName = fileName.substring(0, dotIndex);
    }
    document.getElementById('pageTitle').innerText = fileName;
});

const utils = {
    getRandomIndex: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    saveToLocalStorage: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    loadFromLocalStorage: (key, defaultValue) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    }
};
class DataLoader {
    static loadData(jsonUrl, callback) {
        $.ajax({
            type: "GET",
            url: jsonUrl, // 使用選定的 JSON 文件路徑
            dataType: "json",
            success: (response) => {
                state.words = response.vocabularies;
                state.originalWords = [...state.words];
                state.maxIndex = state.words.length - 1;
                callback();
            }
        });
    }
}

class VocabularyRenderer {
    constructor(questionEl, hintEl, listEl) {
        this.questionEl = $(questionEl);
        this.hintEl = $(hintEl);
        this.listEl = $(listEl).find('tbody');
        this.readBtn = $('#readBtn');
        this.searchInput = $('#search-input');
        this.initSearchEventListener();
        // this.listContainer = listEl.parent(); // 獲取單字區容器元素
        // this.toggleListBtn = $('#toggle-list-btn');
        // this.initToggleListEventListener();
    }
    // initToggleListEventListener() {
    //     this.toggleListBtn.click(() => {
    //         this.listContainer.toggle();
    //         const isVisible = this.listContainer.is(':visible');
    //         this.toggleListBtn.text(isVisible ? '折疊單字區' : '展開單字區');
    //     });
    // }
    initSearchEventListener() {
        this.searchInput.on('input', () => {
            const searchValue = this.searchInput.val().toLowerCase();
            this.filterWords(searchValue);
        });
    }

    filterWords(searchValue) {
        const filteredWords = state.originalWords.filter(word => {
            const vocabulary = word.vocabulary.toLowerCase();
            const partOfSpeech = word.partOfSpeech.toLowerCase();
            const chinese = word.chinese.toLowerCase();
            return vocabulary.includes(searchValue) ||
                partOfSpeech.includes(searchValue) ||
                chinese.includes(searchValue);
        });

        state.words = filteredWords;
        this.renderList();
    }

    speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.lang === 'en-US');
        // 使用state中的語速和音高值
        utterance.rate = state.rate;
        utterance.pitch = state.pitch;
        speechSynthesis.speak(utterance);
    }

    renderQuestion() {
        const word = state.words[state.currentIndex];
        const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
        tl.fromTo(this.questionEl, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.3 })
          .fromTo(this.hintEl.find('.type'), { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 }, '-=0.2')
          .fromTo(this.hintEl.find('.answer'), { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 }, '-=0.2');
        this.questionEl.html(word.vocabulary);
        this.hintEl.find('.type').html(word.partOfSpeech);
        this.hintEl.find('.answer').html(word.chinese);
        this.changeQuestionColor();
    }

    changeQuestionColor(color) {
        this.changeButtonColor(color);
    }

    changeButtonColor(color) {
        const buttons = $('.btn');
        buttons.css('background-color', color);
        buttons.css('outline-color', color);
    }

    renderList() {
        this.listEl.empty();
        state.words.forEach((word, index) => {
            const row = $('<tr></tr>').addClass('val').click(() => {
                state.currentIndex = index;
                this.renderQuestion();
            });
            row.append($('<td></td>').addClass('idx').text(index+1));
            row.append($('<td></td>').text(word.vocabulary));
            row.append($('<td></td>').text(word.partOfSpeech));
            row.append($('<td></td>').addClass('chinese').text(word.chinese));
            this.listEl.append(row);
        });
        this.updateChineseDisplay();
    }

    updateChineseDisplay() {
        const chineseHeader = $('#chinese-header');
        if (state.showChinese) {
            chineseHeader.text('中文');
            chineseHeader.removeClass('hidden');
            chineseHeader.addClass('underline');
        } else {
            chineseHeader.addClass('hidden');
        }
        this.listEl.find('.chinese').toggle(state.showChinese);
    }
}

class VocabularyController {
    constructor(renderer) {
        this.renderer = renderer;
        this.initEventListeners();
        this.initStateFromLocalStorage();
        const selectedVocabularyUrl = localStorage.getItem('selectedVocabularyUrl');
        DataLoader.loadData(selectedVocabularyUrl, () => {
            this.renderer.renderQuestion();
            this.renderer.renderList();
        });
    }

    initEventListeners() {
        $('#answerBtn').click(() => this.toggleHint());
        $('#next').click(() => this.handleNext());
        $('#prev').click(() => this.handlePrev());
        $('#chinese-display').change(() => this.toggleChineseDisplay());
        $('input[name="mode"]').change(() => this.handleModeChange());
        $('#color-picker').change(() => this.handleColorChange());
        $('#alphabetical-order').change(() => this.handleAlphabeticalOrderChange());
        this.renderer.readBtn.click(() => this.handleRead());
    }

    handleAlphabeticalOrderChange() {
        state.isAlphabeticalOrder = $('#alphabetical-order').prop('checked');
        if (state.isAlphabeticalOrder) {
            state.words.sort((a, b) => a.vocabulary.localeCompare(b.vocabulary));
        } else {
            state.words = [...state.originalWords]; // 重置為原始順序
        }
        this.renderer.renderList();
        this.saveState();
    }

    initStateFromLocalStorage() {
        state.currentIndex = utils.loadFromLocalStorage('currentIndex', 0);
        state.isRandom = utils.loadFromLocalStorage('isRandom', false);
        state.showChinese = utils.loadFromLocalStorage('showChinese', false);
        state.minIndex = utils.loadFromLocalStorage('minIndex', 0);
        state.maxIndex = utils.loadFromLocalStorage('maxIndex', state.words.length - 1);
        $(`#mode-${state.isRandom ? 'random' : 'sequential'}`).prop('checked', true);
        $('#chinese-display').prop('checked', state.showChinese);
        state.isAlphabeticalOrder = utils.loadFromLocalStorage('isAlphabeticalOrder', false);
        $('#alphabetical-order').prop('checked', state.isAlphabeticalOrder);
    }

    toggleHint() {
        gsap.to(this.renderer.hintEl, { duration: 0.3, opacity: this.renderer.hintEl.css('display') === 'none' ? 1 : 0, ease: "power2.inOut" });
        this.renderer.hintEl.toggle();
    }

    handleNext() {
        if (state.isRandom) {
            state.currentIndex = utils.getRandomIndex(state.minIndex, state.maxIndex);
        } else {
            state.currentIndex = (state.currentIndex + 1) % state.words.length;
        }
        gsap.to(this.renderer.questionEl, { duration: 0.3, opacity: 0, scale: 0.8, ease: "power2.in", onComplete: () => this.renderer.renderQuestion() });
        this.saveState();
    }

    handlePrev() {
        if (state.isRandom) {
            state.currentIndex = utils.getRandomIndex(state.minIndex, state.maxIndex);
        } else {
            state.currentIndex = (state.currentIndex - 1 + state.words.length) % state.words.length;
        }
        gsap.to(this.renderer.questionEl, { duration: 0.3, opacity: 0, scale: 0.8, ease: "power2.in", onComplete: () => this.renderer.renderQuestion() });
        this.saveState();
    }

    toggleChineseDisplay() {
        state.showChinese = !state.showChinese;
        this.renderer.updateChineseDisplay();
        this.saveState();
    }

    handleModeChange() {
        state.isRandom = $('input[name="mode"]:checked').val() === 'random';
        this.saveState();
    }

    saveState() {
        utils.saveToLocalStorage('currentIndex', state.currentIndex);
        utils.saveToLocalStorage('isRandom', state.isRandom);
        utils.saveToLocalStorage('showChinese', state.showChinese);
        utils.saveToLocalStorage('minIndex', state.minIndex);
        utils.saveToLocalStorage('maxIndex', state.maxIndex);
        utils.saveToLocalStorage('isAlphabeticalOrder', state.isAlphabeticalOrder);
    }

    handleColorChange() {
        const newColor = $('#color-picker').val();
        this.renderer.changeQuestionColor(newColor);
    }
    handleRead() {
        const currentWord = state.words[state.currentIndex].vocabulary;
        this.renderer.speak(currentWord);
    }
}

// class MenuController {
//     constructor(menuBtn, panel) {
//         this.menuBtn = $(menuBtn);
//         this.panel = $(panel);
//         this.panel.hide();
//         this.initEventListener();
//     }

//     initEventListener() {
//         this.menuBtn.click(() => this.toggleMenu());
//     }

//     toggleMenu() {
//         if (this.panel.is(':hidden')) {
//             this.showMenu();
//         } else {
//             this.hideMenu();
//         }
//     }

//     showMenu() {
//         this.panel.show();
//         gsap.fromTo(this.panel, { y: '-100%' }, { y: 0, ease: 'Power', duration: 0.7 });
//     }

//     hideMenu() {
//         gsap.to(this.panel, {
//             y: '-100%',
//             ease: 'Power',
//             duration: 0.5,
//             onComplete: () => {
//                 this.panel.hide();
//                 gsap.set(this.panel, { y: 0 });
//             }
//         });
//     }
// }
class MenuController {
    constructor(menuBtn, panel) {
        this.menuBtn = $(menuBtn);
        this.panel = $(panel);
        this.panel.hide();
        this.initEventListener();
    }

    initEventListener() {
        this.menuBtn.click(() => this.toggleMenu());
    }

    toggleMenu() {
        if (this.panel.is(':hidden')) {
            this.showMenu();
        } else {
            this.hideMenu();
        }
    }

    showMenu() {
        this.panel.show();
        gsap.fromTo(this.panel, { x: '100%' }, { x: 0, ease: 'Power', duration: 0.6 });
    }

    hideMenu() {
        gsap.to(this.panel, {
            x: '100%',
            ease: 'Power',
            duration: 0.5,
            onComplete: () => {
                this.panel.hide();
                gsap.set(this.panel, { x: 0 });
            }
        });
    }
}
document.getElementById("house").addEventListener("click", function() {
    window.location.href = "/index.html";
});

const renderer = new VocabularyRenderer('#question', '#hint', '.list');
const controller = new VocabularyController(renderer);
const menuController = new MenuController('#menu', '.setting');
