import styled from 'styled-components';

const PartnersContainer = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
  text-align: center;

  img {
    margin: 0 1rem;
  }
`;

const PartnersSection = () => (
  <PartnersContainer>
    <h2>We partner with the best</h2>
    <div>
      <img src="/path/to/stripe-logo.png" alt="Stripe" />
      <img src="/path/to/google-logo.png" alt="Google" />
      <img src="/path/to/notion-logo.png" alt="Notion" />
      <img src="/path/to/gusto-logo.png" alt="Gusto" />
    </div>
  </PartnersContainer>
);

export default PartnersSection;
 