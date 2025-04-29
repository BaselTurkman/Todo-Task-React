import { SnackbarState } from "../types/snackbar";


export const initialSnackbar: SnackbarState = {
  open: false,
  message: "",
  severity: "info",
};
