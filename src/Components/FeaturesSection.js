import styled from 'styled-components';

const FeaturesContainer = styled.section`
  padding: 2rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const Feature = styled.div`
  max-width: 300px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const FeaturesSection = () => (
  <FeaturesContainer>
    <Feature>
      <h2>Put the human back in HR</h2>
      <p>Your employees are the real stars. Show the love and help them perform.</p>
    </Feature>
    <Feature>
      <h2>You don’t have to play all the parts</h2>
      <p>Sales, accounting, HR—Oh My! You can do it all—let Clersky help.</p>
    </Feature>
  </FeaturesContainer>
);

export default FeaturesSection;
