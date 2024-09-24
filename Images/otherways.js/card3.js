document.getElementById('donate-Now3').addEventListener('click', function(event){
    event.preventDefault
    console.log('Donating3')
    const donatedMoney3 = document.getElementById('input-Donation3').value;
    const donatedMoney3Number = parseFloat(donatedMoney3);
    console.log(donatedMoney3);
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance3 = balanceNumber - donatedMoney3Number;
    document.getElementById('account-balance').innerText = newBalance3;

    const donatedBalance3 = document.getElementById('donated-Balance3').innerText
    const donatedBalance3Number = parseFloat(donatedBalance3);
    const donatedNewBalance3 = donatedBalance3Number + donatedMoney3Number;
    document.getElementById('donated-Balance3').innerText = donatedNewBalance3;
})