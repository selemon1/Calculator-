const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === '=') {
            try {
                const result = math.evaluate(display.value);
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === 'C') {
            display.value = '';
        } else {
            display.value += buttonText;
        }
    });
});
