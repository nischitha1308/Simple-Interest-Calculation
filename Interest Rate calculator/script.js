const principle=document.getElementById("amount");
const rate=document.getElementById("rate");
const time=document.getElementById("year");
const totall=document.getElementById("total");
const btn=document.getElementById("bttn");
function calculateresult(){
    const p=principle.value;
    const r=rate.value;
    const t=time.value;
    const tm=eval(p*t*r/100);
    totall.innerText=tm;
}
btn.addEventListener('click',calculateresult)