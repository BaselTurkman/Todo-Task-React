import { useReducer, FC } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import { snackbarReducer } from "../Reducers/snackbarReducer";
import { initialSnackbar } from "../constants/initialSnackbar";
import { SnackbarProviderProps } from "../types/snackbar";
import { SnackbarContext } from "./SnackbarContext";

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialSnackbar);

  const showSnackbar = (message: string, severity: AlertColor) => {
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
