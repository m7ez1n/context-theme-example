import { Link } from "react-router-dom";

import { useTheme } from "../hooks/useTheme";

import Container from "../components/container";
import Text from "../components/text";

import { Wrapper } from "./home";

const Status = () => {
  const { selectedTheme } = useTheme();

  return (
    <Container>
      <Wrapper>
        <Text>The {selectedTheme} theme has been selected</Text>
        <Link to="/">
          <Text>Home</Text>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Status;
