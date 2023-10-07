import { useEffect, useState } from "react";
import { MyList, AddForm } from "./components";

import "./App.css";

function setToLocalStorage(value) {
  localStorage.setItem("My-favourites", JSON.stringify(value));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-favourites"));
}

const App = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(getFromLocalStorage());
  }, []);

  function handleAdd(payload) {
    const temp = [...value];
    temp.push(payload);
    setValue(temp);
    setToLocalStorage(temp);
    // setValue((prev) => {
    //   const prev = [...value];
    //   console.log(prev);
    // });
  }

  return (
    <>
      <h1>Likes App</h1>
      <AddForm handleAdd={handleAdd} />
      <MyList listItem={value} />
    </>
  );
};

export default App;
