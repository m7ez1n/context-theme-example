import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsMoon } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";

import { useTheme } from "../hooks/useTheme";

import Button from "../components/button";
import Container from "../components/container";
import Text from "../components/text";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const { selectedTheme, toggleTheme } = useTheme();

  return (
    <Container>
      <Wrapper>
        <Button onClick={toggleTheme}>
          {selectedTheme === "dark" ? <BsMoon /> : <FaRegLightbulb />}
        </Button>

        <Link to="/status">
          <Text>Status</Text>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Home;
