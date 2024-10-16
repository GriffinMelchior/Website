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
  if (selectedType.value === 'Manga') {
    acceptedFile.accept = 'image/*'; 
  } else if (selectedType.value === 'Novel') {
    acceptedFile.accept = '.txt'; 
  }
}

selectedType.addEventListener('change', updateAcceptAttribute);
document.addEventListener('DOMContentLoaded', updateAcceptAttribute);


const form = document.getElementById('uploadForm');

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch('/userProfile', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('File uploaded successfully!');
            form.reset(); 
            updateAcceptAttribute();
        } else {
            alert('Upload failed. Please try again.');
        }
    } catch (error) {
        alert('Error occurred during the upload.');
    }
});
