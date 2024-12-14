import styled from 'styled-components';

const CTAContainer = styled.section`
  background-color: #003d5c;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background-color: #ffa73c;
  color: #003d5c;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ffc17c;
  }
`;

const CTASection = () => (
  <CTAContainer>
    <Title>Get Started With Clersky</Title>
    <Subtitle>Make sure your business puts people first.</Subtitle>
    <CTAButton>Book a Free Discovery Call</CTAButton>
  </CTAContainer>
);

export default CTASection;
