import { createContext, useContext, useReducer, FC } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import { snackbarReducer } from "../Reducers/snackbarReducer";
import { initialSnackbar } from "../constants/initialSnackbar";
import { SnackbarContextType, SnackbarProviderProps } from "../types/snackbar";

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialSnackbar);

  const showSnackbar = (message: string, severity: AlertColor = "info") => {
    dispatch({ type: "show-snackbar", payload: { message, severity } });
  };

  const handleClose = () => {
    dispatch({ type: "hide-snackbar" });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={state.open}
        autoHideDuration={1500}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={state.severity} variant="filled">
          {state.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
