const images = document.querySelectorAll('.post-card-content img');
const id = Math.floor(Math.random() * 1000) + 1;

images.forEach(img => img.src = `https://picsum.photos/id/${id}/800/700`);
console.log(images);