import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  List,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import "./App.css";

const TodoApp = () => {
  const [showInputField, setShowInputField] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [hasError, setHasError] = useState<string>("");
  const [todoList, setToDoList] = useState<string[]>([]);

  const handleInputValue = () => {
    if (inputValue.trim() === "") {
      setHasError("Input Field Should not be empty");
    } else {
      setToDoList([...todoList, inputValue]);
      setInputValue("");
      setHasError("");
      setShowInputField(false);
    }
  };

  const handleUpdate = (index: number, updatedValue: string) => {
    const updatedList = [...todoList];
    updatedList[index] = updatedValue;
    setToDoList(updatedList);
  };

  const handleDelete = (index: number) => {
    setToDoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  return (
    <div className="addToDoButtonContainer">
      <Typography
        variant="h3"
        className="todoTitle"
        sx={{ fontFamily: "fantasy", marginBottom: "20px" }}
      >
        TODO Web Application
      </Typography>
      {!showInputField ? (
        <Button
          variant="contained"
          onClick={() => setShowInputField(true)}
          sx={{ width: "300px", backgroundColor: "blueviolet" }}
        >
          Add TODO List
        </Button>
      ) : (
        <div className="textFieldContainer">
          <TextField
            variant="outlined"
            label="Add TODO List"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            error={!!hasError}
            helperText={hasError}
          />
          <Button
            variant="contained"
            onClick={handleInputValue}
            sx={{ gap: "10px" }}
          >
            Create
          </Button>
        </div>
      )}
      <Card
        className="todoCard"
        sx={{
          boxShadow: "4px 10px 18px #ff00005c",
          backgroundColor: "#ff000026",
          marginTop: "50px",
        }}
      >
        <CardContent>
          <List className="todoList">
            {todoList.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoApp;
