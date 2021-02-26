console.log("Bem vindo ao jogo de Blackjack!");

let confirmação = confirm("Quer iniciar uma nova rodada?")

if(!confirmação) {
   console.log("O jogo acabou");
}

else {
   // Quantidade de cartas de cada jogador
   let qtdCartas = 2;

   // Inicialização de array vazio para adicionar as cartas
   let cartasPC = []
   let cartasUsuário = []

   // Pontuação inicial dos jogadores
   let pontuaçãoPC = 0
   let pontuaçãoUsuário = 0

   // Booleano para checar se o jogador deseja comprar novas cartas
   let comprarUsuário = true
   let comprarPC = true

   // String com cartas do usuário
   let suasCartasUsuário = ""
   let suasCartasPC = ""

   // String com o ganhador
   let ganhador

   while(true){

      // Loop que se repete de acordo com quantidade de cartas
      for(let i = 0; i < qtdCartas; i++){
         // Inserção das novas cartas no array
         cartasPC.push(comprarCarta())
         cartasUsuário.push(comprarCarta())

         // Soma da pontuação de cada carta
         pontuaçãoPC += cartasPC[i].valor
         pontuaçãoUsuário += cartasUsuário[i].valor

         // Cartas que o usuário tem em mãos
         suasCartasUsuário += cartasUsuário[i].texto + " "
         suasCartasPC += cartasPC[i].texto + " " 
      }

      // Checando se o PC ou o Usuário tem duas cartas de Ás
      if(cartasPC[0].valor === 11 && cartasPC[1].valor === 11){
         continue
      }

      else if(cartasUsuário[0].valor === 11 && cartasUsuário[1].valor === 11){
         continue
      }

      // Senão tiverem o jogo continua
      else {
         break;
      }
   }

   // Compra de cartas do usuário
   while(comprarUsuário) {
      comprarUsuário = confirm(
         `Suas cartas são ${suasCartasUsuário}. A carta revelada do computador é ${cartasPC[0].texto}.` +
         "\n"+
         "Deseja comprar mais uma carta?"
      )
      
      if(comprarUsuário) {
         let novaCarta = comprarCarta()
         cartasUsuário.push(novaCarta)

         pontuaçãoUsuário += novaCarta.valor

         suasCartasUsuário += novaCarta.texto + " "
      }

      // Verificando se a pontuação ultrapassou 21
      if(pontuaçãoUsuário > 21) {
         comprarUsuário = false;
         break;
      }
   }

   // Compra de cartas do computador
   while(comprarPC) {
      
      if(comprarPC) {
         let novaCartaPC = comprarCarta()
         pontuaçãoPC += novaCartaPC.valor
         suasCartasPC += novaCartaPC.texto + " "

         cartasPC.push(novaCartaPC)
      }

      // Verificando se a pontuação do pc é igual ou superior ao do usuário
      if(pontuaçãoPC >= pontuaçãoUsuário) {
         comprarPC = false;
         break;
      }
   }

   // Checagem de quem ganhou ou se teve empate
   if((pontuaçãoPC > pontuaçãoUsuário && pontuaçãoPC <= 21) || (pontuaçãoUsuário > 21 && pontuaçãoPC <= 21)){
      ganhador = "O computador ganhou!"
   }
   else if((pontuaçãoUsuário > pontuaçãoPC && pontuaçãoUsuário <= 21) || (pontuaçãoPC > 21 && pontuaçãoUsuário <= 21)) {
      ganhador = "O usuário ganhou!"
   }
   else {
      ganhador = "Empate"
   }

   // Mensagem da pontuação e do ganhador
   alert(
      `Suas cartas são  ${suasCartasUsuário}. Sua pontuação é ${pontuaçãoUsuário}.\n` + 
      `As cartas do computador são ${suasCartasPC} .\nA pontuação do computador é ${pontuaçãoPC}\n` +
      ganhador
      )
}
