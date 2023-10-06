const MyList = (props) => {
  // console.log(props.value);
  const { listItem } = props;

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

  console.log(listItem);

  return (
    <div className="cardDiv">
      {listItem.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.value}</p>
            <button>Edit</button>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default MyList;
