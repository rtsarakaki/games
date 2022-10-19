import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Rodada from '../@ui/components/rodada/rodada'
import Botoeira from '../@ui/components/botoeira/botoeira'
import Segredo from '../@ui/components/segredo/segredo'
import If from '../@ui/components/logico/if'


const getContextoInicial = () => {
  return {
    partidaEmAndamento: false,
    segredoDescoberto: false,
    rodadaAtual: 0,
    segredo: ["", "", "", ""],
    rodadas: [
      {
        posicaoSelecionada: 0,
        palpite: ["", "", "", ""],
        PosicaoCorCerta: 0,
        CorExiste: 0
      },
      {
        posicaoSelecionada: 0,
        palpite: ["", "", "", ""],
        PosicaoCorCerta: 0,
        CorExiste: 0
      },
      {
        posicaoSelecionada: 0,
        palpite: ["", "", "", ""],
        PosicaoCorCerta: 0,
        CorExiste: 0
      },
      {
        posicaoSelecionada: 0,
        palpite: ["", "", "", ""],
        PosicaoCorCerta: 0,
        CorExiste: 0
      },
      {
        posicaoSelecionada: 0,
        palpite: ["", "", "", ""],
        PosicaoCorCerta: 0,
        CorExiste: 0
      },
      {
        posicaoSelecionada: 0,
        palpite: ["", "", "", ""],
        PosicaoCorCerta: 0,
        CorExiste: 0
      },
    ]
  }
}

const Home: NextPage = () => {
  const [dados, setDados] = useState(getContextoInicial())

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

  function palpiteConcluido() {

    const palpite = dados.rodadas[dados.rodadaAtual].palpite
    const segredo = dados.segredo

    function contarItens(object: any, item: any) {
      if (!object[item]) {
        object[item] = 1
      }
      else {
        object[item]++
      }
      return object
    }

    const contagemCores = segredo.reduce(contarItens, {})

    const evalCertos = (item: string, indice: number) => {
      if (item === segredo[indice]) {
        contagemCores[item]--
        return [2, item, segredo[indice]]
      }
      else {
        if (contagemCores[item] && contagemCores[item] > 0) {
          contagemCores[item]--
          return [1, item, segredo[indice]]
        }
        else {
          return [0, item, segredo[indice]]
        }
      }
    }
    const resultado = palpite?.map((item: string, indice: number) => evalCertos(item, indice))
    const qtdeCertos = resultado?.filter((item: any) => { return item[0] === 2 }).length
    const qtdeCorExiste = resultado?.filter((item: any) => { return item[0] === 1 }).length

    let copia = { ...dados }
    copia.rodadas[copia.rodadaAtual].PosicaoCorCerta = qtdeCertos
    copia.rodadas[copia.rodadaAtual].CorExiste = qtdeCorExiste
    copia.segredoDescoberto = qtdeCertos === segredo.length
    copia.rodadaAtual++
    copia.partidaEmAndamento = !copia.segredoDescoberto && copia.rodadaAtual <= 5
    setDados(copia)
  }

  function iniciarPartida() {
    let copia = getContextoInicial()
    const segredo = gerarSegredo()
    copia.segredo = segredo
    copia.partidaEmAndamento = true
    setDados(copia)
  }

  function gerarSegredo() {
    const valores = new Array(4).fill('')
    return valores.map(() => {
      const valor = (Math.floor(Math.random() * 5) + 1 + '')
      return valor
    })
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='central-box'>
        <If condition={dados.segredoDescoberto}>
          <span className='text-white'>VOCÊ ACERTOU!!!</span>
        </If>
        <div className='d-flex justify-content-between mt-4'>
          <Rodada
            palpite={dados.rodadas[0].palpite}
            onBotaoSelecionado={(id) => onBotaoSelecionado(id)}
            onPalpiteConcluido={() => palpiteConcluido()}
            qtdeCerto={dados.rodadas[0].PosicaoCorCerta}
            qtdeMeioCerto={dados.rodadas[0].CorExiste}
            disabled={dados.rodadaAtual !== 0}></Rodada>
          <Rodada
            palpite={dados.rodadas[1].palpite}
            onBotaoSelecionado={(id) => onBotaoSelecionado(id)}
            onPalpiteConcluido={() => palpiteConcluido()}
            qtdeCerto={dados.rodadas[1].PosicaoCorCerta}
            qtdeMeioCerto={dados.rodadas[1].CorExiste}
            disabled={dados.rodadaAtual !== 1}></Rodada>
          <Rodada
            palpite={dados.rodadas[2].palpite}
            onBotaoSelecionado={(id) => onBotaoSelecionado(id)}
            onPalpiteConcluido={() => palpiteConcluido()}
            qtdeCerto={dados.rodadas[2].PosicaoCorCerta}
            qtdeMeioCerto={dados.rodadas[2].CorExiste}
            disabled={dados.rodadaAtual !== 2}></Rodada>
          <Rodada
            palpite={dados.rodadas[3].palpite}
            onBotaoSelecionado={(id) => onBotaoSelecionado(id)}
            onPalpiteConcluido={() => palpiteConcluido()}
            qtdeCerto={dados.rodadas[3].PosicaoCorCerta}
            qtdeMeioCerto={dados.rodadas[3].CorExiste}
            disabled={dados.rodadaAtual !== 3}></Rodada>
          <Rodada
            palpite={dados.rodadas[4].palpite}
            onBotaoSelecionado={(id) => onBotaoSelecionado(id)}
            onPalpiteConcluido={() => palpiteConcluido()}
            qtdeCerto={dados.rodadas[4].PosicaoCorCerta}
            qtdeMeioCerto={dados.rodadas[4].CorExiste}
            disabled={dados.rodadaAtual !== 4}></Rodada>
          <Rodada
            palpite={dados.rodadas[5].palpite}
            onBotaoSelecionado={(id) => onBotaoSelecionado(id)}
            onPalpiteConcluido={() => palpiteConcluido()}
            qtdeCerto={dados.rodadas[5].PosicaoCorCerta}
            qtdeMeioCerto={dados.rodadas[5].CorExiste}
            disabled={dados.rodadaAtual !== 5}></Rodada>
          <Segredo segredo={dados.segredo} revelarSegredo={!dados.partidaEmAndamento}></Segredo>
        </div>
        <div className='d-flex justify-content-center'>
          <Botoeira onCorSelecionada={(corId) => onCorSelecionada(corId)}></Botoeira>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <If condition={!dados.partidaEmAndamento}>
            <button className='btn btn-light' onClick={() => iniciarPartida()} >Nova Partida</button>
          </If>
        </div>
      </div>
    </div>
  )
}

export default Home
