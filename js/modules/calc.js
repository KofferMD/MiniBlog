function calc() {

    // Calculator

    const result = document.querySelector('.calculating__result span');

    let pages;

    function calcTotal() {
        result.textContent = Math.round((pages * 365) / 300);
        return result;
    }


    function getDinamicinformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {
                case 'pages':
                    pages = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDinamicinformation('#pages');

}

export default calc;