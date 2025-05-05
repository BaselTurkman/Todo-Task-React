import { SnackbarSeverity } from "../types/snackbar";
import { useSnackbar } from "./useSnackbar";

export function useSnackbarAlerts() {
  const { showSnackbar } = useSnackbar();

  const showSuccessSnackbar = (msg : string) => {
    showSnackbar(msg, SnackbarSeverity.Success);
  };

  return { showSuccessSnackbar };
}
