document.getElementById("calcbtn").onclick = function(){
    let bill = document.getElementById("bamt")
    let billamt = bill.value
    let tip = document.getElementById("tipvalue")
    let tipv = tip.value
    let tipamt = billamt *(tipv/100)
    let totalamt = Number(billamt) + Number(tipamt)
    document.getElementById("tamt").textContent = `Total Amt:${totalamt}`
}