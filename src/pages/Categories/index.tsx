import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import RE4 from '../../assets/images/resident.png'
import STARWARS from '../../assets/images/star_wars.png'
import DIABLO from '../../assets/images/diablo.png'
import ZELDA from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resindent Evil 4, conhecido no Japão como Biohazard, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$150'],
    image: RE4
  },
  {
    id: 2,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'PS5',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo  de ação e aventura desenvolvido pela respawn...',
    infos: ['10%', 'R$150'],
    image: STARWARS
  },
  {
    id: 3,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resindent Evil 4, conhecido no Japão como Biohazard, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$150'],
    image: RE4
  },
  {
    id: 4,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'PS5',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo  de ação e aventura desenvolvido pela respawn...',
    infos: ['10%', 'R$150'],
    image: STARWARS
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['05/04'],
    image: DIABLO
  },
  {
    id: 6,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['05/04'],
    image: ZELDA
  },
  {
    id: 7,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['05/04'],
    image: DIABLO
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['05/04'],
    image: ZELDA
  }
]

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="gray" />
      <ProductsList games={emBreve} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="gray" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  )
}

export default Categories
