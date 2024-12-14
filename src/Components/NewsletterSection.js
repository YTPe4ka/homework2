import styled from 'styled-components';

const NewsletterContainer = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #fdf6e4;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color:rgb(0, 92, 0);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #005a80;
  }
`;

const NewsletterSection = () => (
  <NewsletterContainer>
    <Title>Stay up to date!</Title>
    <p>Sign up for the latest Clersky news.</p>
    <InputGroup>
      <Input type="email" placeholder="Enter your email" />
      <Button>Sign Up</Button>
    </InputGroup>
  </NewsletterContainer>
);

export default NewsletterSection;
