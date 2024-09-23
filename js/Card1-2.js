document.getElementById('donate-Now1').addEventListener('click', function(event){
    event.preventDefault();
    const donatedMoney1 = getInputFieldValueById('input-Donation1');
    const balance = getTextFieldValueById('account-balance');
    const donatedBalance1 = getTextFieldValueById('donated-Balance1');
    const donatedNewBalance1 = donatedBalance1 + donatedMoney1 ;
    document.getElementById('donated-Balance1').innerText = donatedNewBalance1;
    const newBalance1 = balance - donatedMoney1;
    document.getElementById('account-balance').innerText = newBalance1;
})