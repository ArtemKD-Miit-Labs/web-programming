const showButton = document.getElementById('showButton');
const hiddenElements = document.querySelectorAll('[hidden]');
let shownCount = 0;

function updateButtonText() {
    showButton.textContent = 'Показать следующий элемент (' +
        shownCount + ' из ' + hiddenElements.length + ')';
}

function disableButtonIfDone() {
    if (shownCount === hiddenElements.length) {
        showButton.setAttribute('disabled', 'true');
        showButton.textContent = 'Все элементы выведены (' +
            shownCount + ' из ' + hiddenElements.length + ')';
    }
}

function showNextElement() {
    if (shownCount < hiddenElements.length) {
        hiddenElements[shownCount].removeAttribute('hidden');
        shownCount++;
        updateButtonText();
    }
    disableButtonIfDone();
}

updateButtonText();
disableButtonIfDone();
showButton.addEventListener('click', showNextElement);
