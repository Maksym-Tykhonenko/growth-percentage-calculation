const e={form:document.querySelector(".form"),btn:document.querySelector(".btn"),result:document.querySelector(".result")};e.form.addEventListener("submit",(function(t){t.preventDefault();const l=t.target.elements.newSalary.value.replace(/\s/g,""),n=t.target.elements.oldSalary.value.replace(/\s/g,"");let r=function(e,t){return((e-t)/t*100).toFixed(2)}(l,n);""===l||""===n?alert("Please fill in all fields"):(function(t){e.result.textContent=t+" %"}(r),function(e){e.target.elements.newSalary.value="",e.target.elements.oldSalary.value=""}(t))})),e.result.textContent="";
//# sourceMappingURL=index.e3141f78.js.map
