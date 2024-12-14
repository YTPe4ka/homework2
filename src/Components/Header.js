import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color:rgb(0, 67, 13);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Clersky</Logo>
    <Nav>
      <a href="#">Log In</a>
      <a href="#">Get Started</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
