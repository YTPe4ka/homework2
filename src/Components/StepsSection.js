import styled from 'styled-components';

const StepsContainer = styled.section`
  padding: 3rem 2rem;
  background-color: #fdf6e4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
`;

const StepsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  text-align: left;
`;

const Step = styled.div`
  flex: 1;
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }

  strong {
    font-size: 1.5rem;
    color: #003d5c;
  }
`;

const CallToAction = styled.button`
  margin-top: 2rem;
  background-color: #003d5c;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #005a80;
  }
`;

const StepsSection = () => (
  <StepsContainer>
    <Title>It's easy as 1, 2, 3</Title>
    <Subtitle>Clersky can help your unique business needs. Here's how:</Subtitle>
    <StepsGrid>
      <Step>
        <h3>1. Fill out a form</h3>
        <p>Tell us what you're looking for. This takes <strong>5 minutes</strong>.</p>
      </Step>
      <Step>
        <h3>2. Get a reply</h3>
        <p>It will take a Clersky rep to follow up within <strong>24 hours</strong>.</p>
      </Step>
      <Step>
        <h3>3. Take advantage</h3>
        <p>Our monthly plans start at just <strong>$969 USD</strong>.</p>
      </Step>
    </StepsGrid>
    <CallToAction>Book Free Discovery Call</CallToAction>
  </StepsContainer>
);

export default StepsSection;
