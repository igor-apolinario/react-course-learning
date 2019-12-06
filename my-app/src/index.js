import React from 'react'
import ReactDOM from 'react-dom'
// import A, { CompB as B } from './components/DoisComponentes'
// import PrimeiroComponente from './components/PrimeroComponente'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import ComponenteClasse from './components/ComponenteClasse'
// import Pai from './components/Pai'
// import Contador from './components/Contador'
import Hook from './components/Hook'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial={100} /> */}
        {/* <Pai /> */}
        {/* <ComponenteClasse valor="Sou um componente de classe!" /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereiraaaaa">
            <Membro nome="André" />
            <Membro nome="AAAA" />
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <MultiElementos /> */}
        {/* <A valor="Olá, eu sou o A" />
        <B valor="Olá, eu sou o B" /> */}
        {/* <PrimeiroComponente valor="Teste" /> */}
    </div>
, element);