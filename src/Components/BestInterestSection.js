import styled from 'styled-components';

const InterestContainer = styled.section`
  padding: 3rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      font-size: 0.9rem;
      color: #555;
    }
  }
`;

const BestInterestSection = () => (
  <InterestContainer>
    <h2>Consider everyone's best interest</h2>
    <p>HR is for everyone. Clersky can help you.</p>
    <FeaturesGrid>
      <FeatureCard>
        <h3>Protect Your Company</h3>
        <ul>
          <li>Compliance Audits & Training</li>
          <li>Employee Data Storage</li>
          <li>Policy Drafting</li>
        </ul>
      </FeatureCard>
      <FeatureCard>
        <h3>Set Your Employees Up For Success</h3>
        <ul>
          <li>Learning & Development</li>
          <li>Employee Relations</li>
          <li>Benefit Management</li>
          <li>Employee Performance</li>
        </ul>
      </FeatureCard>
      <FeatureCard>
        <h3>Know Your Industry's Legal Landscape</h3>
        <ul>
          <li>Workplace Investigations</li>
          <li>Employee Mediations</li>
          <li>Performance Tracking</li>
        </ul>
      </FeatureCard>
    </FeaturesGrid>
  </InterestContainer>
);

export default BestInterestSection;
