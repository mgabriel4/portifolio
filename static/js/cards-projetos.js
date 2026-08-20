// Efeito de "tilt" (inclinação seguindo o mouse) + suporte a toque nos cards de projeto
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card-flip');
  const ehTelaDeToque = window.matchMedia('(hover: none)').matches;

  cards.forEach(function (card) {
    const inner = card.querySelector('.card-flip-inner');

    if (ehTelaDeToque) {
      // Em celular/tablet não existe hover real: o toque alterna o flip
      card.addEventListener('click', function (evento) {
        // se o toque foi no link "Ver projeto", deixa o link funcionar normalmente
        if (evento.target.closest('.link-projeto')) return;
        card.classList.toggle('flipped');
      });
      return;
    }

    // Em desktop: leve inclinação 3D seguindo a posição do mouse dentro do card
    card.addEventListener('mousemove', function (evento) {
      const retangulo = card.getBoundingClientRect();
      const x = evento.clientX - retangulo.left;
      const y = evento.clientY - retangulo.top;

      const centroX = retangulo.width / 2;
      const centroY = retangulo.height / 2;

      const inclinacaoX = ((y - centroY) / centroY) * -6; // graus
      const inclinacaoY = ((x - centroX) / centroX) * 6;

      inner.style.setProperty('--tilt', `rotateX(${inclinacaoX}deg) rotateY(${inclinacaoY + 180}deg)`);
    });

    card.addEventListener('mouseleave', function () {
      inner.style.removeProperty('--tilt');
    });
  });
});