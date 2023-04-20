import './css/styles.css';

refs = {
    form: document.querySelector('.form'),
    btn: document.querySelector('.btn'),
    result: document.querySelector('.result'),
    
    newSalaryInFormula: document.querySelector('.formula-newSalary'),
    oldSalaryInFormula: document.querySelector('.formula-oldSalary'),
    oldSalaryInFormula2: document.querySelector('.formula-oldSalary2'),
    oldInput: document.querySelector('#old-salary'),
    newInput: document.querySelector('#new-salary')
};

refs.form.addEventListener("submit", growthPercentageCalculating);
//refs.btn.addEventListener("click", growthPercentageCalculating);

    
function growthPercentageCalculating(e) {
    //e.preventDefault();
    //e.preventDefault();
    const newSalary = e.target.elements.newSalary.value;
    const oldSalary = e.target.elements.oldSalary.value;
    console.log( oldSalary, newSalary);

    let growthPercentage = (((newSalary - oldSalary) / oldSalary) * 100).toFixed(2);
    console.log(growthPercentage)

    updFormula(growthPercentage, newSalary, oldSalary);
    inputReset(e)
    
};

function updFormula(growthPercentage, newSalary, oldSalary) {
    refs.result.textContent = growthPercentage;
    refs.newSalaryInFormula.textContent = newSalary;
    refs.oldSalaryInFormula.textContent = oldSalary;
    refs.oldSalaryInFormula2.textContent = oldSalary;
};

function inputReset(e) {
    e.target.elements.newSalary.value = '';
    e.target.elements.oldSalary.value = '';
};

