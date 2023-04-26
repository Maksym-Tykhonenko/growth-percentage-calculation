import './css/styles.css';
import Notiflix from 'notiflix';

const refs = {
    form: document.querySelector('.form'),
    btn: document.querySelector('.btn'),
    result: document.querySelector('.result'),
};

refs.form.addEventListener("submit", growthPercentageCalculating);

resultReset();
    
function growthPercentageCalculating(e) {

    e.preventDefault();
    const newSalary = e.target.elements.newSalary.value.replace(/\s/g, "");
    const oldSalary = e.target.elements.oldSalary.value.replace(/\s/g, "");

    let finalPercentageResult = growthPercentage(newSalary, oldSalary);

    if (newSalary === '' || oldSalary === '') {
        Notiflix.Notify.failure('Please fill in all fields');
        //alert('Please fill in all fields')
    } else {
        updResult(finalPercentageResult);
        inputReset(e)
    };

};

function growthPercentage(newSalary, oldSalary) {
    return (((newSalary - oldSalary) / oldSalary) * 100).toFixed(2);
};

function updResult(finalPercentageResult) {
    refs.result.textContent = finalPercentageResult + ' %';
};

function inputReset(e) {
    e.target.elements.newSalary.value = '';
    e.target.elements.oldSalary.value = '';
};

function resultReset() {
    refs.result.textContent = '';
};
