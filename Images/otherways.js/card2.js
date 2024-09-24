document.getElementById('donate-Now2').addEventListener('click', function(event){
    event.preventDefault
    console.log('Donating2')
    const donatedMoney2 = document.getElementById('input-Donation2').value;
    const donatedMoney2Number = parseFloat(donatedMoney2);
    console.log(donatedMoney2);
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance2 = balanceNumber - donatedMoney2Number;
    document.getElementById('account-balance').innerText = newBalance2;

    const donatedBalance2 = document.getElementById('donated-Balance2').innerText
    const donatedBalance2Number = parseFloat(donatedBalance2);
    const donatedNewBalance2 = donatedBalance2Number + donatedMoney2Number;
    document.getElementById('donated-Balance2').innerText = donatedNewBalance2;
})