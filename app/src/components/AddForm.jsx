import { useState } from "react";

const AddForm = (props) => {
  const { handleAdd } = props;
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setData(() => {
    //   const value = {
    //     id: new Date().getTime(),
    //     title: data,
    //   };
    //   console.log(value);
    //   return [...data, value];
    // });
    const obj = {
      id: new Date().getTime(),
      value: data,
    };
    handleAdd(obj);
    setData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="items">What do you like? </label>
      <input type="text" id="items" value={data} onChange={handleChange} />
      <button type="sumbit">Add</button>
    </form>
  );
};

export default AddForm;
