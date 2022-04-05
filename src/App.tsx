import { Routes, BrowserRouter, Route } from "react-router-dom";

import { ThemeProvider } from "./hooks/useTheme";

import GlobalStyles from "./styles/global";

import Home from "./pages/home";
import Status from "./pages/status";

const App = () => (
  <>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default App;
