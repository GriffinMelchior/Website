const openModalButton = document.getElementById('pop-upButton');
const closeModalButton = document.getElementById('closeDownButton');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.showModal();
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});