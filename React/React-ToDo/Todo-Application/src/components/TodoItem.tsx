import { useState } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css";

interface TodoItemProps {
  todo: string;
  index: number;
  handleDelete: (index: number) => void;
  handleUpdate: (index: number, updatedValue: string) => void;
}

const TodoItem = ({
  todo,
  index,
  handleDelete,
  handleUpdate,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    handleUpdate(index, editValue);
    setIsEditing(false);
  };

  return (
    <ListItem
      secondaryAction={
        isEditing ? (
          <div className="updateList">
            <TextField
            sx={{marginTop:"10px"}}
              variant="outlined"
              size="small"
              value={editValue}
              onChange={(event) => setEditValue(event.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleUpdateClick}
              sx={{ backgroundColor: "blueviolet", height: "30px" }}
            >
              Update
            </Button>
          </div>
        ) : (
          <div>
            <IconButton
              edge="end"
              aria-label="Edit"
              onClick={handleEditClick}
              color="primary"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Delete"
              onClick={() => handleDelete(index)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        )
      }
    >
      {!isEditing && <ListItemText primary={todo} />}
    </ListItem>
  );
};

export default TodoItem;
