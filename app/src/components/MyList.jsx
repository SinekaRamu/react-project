import { useState } from "react";
import Card from "./Card";

const MyList = (props) => {
  const { listItem, handleFilter, isEditUpdate, updateChange } = props;

  function handleDelete(id) {
    const filteredArray = listItem.filter((item) => item.id !== id);
    handleFilter(filteredArray);
  }

  function handleEdit(id) {
    console.log("edit", id);
    isEditUpdate(id);
  }
  function handleSave(id, value) {
    updateChange(id, value);
    console.log(value);
  }
  const EditCard = (props) => {
    const { item } = props;
    const [editValue, setEditValue] = useState(item.value);
    const handleChange = (e) => setEditValue(e.target.value);

    return (
      <>
        <input
          id={item.id}
          type="text"
          placeholder={item.value}
          value={editValue}
          onChange={handleChange}
        />
        <button onClick={() => handleSave(item.id, editValue)}>Update</button>
      </>
    );
  };

  return (
    <ul className="cardDiv">
      {listItem.map((item) => {
        return (
          <div key={item.id}>
            {item.isEdit ? (
              <EditCard item={item} />
            ) : (
              <Card
                item={item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default MyList;
