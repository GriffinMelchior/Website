document.querySelector('input[type="file"]').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file && !file.type.startsWith('video/')) {
      alert('Please select a video file.');
      event.target.value = '';
  }
});
