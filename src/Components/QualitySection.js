import styled from 'styled-components';

const QualityContainer = styled.section`
  background-color: #003d5c;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const Feature = styled.div`
  text-align: center;

  img {
    margin-bottom: 1rem;
    width: 50px;
    height: 50px;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

const QualitySection = () => (
  <QualityContainer>
    <Title>HR Production of the Highest Quality</Title>
    <FeaturesGrid>
      <Feature>
        <img src="/path/to/icon1.png" alt="Educates & Informs" />
        <p>Educates & Informs Employee Expectations</p>
      </Feature>
      <Feature>
        <img src="/path/to/icon2.png" alt="Protects Your Business" />
        <p>Protects Your Business Just in Case</p>
      </Feature>
      <Feature>
        <img src="/path/to/icon3.png" alt="Manages Documents" />
        <p>Manages & Stores Important Documents</p>
      </Feature>
      <Feature>
        <img src="/path/to/icon4.png" alt="Healthy Work Environment" />
        <p>Create a Healthy Work Environment</p>
      </Feature>
    </FeaturesGrid>
  </QualityContainer>
);

export default QualitySection;
    