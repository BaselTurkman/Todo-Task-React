import { FC } from "react";
import { TodoTaskProps } from "../types";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

const TodoTask: FC<TodoTaskProps> = ({ task, deleteTask, completeTask }) => {
  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: task.isComplete ? "#e0f7fa" : "white" }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="h6"
              sx={{ textDecoration: task.isComplete ? "line-through" : "none" }}
            >
              {task.taskName}
            </Typography>
            <Typography color="text.secondary">
              Deadline: {task.deadline} day(s)
            </Typography>
            {task.isComplete && (
              <Typography variant="body2" color="success.main">
                Completed
              </Typography>
            )}
          </Box>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              color={task.isComplete ? "warning" : "success"}
              onClick={() => completeTask(task.id)}
            >
              {task.isComplete ? "Undo" : "Complete"}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoTask;
