import styled from 'styled-components';
import img from '../assets/Frame (1).png'

const DiversityContainer = styled.section`
  background-color: #f5f5f5;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 1rem 0 2rem;
`;

const Illustration = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const DiversitySection = () => (
  <DiversityContainer>
    <Title>Employees come in all shapes and sizes. Find the right fit.</Title>
    <Subtitle>
      Focus on casting and screening. Let Clersky handle contracts, resolve any
      on-set conflicts, and make sure you are compliant with work and safety boards.
    </Subtitle>
    <Illustration src={img} alt="Diverse Employees" />
  </DiversityContainer>
);

export default DiversitySection;
