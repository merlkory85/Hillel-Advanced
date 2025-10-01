const images = [
    './img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg',
    './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg'
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.getElementById('randomImage').src = selectedImage;
}