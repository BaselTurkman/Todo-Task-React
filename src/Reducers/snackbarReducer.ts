import { SEVERITIES } from "../types";
import { SnackbarAction, SnackbarState } from "../types/snackbar";

export const snackbarReducer = (
  state: SnackbarState,
  action: SnackbarAction
): SnackbarState => {
  switch (action.type) {
    case "show-snackbar":
      return {
        ...state,
        open: true,
        message: action.payload?.message ?? "",
        severity: action.payload?.severity || SEVERITIES.INFO,
      };
    case "hide-snackbar":
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
