function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function calculate() {
    const expression = document.getElementById('display').textContent;
    try {
        const result = eval(expression);
        document.getElementById('display').textContent = result;
    } catch (error) {
        alert('Erro na expressão!');
        clearDisplay();
    }
}
