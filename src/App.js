import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
export default App;
