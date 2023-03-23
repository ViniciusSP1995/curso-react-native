import React from 'react';
import  { StyleSheet, SafeAreaView } from 'react-native';
//import Pai from './components/indireta/Pai';
//import Pai from './components/direta/Pai';
 //import Contador from './components/Contador'
//import Botao from './components/Botao'
//import MinMax from './components/MinMax'
//import X, { Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro'
//import Aleatorio from './components/Aleatorio'
//import Titulo from './components/Titulo'
//import ContadorV2 from './components/contador/ContadorV2'
//import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/Membro'
//import UsuarioLogado from './components/UsuarioLogado'
//import Produtos from './components/produtos/ListaProdutos'
//import ProdutosV2 from './components/produtos/ListaProdutosV2'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import Quadrado from './components/layout/Quadrado'
//import FlexBoxV4 from './components/layout/FlexBoxV4';

import Mega from './components/mega/Mega'

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={12}/>
       { /*
        <FlexBoxV4/>
        <FlexBoxV3/>
        <FlexBoxV2 />    
        <FlexBoxV1/>        
        <DigiteSeuNome/>
        <ProdutosV2/>
        <UsuarioLogado usuario={  {nome: 'Gui', email: 'gui@gui.com'}   }/>
        <UsuarioLogado usuario={  {nome: 'Ana'}   }/>
        <UsuarioLogado usuario={  {email: 'vini@vini.com'}   }/>
        <UsuarioLogado usuario={  {nome: null}   }/>
        <UsuarioLogado usuario={  {}   }/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>                   
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva"/>
            <Membro nome="Gui" sobrenome="Silva"/>
            <Membro nome="Rebeca" sobrenome="Silva"/>
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar/>
        <ContadorV2/>    
       <Pai/>
       <Pai/>
       <Contador inicial={100} passo={13}/>
       <Botao/>
       <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
       <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/>
       <MinMax/>
        <X/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </SafeAreaView>
    )

    const style = StyleSheet.create({
        App: {
            flex: 1,
            justifyContent: 'center',
            alignItems: "center",
            padding: 20
        }   

    })

