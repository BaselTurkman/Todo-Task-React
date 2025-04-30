import { AlertColor } from "@mui/material";
import { ReactNode } from "react";

export interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

export interface SnackbarContextType {
  showSnackbar: (message: string, severity?: AlertColor) => void;
}

export interface SnackbarProviderProps {
  children: ReactNode;
}

export type SnackbarAction =
  | {
      type: "show-snackbar";
      payload: {
        message: string;
        severity?: AlertColor;
      };
    }
  | {
      type: "hide-snackbar";
    };
