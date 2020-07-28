import React from 'react';
import Menu from './componentes'
import dadosIniciais from '../src/componentes/data/dados_iniciais.json'
import BannerMain from './componentes/components/BannerMain'
import Carousel from './componentes/components/Carousel'
import Footer from './componentes/components/Footer'

function App() {
  return (
    <div style={{background: '#141414'}}>
        <Menu></Menu>
        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript parte da rotina das desenvolvedoras e desnvovlvedores. Mas o que els fazem afinal? Descubra com a Vanessa!"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        /> 

        <Footer />
    </div>
  );
}

export default App;