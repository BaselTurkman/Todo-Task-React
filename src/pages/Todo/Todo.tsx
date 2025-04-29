import { FC, useState } from "react";
import { Container, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Task } from "./types";
import { useSnackbarAlerts } from "../../hooks/useSnackbarAlerts";

const Todo: FC = () => {
  const [todoList, setToDoList] = useState<Task[]>([]);
    const {showSuccessSnackbar} = useSnackbarAlerts();
  

  const addTask = (taskName: string, deadline: number): void => {
    const newTask: Task = { id: uuidv4(), taskName, deadline, isComplete: false };
    setToDoList([...todoList, newTask]);
  };

  const deleteTask = (taskId: string): void => {
    setToDoList(todoList.filter((task) => task.id !== taskId));
    showSuccessSnackbar("Task Deleted Successfully")
  };

  const completeTask = (taskId: string): void => {
    setToDoList(
      todoList.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">Todo List</Typography>
      <Header addTask={addTask} />
      <TodoList
        todoList={todoList}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </Container>
  );
};

export default Todo;
