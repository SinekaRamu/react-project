import { useState } from "react";
import Card from "./Card";

const MyList = (props) => {
  const { setValue, listItem, handleFilter, handleUpdate } = props;
  const [updatedValue, setUpdatedValue] = useState("");

  function handleDelete(id) {
    const filteredArray = listItem.filter((item) => item.id !== id);
    handleFilter(filteredArray);
  }

  function handleEdit(id) {
    // console.log("edit");
    // console.log();
    // return (item.isEdit = true);
    const listIndex = listItem.findIndex((item) => {
      return item.id == id;
    });
    listItem[listIndex].isEdit = true;
    console.log(listItem[listIndex]);
  }
  function handleSave(item) {
    item.isEdit = false;
    item.value = updatedValue;
    handleUpdate(updatedValue);
    console.log("update");
  }

  const EditCard = (props) => {
    const { item } = props;
    return (
      <>
        <input
          type="text"
          value={item.value}
          placeholder={item.vlaue}
          onChange={(e) => setUpdatedValue(e.target.value)}
        />
        <button onClick={() => handleSave(item)}>Update</button>
      </>
    );
  };

  return (
    <ul className="cardDiv">
      {listItem.map((item) => {
        if (item.isEdit) {
          console.log(item);
          return <EditCard item={item} />;
        }
        return (
          <Card
            setValue={setValue}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </ul>
  );
};

export default MyList;
