// add money 
document.getElementById('add-money-show').addEventListener('click',function(){
toggle("add-money-from")

})
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const inputPin =getInputValueById('input-pin');
   const amount =getInputValueById('add-amount-input');
   const balance =getTextValueById('available-money');
   if(inputPin === 1234){
    const newBalance = balance + amount;
    document.getElementById('available-money').innerText = newBalance;
// transaction
const p =document.createElement('p');
p.innerText=`Added: ${amount} Tk New balance: ${newBalance}`;
document.getElementById('transaction-history').appendChild(p)

   }
   else{
    alert('try again')
   }
})




