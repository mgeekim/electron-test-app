const readFileBtn = document.getElementById('read-file');
const imageDisplay = document.getElementById('image-display');

readFileBtn.addEventListener('click', async () => {
  const imageData = await window.electronAPI.openFile();
  if (imageData) {
    imageDisplay.src = imageData;
  }
});
