import type { NextPage } from 'next'

import Rodada from '../@ui/components/rodada/rodada'
import Botoeira from '../@ui/components/botoeira/botoeira'
import { useState } from 'react'

const contexto = {
  rodadaAtual: 0,
  rodadas: [
    {
      posicaoSelecionada: 0,
      palpite: ["", "", "", ""]
    },
    {
      posicaoSelecionada: 0,
      palpite: ["", "", "", ""]
    },
    {
      posicaoSelecionada: 0,
      palpite: ["", "", "", ""]
    },
    {
      posicaoSelecionada: 0,
      palpite: ["", "", "", ""]
    },
    {
      posicaoSelecionada: 0,
      palpite: ["", "", "", ""]
    },
    {
      posicaoSelecionada: 0,
      palpite: ["", "", "", ""]
    },
  ]
}

const Home: NextPage = () => {
  const [dados, setDados] = useState({ ...contexto })

  function onCorSelecionada(corId: string) {
    let copia = { ...dados }
    copia.rodadas[copia.rodadaAtual].palpite[copia.rodadas[copia.rodadaAtual].posicaoSelecionada] = corId
    setDados(copia)
  }

  function onBotaoSelecionado(id: string) {
    let copia = { ...dados }
    copia.rodadas[copia.rodadaAtual].posicaoSelecionada = parseInt(id) - 1
    setDados(copia)
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='central-box'>
        <div className='d-flex justify-content-between mt-4'>
          <Rodada palpite={dados.rodadas[0].palpite} onBotaoSelecionado={(id) => onBotaoSelecionado(id)}></Rodada>
          <Rodada palpite={dados.rodadas[1].palpite} onBotaoSelecionado={(id) => onBotaoSelecionado(id)}></Rodada>
          <Rodada palpite={dados.rodadas[2].palpite} onBotaoSelecionado={(id) => onBotaoSelecionado(id)}></Rodada>
          <Rodada palpite={dados.rodadas[3].palpite} onBotaoSelecionado={(id) => onBotaoSelecionado(id)}></Rodada>
          <Rodada palpite={dados.rodadas[4].palpite} onBotaoSelecionado={(id) => onBotaoSelecionado(id)}></Rodada>
          <Rodada palpite={dados.rodadas[5].palpite} onBotaoSelecionado={(id) => onBotaoSelecionado(id)}></Rodada>
        </div>
        <div className='d-flex justify-content-center'>
          <Botoeira onCorSelecionada={(corId) => onCorSelecionada(corId)}></Botoeira>
        </div>
      </div>
    </div>
  )
}

export default Home
