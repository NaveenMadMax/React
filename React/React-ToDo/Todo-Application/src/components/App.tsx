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
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

const TodoApp = () => {
  const [showInputField, setShowInputField] = useState<boolean>(false);
  const [inputvalue, setInputValue] = useState<string>("");
  const [hasError, setHasError] = useState<string>("");
  const [todoList, setToDoList] = useState<string[]>([]);
  const [editTodoListIndex, setEditTodoListIndex] = useState<number | null>(
    null
  );
  const [editTodoListValue, setEditTodoListValue] = useState<string>("");

  const handleInputValue = () => {
    if (inputvalue.trim() === "") {
      setHasError("Input Field Should not be empty");
    } else {
      setToDoList([...todoList, inputvalue]);
      setInputValue("");
      setHasError("");
    }
  };

  const handleEditClick = (index: number) => {
    setEditTodoListIndex(index);
    setEditTodoListValue(todoList[index]);
  };

  const handleSaveEdit = (index: number) => {
    const updateList = [...todoList];
    updateList[index] = editTodoListValue;
    setToDoList(updateList);
    setEditTodoListIndex(null);
  };

  const handleDeleteIcon = (index: number) => {
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
            value={inputvalue}
            onChange={(event) => setInputValue(event.target.value)}
            error={!!hasError}
            helperText={hasError}
          />
          <Button
            variant="contained"
            onClick={handleInputValue}
            sx={{ gap: "10px" }}
          >
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
            {todoList.map((todolist, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <>
                    {editTodoListIndex === index ? (
                      <>
                        <div className="updateList">
                          <TextField
                            sx={{ marginTop: "10px" }}
                            variant="outlined"
                            size="small"
                            value={editTodoListValue}
                            onChange={(event) =>
                              setEditTodoListValue(event.target.value)
                            }
                          />
                          <IconButton
                            sx={{ marginTop: "10px" }}
                            edge="end"
                            aria-label="save"
                            onClick={() => handleSaveEdit(index)}
                          >
                            <SaveIcon sx={{color:"blueviolet"}} />
                          </IconButton>
                        </div>
                      </>
                    ) : (
                      <>
                        <IconButton
                          edge="end"
                          aria-label="Edit"
                          onClick={() => handleEditClick(index)}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="Delete"
                          onClick={() => handleDeleteIcon(index)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    )}
                  </>
                }
              >
                {editTodoListIndex === index ? null : (
                  <ListItemText primary={todolist} />
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoApp;
