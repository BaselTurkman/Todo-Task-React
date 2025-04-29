import { FC } from "react";
import { TodoListProps } from "../types";
import TodoTask from "./TodoTask";
import { Stack, Typography } from "@mui/material";

const TodoList: FC<TodoListProps> = ({
  todoList,
  deleteTask,
  completeTask,
}) => {
  return (
    <Stack spacing={2}>
      {todoList.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center">
          No tasks added yet.
        </Typography>
      ) : (
        todoList.map((task) => (
          <TodoTask
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))
      )}
    </Stack>
  );
};

export default TodoList;
