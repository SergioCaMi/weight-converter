
document.getElementById("input").addEventListener("input", (e)=>{
   document.getElementById("result").textContent = (e.target.value * 0.453592).toFixed(2);
});