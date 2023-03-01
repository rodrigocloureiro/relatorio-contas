const dataRelatorio = document.querySelector('.data-relatorio h1');
let date = new Date();
dataRelatorio.textContent = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

let soma = 0;
let count = 0;
const total = document.querySelector('.total');

const arrVal = document.querySelectorAll('tBody tr td:last-child input');
arrVal.forEach(item => {
    item.addEventListener('change', (e) => {
        if(item.parentNode.parentNode.classList.contains('changed')) {
            count--;
            item.parentNode.parentNode.classList.remove('changed');
            e.target.parentNode.parentNode.children[0].textContent = 'N°';
        }
        else {
            count++;
            item.parentNode.parentNode.classList.add('changed');
            e.target.parentNode.parentNode.children[0].textContent = count;
        }
        total.textContent = valFinal().toFixed(2);
    });
});

function valFinal() {
    soma = 0;
    for(let i = 0; i < arrVal.length; i++) {
        soma += Number(arrVal[i].value);
    }
    return soma;
}

const btnLimpar = document.querySelector('#limpar');
btnLimpar.addEventListener('click', () => location.reload());

const btnImprimir = document.querySelector('#imprimir');
btnImprimir.addEventListener('click', () => window.print());