import styled from "styled-components";

import { ThemeProps } from "../common/themeProps";
import { useTheme } from "../hooks/useTheme";

const StyledContainer = styled.main<ThemeProps>`
  height: 100vh;
  width: 100vw;
  background-color: ${({ selectedTheme }) =>
    selectedTheme === "dark" ? "#272643" : "#fafafa"};
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  const { selectedTheme } = useTheme();

  return (
    <StyledContainer selectedTheme={selectedTheme}>{children}</StyledContainer>
  );
};

export default Container;
