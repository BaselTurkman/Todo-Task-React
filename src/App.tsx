import { Container } from "@mui/material";
import Todo from "./pages/Todo/Todo";
import { SnackbarProvider } from "./Context/snackbarProvider";

function App() {
  return (
    <SnackbarProvider>
      <Container>
        <Todo />
      </Container>
    </SnackbarProvider>
  );
}

export default App;
