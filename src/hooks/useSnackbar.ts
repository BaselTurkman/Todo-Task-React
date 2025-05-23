import { useContext } from "react";
import { SnackbarContext } from "../Context/SnackbarContext";
import { SnackbarContextType } from "../types/snackbar";

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  
  return context;
};
