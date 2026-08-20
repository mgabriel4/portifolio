// Destaca o link da navegação correspondente à seção visível na tela
document.addEventListener('DOMContentLoaded', function () {
  const secoes = document.querySelectorAll('.secao');
  const links = document.querySelectorAll('.sidebar-nav a');

  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        const id = entrada.target.getAttribute('id');
        links.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.5 });

  secoes.forEach(function (secao) {
    observador.observe(secao);
  });
});