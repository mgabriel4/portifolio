// Filtro por categoria na seção de Habilidades
document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll('.filtro-hab');
  const bolhas = document.querySelectorAll('.bolha-hab');

  botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
      const categoria = botao.getAttribute('data-categoria');

      botoes.forEach(function (b) { b.classList.remove('ativo'); });
      botao.classList.add('ativo');

      bolhas.forEach(function (bolha) {
        const categoriasDaBolha = bolha.getAttribute('data-categoria').split(' ');
        const mostrar = categoria === 'todas' || categoriasDaBolha.includes(categoria);
        bolha.classList.toggle('escondida', !mostrar);
      });
    });
  });
});