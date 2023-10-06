import { useEffect, useState } from "react";
import { MyList, AddForm } from "./components";

import "./App.css";

const App = () => {
  const [value, setValue] = useState([
    {
      id: 1,
      value: "choco",
    },
    {
      id: 2,
      value: "chocolate",
    },
  ]);

  function handleAdd(payload) {
    console.log(payload);
    const temp = [...value];
    temp.push(payload);
    setValue(temp);
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
