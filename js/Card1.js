document.getElementById('donate-Now1').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Donating1')
    const donatedMoney1 = document.getElementById('input-Donation1').value;
    const donatedMoney1Number = parseFloat(donatedMoney1);
    console.log(donatedMoney1);
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance1 = balanceNumber - donatedMoney1Number;
    document.getElementById('account-balance').innerText = newBalance1;

    const donatedBalance1 = document.getElementById('donated-Balance1').innerText
    const donatedBalance1Number = parseFloat(donatedBalance1);
    const donatedNewBalance1 = donatedBalance1Number + donatedMoney1Number;
    document.getElementById('donated-Balance1').innerText = donatedNewBalance1;
})