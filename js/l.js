// const myModal = document.getElementById('my_modal_1');
// const donateNowButton = document.getElementById('donate-Now1');

// donateNowButton.addEventListener('click',function () {
//   myModal.showModal();
// });

// const closeButton = myModal.querySelector('button[type="button"]');
// closeButton.addEventListener('click',function () {
//   myModal.close();
// });
const myModal = document.getElementById('my_modal_1');

function showModal() {
  myModal.showModal();
}

function closeModal() {
  myModal.close();
}

const donateNowButton1 = document.getElementById('donate-Now1');
donateNowButton1.addEventListener('click', showModal);

const donateNowButton2 = document.getElementById('donate-Now2');
donateNowButton2.addEventListener('click', showModal);

const donateNowButton3 = document.getElementById('donate-Now3');
donateNowButton3.addEventListener('click', showModal);

const closeButton = myModal.querySelector('button[type="button"]');
closeButton.addEventListener('click', closeModal);