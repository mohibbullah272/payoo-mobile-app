document.getElementById('cash-out-show').addEventListener('click', function(){
    toggle('cash-out-from')
})

document.getElementById('btn-cash-out').addEventListener('click', function(event){
event.preventDefault();
const balance =getTextValueById('available-money');
const pinInput =getInputValueById('input-pin-cashOut');
const cashOut =getInputValueById('cash-out-input');
if(pinInput === 1234){
    const newBalance =balance - cashOut;
    document.getElementById('available-money').innerText= newBalance;

    // transaction
    const p = document.createElement('p')
    p.innerHTML = `cash out ${cashOut}Tk New balance ${newBalance}`
    document.getElementById('transaction-history').appendChild(p)
}
else{
    alert('try again')
}
})