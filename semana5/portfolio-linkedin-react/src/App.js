import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Lucas Bacelar"
          descricao="Oi, meu nome é Lucas. Sou um dos alunos Labenu. amo estudar sobre assuntos relacionados a computação e sempre estou procurando soluções mais fáceis para problemas dificeis."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        {<CardPequeno imagem ="https://image.shutterstock.com/image-vector/phone-email-fax-icon-on-600w-1662529582.jpg" nome="Email" descricao="random@hotmail.com" />}

        {<CardPequeno imagem ="https://image.shutterstock.com/image-vector/arrow-pointer-mark-icon-vector-600w-1420320422.jpg" nome="Endereço" descricao="Rua random" />}
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://instagram.frec10-1.fna.fbcdn.net/v/t51.2885-15/s150x150/79140671_1465729036934432_8656212738117634151_n.jpg?tp=1&_nc_ht=instagram.frec10-1.fna.fbcdn.net&_nc_ohc=D2RLkHT_vhwAX-5H1-2&oh=eab4c42a634e996faa9dc049da218772&oe=6072873C"
          nome="Auxiliar de Manutenção"
          descricao="Instalação e manutenção de infraestruturas elétricas"
        />

        <CardGrande
          imagem="https://instagram.frec10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/13651810_169069140183878_2052853785_a.jpg?tp=1&_nc_ht=instagram.frec10-1.fna.fbcdn.net&_nc_ohc=70nyFE4ZBFUAX_iDVFu&oh=fbf0b90813a1f3ac0efcd87b702c7828&oe=60721069"
          nome="Voluntário IEEE"
          descricao="Voluntário em um grupo de estudos web"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
