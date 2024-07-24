import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

const Footer = (): JSX.Element => (
  <FooterContainer>
    <FooterText>
      Note: DICOM files aren't uploaded anywhere. Validation is done only on the
      client side.
    </FooterText>
  </FooterContainer>
);

export default Footer;
