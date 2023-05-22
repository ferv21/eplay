import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const anoAtual = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidas</Link>
          </li>
          <li>
            <Link>Promoção</Link>
          </li>
          <li>
            <Link>Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{anoAtual} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
