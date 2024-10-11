const openModalButton = document.getElementById('pop-upButton');
const closeModalButton = document.getElementById('closeDownButton');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.showModal();
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});

const selectedType = document.getElementById('fileType');
const acceptedFile = document.getElementById('fileInput');

function updateAcceptAttribute() {
  if (selectedType.value === 'video') {
    acceptedFile.accept = 'video/*'; 
  } else if (selectedType.value === 'photo') {
    acceptedFile.accept = 'image/*'; 
  }
}

selectedType.addEventListener('change', updateAcceptAttribute);
document.addEventListener('DOMContentLoaded', updateAcceptAttribute);