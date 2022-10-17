import type { NextPage } from 'next'

import ResultadoParcial from '../@ui/components/container/resultado-parcial'

const Home: NextPage = () => {
  return (
    <div>
      <ResultadoParcial qtdeCerto={1} qtdeMeioCerto={3}></ResultadoParcial>
    </div>
  )
}

export default Home
