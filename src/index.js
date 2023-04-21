import './css/styles.css';

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
    //console.log( oldSalary, newSalary);

    let finalPercentageResult = growthPercentage(newSalary, oldSalary);
    //console.log(finalPercentageResult ,'%')

    if (newSalary === '' || oldSalary === '') {
        alert('Please fill in all fields')
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
    //console.log(refs.result.textContent)
};

function inputReset(e) {
    e.target.elements.newSalary.value = '';
    e.target.elements.oldSalary.value = '';
};

function resultReset() {
    refs.result.textContent = '';
};
