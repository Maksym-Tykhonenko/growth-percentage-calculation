import './css/styles.css';

refs = {
    result: document.querySelector('.result'),
    form: document.querySelector('.form'),
    newSalaryInFormula: document.querySelector('.formula-newSalary'),
    oldSalaryInFormula: document.querySelector('.formula-oldSalary'),
    oldSalaryInFormula2: document.querySelector('.formula-oldSalary2'),
    oldInput: document.querySelector('#old-salary'),
    newInput: document.querySelector('#new-salary')
};

refs.form.addEventListener("submit", growthPercentageCalculating);

    
function growthPercentageCalculating(e) {
    e.preventDefault();
    const newSalary = e.target.elements.newSalary.value;
    const oldSalary = e.target.elements.oldSalary.value;
    //console.log( oldSalary, newSalary);
    
    const growthPercentage = (((newSalary - oldSalary) / oldSalary) * 100).toFixed(2);
    //console.log(growthPercentage)

    refs.result.textContent = growthPercentage;
    refs.newSalaryInFormula.textContent = newSalary;
    refs.oldSalaryInFormula.textContent = oldSalary;
    refs.oldSalaryInFormula2.textContent = oldSalary;

    e.target.elements.newSalary.value = '';
    e.target.elements.oldSalary.value = '';
};

