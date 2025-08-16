document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');

    if (!galleryGrid) return;

    const images = Array.from(galleryGrid.querySelectorAll('img'));
    let currentIndex = 0;

    function showImage(index) {
        lightboxImage.src = images[index].src;
        currentIndex = index;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => showImage(index));
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
    });

    prevImage.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextImage.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox.click();
        if (e.key === 'ArrowLeft') prevImage.click();
        if (e.key === 'ArrowRight') nextImage.click();
    });
});
