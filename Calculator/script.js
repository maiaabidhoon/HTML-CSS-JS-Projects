let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function appendToDisplay(value) {
    display.innerText += value;
}

function clearAll() {
    display.innerText = '';
}

function clearLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.innerText);
        addToHistory(display.innerText + ' = ' + result);
        // display.innerText = '';
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

function addToHistory(entry) {
    let li = document.createElement('li');
    li.innerHTML = `<div class="entry">${entry}</div> <button class="delete-btn" onclick="deleteHistoryEntry(this)">Delete</button>`;
    historyList.prepend(li);
}

function deleteHistoryEntry(button) {
    let li = button.parentNode;
    historyList.removeChild(li);
}

function clearAllHistory() {
    historyList.innerHTML = '';
}
