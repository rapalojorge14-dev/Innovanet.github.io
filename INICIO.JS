const slides = document.querySelectorAll('.slide');
let i = 0;

setInterval(() => {
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}, 5000);


document.addEventListener('DOMContentLoaded', () => {
  const paises = document.querySelectorAll('.pais');

  paises.forEach(pais => {
    const dots = pais.querySelectorAll('.dots span');

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        // Aquí se podría agregar lógica de carrusel si quieres mover los logos
      });
    });
  });
});
