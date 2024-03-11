document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greeting = "Entering the Matrix..."; 

    if (currentHour < 12) {
        greeting = "Decrypting the Morning...";
    } else if (currentHour < 18) {
        greeting = "Compiling the Afternoon...";
    } else {
        greeting = "Navigating the Night...";
    }

    greetingElement.textContent = greeting;
});

document.addEventListener('DOMContentLoaded', function() {
    const imageWindow = document.querySelector('.image-window');

    const codingImages = [];
    for (let i = 1; i <= 6; i++) {
        codingImages.push(`static/images/coding/${i}.jpg`);
    }

    const hikingImages = [];
    for (let i = 1; i <= 6; i++) {
        hikingImages.push(`static/images/hiking/${i}.jpg`);
    }

    const techImages = [];
    for (let i = 1; i <= 6; i++) {
        techImages.push(`static/images/tech/${i}.jpg`);
    }

    const dogImages = [];
    for (let i = 1; i <= 6; i++) {
        dogImages.push(`static/images/dogs/${i}.jpg`);
    }

    let currentImageIndex = 0;

    function displayNextImage() {
        let images;
        if (window.location.pathname.includes('coding')) {
            images = codingImages;
        } else if (window.location.pathname.includes('tech')) {
            images = techImages;
        } else if (window.location.pathname.includes('hiking')) {
            images = hikingImages;
        } else if (window.location.pathname.includes('dogs')) {
            images = dogImages;
        }
        imageWindow.innerHTML = `<img src="${images[currentImageIndex]}" alt="Image ${currentImageIndex + 1}">`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    displayNextImage();

    setInterval(displayNextImage, 3000);
});
