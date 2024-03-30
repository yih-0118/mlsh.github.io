const state = {
    words: [],
    currentIndex: 0,
    isRandom: false,
    showChinese: false,
    minIndex: 0,
    maxIndex: 0,
    isAlphabeticalOrder: false
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
    static loadData(url, callback) {
        $.ajax({
            type: "GET",
            url,
            dataType: "json",
            success: (response) => {
                state.words = response.vocabularies;
                state.originalWords = [...state.words]; // 保存原始順序
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
    }

    renderQuestion() {
        const word = state.words[state.currentIndex];
        gsap.to(this.questionEl, { duration: 0.3, opacity: 1, scale: 1, ease: "power2.out" });
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
            row.append($('<td></td>').addClass('idx').text(index));
            row.append($('<td></td>').text(word.vocabulary));
            row.append($('<td></td>').text(word.partOfSpeech));
            row.append($('<td></td>').addClass('chinese').text(word.chinese));
            this.listEl.append(row);
        });
        this.updateChineseDisplay();
    }

    updateChineseDisplay() {
        this.listEl.find('.chinese').toggle(state.showChinese);
    }
}

class VocabularyController {
    constructor(renderer) {
        this.renderer = renderer;
        this.initEventListeners();
        this.initStateFromLocalStorage();
        DataLoader.loadData(`./json/${document.location.pathname.split('/').pop().replace('.html', '.json')}`, () => {
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
}

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
        gsap.fromTo(this.panel, { y: '-100%' }, { y: 0, ease: 'Power', duration: 0.7 });
    }

    hideMenu() {
        gsap.to(this.panel, {
            y: '-100%',
            ease: 'Power',
            duration: 0.7,
            onComplete: () => {
                this.panel.hide();
                gsap.set(this.panel, { y: 0 }); 
            }
        });
    }
    
}

const renderer = new VocabularyRenderer('#question', '#hint', '.list');
const controller = new VocabularyController(renderer);
const menuController = new MenuController('#menu', '.setting');