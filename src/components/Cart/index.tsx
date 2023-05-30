import Button from '../Button'
import Tag from '../Tag'
import starwars from '../../assets/images/star_wars.png'
import {
  CartContainer,
  Overlay,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'
const Cart = () => {
  return (
    <>
      <CartContainer>
        <Overlay />
        <SideBar>
          <ul>
            <CartItem>
              <img src={starwars} alt="" />
              <div>
                <h3>Nome do jogo</h3>
                <Tag>RPG</Tag>
                <Tag>PS5</Tag>
                <span>R$ 150,00</span>
              </div>
              <button type="button" />
            </CartItem>
            <CartItem>
              <img src={starwars} alt="" />
              <div>
                <h3>Nome do jogo</h3>
                <Tag>RPG</Tag>
                <Tag>PS5</Tag>
                <span>R$ 150,00</span>
              </div>
              <button type="button" />
            </CartItem>
          </ul>
          <Quantity>2 jogo(s) no carrinho</Quantity>
          <Prices>
            Total de R$250,00 <span>Em até 6x sem juros</span>
          </Prices>
          <Button title="Clique aqui para continuar com a compra" type="button">
            Continuar com a compra
          </Button>
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Cart
