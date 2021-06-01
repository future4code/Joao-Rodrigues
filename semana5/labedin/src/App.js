import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbhz1-1.fna.fbcdn.net/v/t1.6435-9/67879046_2379854572097477_3533120452232740864_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHh1Vms8XbmBzrdcL0iK0_D-sN9yNy4MJH6w33I3LgwkWw0fpr6paCU5Iq2cWGxu6EnhSrZCV5GOu31Aukurpy-&_nc_ohc=NZ5-YKCCsMQAX_LRrZW&_nc_ht=scontent.fbhz1-1.fna&oh=84e01406f149afd45750c44c1848067a&oe=60DBEA27" 
          nome="João Pedro Lopes" 
          descricao="Oi, eu sou o João Pedro. Sou aluno da Labenu. Adoro codar, ver filmes e series e jogar CSGO."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className=".page-section-container-card-pequeno">
        <CardPequeno
          tituloInfo="Email:"
          info="joaopedrolr.7@gmail.com"
        />  

        <CardPequeno
          tituloInfo="Endereço:"
          info="Rua Inexistente, 100 - Townsville"
        />  
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://d3ugyf2ht6aenh.cloudfront.net/stores/939/984/themes/common/logo-2115312388-1549721760-13f212ebe433f3155293da56ab672a381549721760-480-0.png?0" 
          nome="Sobral Design" 
          descricao="Help Desk - Auxiliava nas atividades de infraestrutura de TI, mantendo a disponibilidade dos 
          sistemas e atendendo às políticas de segurança da empresa." 
        />
        
        <CardGrande
          imagem="data:image/png;base64,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" 
          nome="Delta Construções" 
          descricao="Assistente Administrativo - Responsável pelo controle de receitas e 
          despesas e pelo gerenciamento das tarefas de rotina essenciais ao funcionamento de qualquer organização"  
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
