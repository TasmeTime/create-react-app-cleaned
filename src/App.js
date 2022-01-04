import styled from "styled-components";
import { Colors } from "./assets/Theme";

const AppEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${Colors.Primary};
  border: 2px solid ${Colors.Primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

function App() {
  return (
    <AppEl>
      <Title>Go ahead and start!</Title>
    </AppEl>
  );
}

export default App;
