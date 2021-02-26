console.log("Bem vindo ao jogo de Blackjack!");

let confirmação = confirm("Quer iniciar uma nova rodada?")

if(!confirmação) {
   console.log("O jogo acabou");
}

else {
   let qtdCartas = 2;
   let cartasPC = []
   let cartasUsuário = []
   let pontuaçãoPC = 0
   let pontuaçãoUsuário = 0

   for(let i = 0; i < qtdCartas; i++){
      cartasPC.push(comprarCarta())
      cartasUsuário.push(comprarCarta())

      pontuaçãoPC += cartasPC[i].valor
      pontuaçãoUsuário += cartasUsuário[i].valor
   }

   console.log("Usuário - cartas:", cartasUsuário[0].texto, cartasUsuário[1].texto, "-", String(pontuaçãoUsuário));
   console.log("Computador - cartas:", cartasPC[0].texto, cartasPC[1].texto, "-", String(pontuaçãoPC));

   if(pontuaçãoPC > pontuaçãoUsuário) {
      console.log("O computador ganhou!");
   }
   else if(pontuaçãoUsuário > pontuaçãoPC) {
      console.log("O usuário ganhou!");
   }
   else {
      console.log("Empate!");
   }
}
