import styled from "styled-components";

import { ChildrenType } from "../common/childrenType";
import { ThemeProps } from "../common/themeProps";
import { useTheme } from "../hooks/useTheme";

const StyledText = styled.main<ThemeProps>`
  font-size: 1.8rem;
  margin: 1.4rem;
  color: ${({ selectedTheme }) =>
    selectedTheme !== "dark" ? "#272643" : "#fafafa"};
`;

const Text = ({ children }: ChildrenType) => {
  const { selectedTheme } = useTheme();

  return <StyledText selectedTheme={selectedTheme}>{children}</StyledText>;
};

export default Text;
