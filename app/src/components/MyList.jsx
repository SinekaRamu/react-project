const MyList = (props) => {
  // console.log(props.value);
  const { listItem, handleFilter } = props;

  function handleDelete(id) {
    console.log("delete");
    const filteredArray = listItem.filter((item) => {
      return item.id !== id;
    });
    console.log(filteredArray);
    handleFilter(filteredArray);
  }
  // const myArray = [
  //   { id: 23, title: "me" },
  //   { id: 24, title: "you" },
  //   { id: 25, title: "they" },
  //   { id: 26, title: "them" },
  // ];

  // return (
  //   <div>
  //     {myArray.map((ma) => {
  //       return <p key={ma.id}>{ma.title}</p>;
  //     })}
  //   </div>
  // );

  return (
    <div className="cardDiv">
      {listItem.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.value}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default MyList;
