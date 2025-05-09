import { FC, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { HeaderProps } from "../types";
import { useSnackbarAlerts } from "../../../hooks/useSnackbarAlerts";

const Header: FC<HeaderProps> = ({ addTask }) => {
  const { showSuccessSnackbar } = useSnackbarAlerts();

  const [taskName, setTask] = useState("");
  const [deadline, setDeadline] = useState(1);

  const handleAdd = () => {
    if (taskName.trim() === "") return;
    addTask(taskName, deadline);
    setTask("");
    setDeadline(1);
    showSuccessSnackbar("Task Added Successfully");
  };

  const isAddDisable = taskName.trim() === ""

  return (
    <Box display="flex" gap={2} mb={4}>
      <TextField
        label="Task"
        name="task"
        value={taskName}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <TextField
        label="Deadline (days)"
        type="number"
        name="deadline"
        defaultValue={1}
        value={deadline}
        onChange={(e) => setDeadline(Number(e.target.value))}
        sx={{ width: 150 }}
        slotProps={{
          input: {
            inputProps: {
              min: 1,
            },
          },
        }}
      />
      <Button variant="contained" onClick={handleAdd} disabled = {isAddDisable}>
        Add
      </Button>
    </Box>
  );
};

export default Header;
