import styled from 'styled-components';
import img from '../assets/Frame.png';  

const HeroContainer = styled.section`
  background-color:rgb(0, 67, 13);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 2rem auto 0;
`;

const HeroSection = () => (
  <HeroContainer>
    <Title>Running the show has never been so easy.</Title>
    <Subtitle>
      Ready to put the human back in HR? Clersky helps you create an inclusive and compliant workplace.
    </Subtitle>
    <HeroImage src={img} alt="Hero Illustration" />
  </HeroContainer>
);

export default HeroSection;
