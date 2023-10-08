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
  useEffect(() => {
    if (!value) {
      setToLocalStorage(value);
    }
  }, [value]);

  function handleAdd(payload) {
    // const newValue = [...value, payload];
    setValue([...value, payload]);
  }

  function handleFilter(newArray) {
    setValue(newArray);
    setToLocalStorage(newArray);
  }
  function handleUpdate(value) {}
  return (
    <>
      <h1>Likes App</h1>
      <AddForm handleAdd={handleAdd} />

      <MyList
        setValue={setValue}
        listItem={value}
        handleFilter={handleFilter}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default App;
