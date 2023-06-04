import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburguer>
            <Link to="/">
              <h1>
                <img src={logo} alt="EPLAY" />
              </h1>
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <Link
                    title="Clique aqui para acessar a página de categorias"
                    to="/categories"
                  >
                    Categorias
                  </Link>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a sessão de em breve"
                    to="/#coming-soon"
                  >
                    Novidades
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a sessão de promoções"
                    to="/#on-sale"
                  >
                    Promoções
                  </HashLink>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton role="button" onClick={openCart}>
            {items.length}
            <span> - produto(s) </span>
            <img src={cartIcon} alt="Carrinho de compras" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link
                title="Clique aqui para acessar a página de categorias"
                to="/categories"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a sessão de em breve"
                to="/#coming-soon"
              >
                Novidades
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a sessão de promoções"
                to="/#on-sale"
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </>
  )
}

export default Header
