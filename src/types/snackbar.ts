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

interface SnackbarPayload {
  message: string;
  severity: AlertColor;
}

export type SnackbarAction = {
  type: "show-snackbar" | "hide-snackbar";
  payload?: SnackbarPayload;
};

export enum SnackbarSeverity {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}
