function jogar() {
   const numeroSecreto = Math.floor(Math.random() * 100) + 1;
   let tentativa;
   let tentativas = 0;

   do {
      tentativa = Number(prompt('Tente adivinhar o número (entre 1 e 100):'));
      tentativas++;

      if (tentativa > numeroSecreto) {
         alert('Menos!');
      } else if (tentativa < numeroSecreto) {
         alert('Mais!');
      } else if (tentativa === numeroSecreto) {
         alert(`🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`);
      } else {
         alert('Digite um número válido!');
      }

   } while (tentativa !== numeroSecreto);
}

jogar();
