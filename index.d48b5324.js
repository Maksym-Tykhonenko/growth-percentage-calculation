!function(){var e={form:document.querySelector(".form"),btn:document.querySelector(".btn"),result:document.querySelector(".result")};e.form.addEventListener("submit",(function(t){t.preventDefault();var l=t.target.elements.newSalary.value,r=t.target.elements.oldSalary.value;console.log(r,l);var n=function(e,t){return((e-t)/t*100).toFixed(2)}(l,r);""===l||""===r?alert("Please fill in all fields"):(a=n,e.result.textContent=a+"%",function(e){e.target.elements.newSalary.value="",e.target.elements.oldSalary.value=""}(t));var a})),e.result.textContent=""}();
//# sourceMappingURL=index.d48b5324.js.map
