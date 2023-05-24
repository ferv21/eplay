import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import banner from '../../assets/images/fundo_hogwarts.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
    </>
  )
}

export default Product
