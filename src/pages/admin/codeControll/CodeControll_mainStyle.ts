import styled from "styled-components";

const LeftSection = styled.div`
  flex: 1;
  background-color: red;
`;

const RightSection = styled.div`
  flex: 1;
  background-color: blue;
`;

const Container = styled.div`
  display: flex;
  min-width: 150vh;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

export { LeftSection, RightSection, Container };
