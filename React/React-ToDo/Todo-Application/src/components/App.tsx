import { useState } from "react";
import {
  Card,
  CardContent,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { List } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

const TodoApp = () => {
  const [showInputField, setShowInputField] = useState<boolean>(false);
  const [inputvalue, setInputValue] = useState<string>("");
  const [hasError, setHasError] = useState<string>("");
  const [todolist, setToDoList] = useState<string[]>([]);

  const handleInputValue = () => {
    if (inputvalue.trim() === "") {
      setHasError("Input Field Should not be empty");
    } else {
      setToDoList([...todolist, inputvalue]);
      setInputValue("");
      setHasError("");
    }
  };

  const handleDeleteIcon = (index: number) => {
    setToDoList([...todolist.slice(0, index), ...todolist.slice(index + 1)]);
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
          sx={{ width: "300px", backgroundColor:'blueviolet' }}
        >
          Add TODO List
        </Button>
      ) : (
        <div className="textFieldContainer">
          <TextField
            variant="outlined"
            label="Add TODO List"
            value={inputvalue}
            onChange={(event) => setInputValue(event.target.value)}
            error={!!hasError}
            helperText={hasError}
          />
          <Button variant="contained" onClick={handleInputValue}>
            Add
          </Button>
          <Button variant="contained" onClick={() => setShowInputField(false)}>
            Back
          </Button>
        </div>
      )}
      <Card
        className="todoCard"
        sx={{
          boxShadow: " 4px 10px 18px #ff00005c",
          backgroundColor: "#ff000026",
          marginTop: "50px",
        }}
      >
        <CardContent>
          <List className="todoList">
            {todolist.map((todolist, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteIcon(index)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  sx={{ textAlign: "justify", fontFamily:'fantasy' }}
                  primary={todolist}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoApp;
