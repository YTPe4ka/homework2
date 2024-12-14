import styled from 'styled-components';
import img from '../assets/characters.png';

const ScenesContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 3rem 2rem;
  background-color: #f5f5f5;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const Illustration = styled.img`
  flex: 1;
  max-width: 400px;
`;

const ScenesSection = () => (
  <ScenesContainer>
    <TextContainer>
      <h2>How the scenes fit together</h2>
      <p>Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
    </TextContainer>
    <Illustration src={img} alt="Scenes Illustration" />
  </ScenesContainer>
);

export default ScenesSection;
