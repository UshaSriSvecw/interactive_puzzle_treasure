const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const images = document.querySelectorAll('.image-grid img');
const closeButton = document.querySelector('.close');
const blackBox = document.querySelector('#black-box');
const onePieceImage = document.querySelector('#one-piece-image');

// When an image is clicked, display the modal and set the modal image to the clicked image
images.forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    onePieceImage.style.display = 'none';
  });
});

// When the close button is clicked, hide the modal and reset the onePieceImage
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  onePieceImage.style.display = 'none';
});

// When the user clicks outside of the modal, hide the modal and reset the onePieceImage
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    onePieceImage.style.display = 'none';
  }
});

blackBox.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImg.src = ''; // clear any existing image
  modalImg.style.backgroundColor = 'black'; // set the background color to black
  modalImg.style.color = 'white'; // set the text color to white
  modalImg.style.fontSize = '48px'; // set the font size
  modalImg.style.textAlign = 'center'; // center the text
  modalImg.setAttribute('data-content', 'Well done! You did a great job. There is a hurdle ahead, go for it and win your TREASURE'); // set the data-content attribute
  onePieceImage.style.display = 'block';
  onePieceImage.src = blackBox.src;
});
