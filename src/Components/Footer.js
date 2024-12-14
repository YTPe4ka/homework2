import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background-color:rgb(0, 92, 15);
  color: white;
  text-align: center;
`;

const FooterNav = styled.nav`
  margin: 1rem 0;

  a {
    margin: 0 1rem;
    color: #ffa73c;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2023 Clersky, Inc. All rights reserved.</p>
    <FooterNav>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-of-service">Terms of Service</a>
      <a href="/careers">Careers</a>
      <a href="/press-kit">Press Kit</a>
    </FooterNav>
    <Copyright>
      A people company. Follow us on: 
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>, 
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>, 
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </Copyright>
  </FooterContainer>
);

export default Footer;
