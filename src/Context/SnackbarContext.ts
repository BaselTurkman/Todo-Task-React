import { createContext } from "react";
import { AlertColor } from "@mui/material";

export const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export interface SnackbarContextType {
  showSnackbar: (message: string, severity: AlertColor) => void;
}
