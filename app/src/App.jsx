import { useEffect, useState } from "react";
import { MyList, AddForm } from "./components";

import "./App.css";

function setToLocalStorage(value) {
  localStorage.setItem("My-favourites", JSON.stringify(value));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-favourites")) || [];
}

const App = () => {
  const [value, setValue] = useState([]);
  //intial loading get datas from sstorgae
  useEffect(() => setValue(getFromLocalStorage()), []);
  //save in storage when data changes
  // useEffect(() => {
  //   if (!value) {
  //     setToLocalStorage(value);
  //   }
  // }, [value]);
  function handleAdd(payload) {
    const newValue = [...value, payload];
    setValue(newValue);
    setToLocalStorage(newValue);
  }

  function handleFilter(newArray) {
    setValue(newArray);
    setToLocalStorage(newArray);
  }
  function isEditUpdate(id) {
    const index = value.findIndex((item) => item.id == id);
    const editForm = value[index];
    editForm.isEdit = true;
    setToLocalStorage(value);
  }

  function updateChange(id, editValue) {
    const index = value.findIndex((item) => item.id == id);
    const editForm = value[index];
    editForm.value = editValue;
    editForm.isEdit = false;
    setToLocalStorage(value);
  }
  return (
    <>
      <h1>Likes App</h1>
      <AddForm handleAdd={handleAdd} />

      <MyList
        listItem={value}
        handleFilter={handleFilter}
        updateChange={updateChange}
        isEditUpdate={isEditUpdate}
      />
    </>
  );
};

export default App;
