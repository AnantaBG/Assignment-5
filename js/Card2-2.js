document.getElementById('donate-Now2').addEventListener('click', function(event){
    event.preventDefault();
    const donatedMoney2 = getInputFieldValueById('input-Donation2');
    const balance = getTextFieldValueById('account-balance');
    const donatedBalance2 = getTextFieldValueById('donated-Balance2');
    const donatedNewBalance2 = donatedBalance2 + donatedMoney2 ;
    document.getElementById('donated-Balance2').innerText = donatedNewBalance2;
    const newBalance2 = balance - donatedMoney2;
    document.getElementById('account-balance').innerText = newBalance2;
})