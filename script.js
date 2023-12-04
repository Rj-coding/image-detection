
const imageUrlInput = document.getElementById('image-url');
const checkButton = document.getElementById('check-button');
const image = document.getElementById('image');
const imageStatus = document.getElementById('image-status');

checkButton.addEventListener('click', () => {
    const url = imageUrlInput.value.trim();
    if (!url) {
        return alert('Please enter a valid image URL.');
    }

    image.src = '';
    imageStatus.textContent = 'Checking...';

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            image.src = imageUrl;
            imageStatus.textContent = 'Image loaded successfully!';
        })
        .catch(error => {
            image.src = '';
            imageStatus.textContent = `Error: ${error.message}`;
        });
});