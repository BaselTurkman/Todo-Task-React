import { useSnackbar } from "./useSnackbar";

export function useSnackbarAlerts() {
  const { showSnackbar } = useSnackbar();

  const showSuccessSnackbar = (msg : string) => {
    showSnackbar(msg, "success");
  };

  return { showSuccessSnackbar };
}
