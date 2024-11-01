const openModalButton = document.getElementById('pop-upButton');
const closeModalButton = document.getElementById('closeDownButton');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.showModal();
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});
const arrays = [
  "One Piece",
  "Naruto",
  "Attack on Titan",
  "My Hero Academia",
  "Death Note",
  "Demon Slayer",
  "Fullmetal Alchemist",
  "Tokyo Ghoul",
  "Hunter x Hunter",
  "Bleach",
  "Jujutsu Kaisen",
  "One Punch Man",
  "Dragon Ball",
  "Sword Art Online",
  "Fairy Tail",
  "Black Clover",
  "Chainsaw Man",
  "Haikyuu!!",
  "The Promised Neverland",
  "Re:Zero",
  "Vagabond",
  "Berserk",
  "Vinland Saga",
  "Spy x Family"
];
const selectedType = document.getElementById('fileType');
const acceptedFile = document.getElementById('fileInput');
const uploadType = document.getElementById('uploadType');
const contentName = document.getElementById('contentName');
const chapter = document.getElementById('chapter');

function updateAcceptAttribute() {
  if (selectedType.value === 'Manga') {
    acceptedFile.accept = 'image/*';
    uploadType.innerHTML = 'Manga';
  } else if (selectedType.value === 'Novel') {
    acceptedFile.accept = '.txt'; 
    uploadType.innerHTML = 'Novel';
  }
}

selectedType.addEventListener('change', updateAcceptAttribute);
document.addEventListener('DOMContentLoaded', updateAcceptAttribute);


const form = document.getElementById('uploadForm');

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    try {
      if(arrays.includes(contentName.value)){
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
      }else{
        form.reset();
        alert('please upload new manga/novel in the new content section')
      }
    } catch (error) {
        alert('Error occurred during the upload.');
    }
});
