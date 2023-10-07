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

  useEffect(() => {
    setValue(getFromLocalStorage());
  }, []);

  function handleAdd(payload) {
    // const temp = [...value];
    // temp.push(payload);
    // setValue(temp);
    // setToLocalStorage(temp);
    const newValue = [...value, payload];
    setValue(newValue);
    setToLocalStorage(newValue);
  }

  function handleFilter(newArray) {
    setValue(newArray);
    setToLocalStorage(newArray);
  }
  return (
    <>
      <h1>Likes App</h1>
      <AddForm handleAdd={handleAdd} />
      <MyList listItem={value} handleFilter={handleFilter} />
    </>
  );
};

export default App;
