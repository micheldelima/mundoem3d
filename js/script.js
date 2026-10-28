// Música de fundo
document.addEventListener('DOMContentLoaded', function() {
  var musica = document.getElementById('background-music');
  var musicControlButton = document.getElementById('music-control');

  function atualizarBotao() {
    musicControlButton.textContent = musica.paused ? '♪ Tocar música' : '❚❚ Pausar música';
  }

  musicControlButton.addEventListener('click', function() {
    if (musica.paused) {
      // O Chrome só permite tocar áudio depois de um clique do usuário (é o caso aqui)
      musica.play().then(atualizarBotao).catch(function(erro) {
        console.error('Não foi possível tocar a música:', erro);
        musicControlButton.textContent = 'Música indisponível';
      });
    } else {
      musica.pause();
      atualizarBotao();
    }
  });

  // Se o arquivo de áudio não for encontrado, avisa no botão e no console
  musica.addEventListener('error', function() {
    console.error('Arquivo de áudio não encontrado: ' + musica.currentSrc);
    musicControlButton.textContent = 'Música indisponível';
  });

  atualizarBotao();

  // Navegação das Sessões do Menu
  document.getElementById('show-about').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('sobre').style.display = 'flex';
  });

  document.getElementById('show-instructions').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('instrucoes').style.display = 'flex';
  });

  document.getElementById('start-game').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('jogos').style.display = 'flex';
  });

  document.getElementById('back-to-menu-instrucoes').addEventListener('click', function() {
    document.getElementById('instrucoes').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
  });

  document.getElementById('back-to-menu-sobre').addEventListener('click', function() {
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
  });

  document.getElementById('back-to-menu-jogos').addEventListener('click', function() {
    document.getElementById('jogos').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
  });

  // Criar efeito de neve
  var snowContainer = document.querySelector('.snow');

  function createSnowflake() {
    var snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  }

  setInterval(createSnowflake, 200);
});