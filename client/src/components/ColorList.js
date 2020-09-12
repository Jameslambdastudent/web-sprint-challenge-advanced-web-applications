import React, { useState } from "react";
import { axiosWAuth } from '../utils/axiosWAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
    console.log(colorToEdit)
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWAuth()
    .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then((response) => {
        console.log('mod response:', response)
        setEditing(false)
        window.location.reload(false)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWAuth()
    .delete(`/colors/${color.id}`)
      .then((response) => {
        console.log(response)
        window.location.reload(false)
      })
      .catch((error) => { 
        console.log(error)
      })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      
      


    </div>
  );
};

export default ColorList;