document.getElementById('donate-Now3').addEventListener('click', function(event){
    event.preventDefault();
    const donatedMoney3 = getInputFieldValueById('input-Donation3');
    const balance = getTextFieldValueById('account-balance');
    const donatedBalance3 = getTextFieldValueById('donated-Balance3');
    const donatedNewBalance3 = donatedBalance3 + donatedMoney3 ;
    document.getElementById('donated-Balance3').innerText = donatedNewBalance3;
    const newBalance3 = balance - donatedMoney3;
    document.getElementById('account-balance').innerText = newBalance3;
})