# Likes App

- created a form function which gets the input value
- onSubmit, form returns the value to the app
- here with input date, we are creating the card list (C)
- then, we have to delete and edit the created card.

## Create card using form inputs

get the form items as an array of objects

```
const handleChange = (e) => {
    setData(e.target.value);
  };
```

send the data to app function

```
const obj = {
      id: new Date().getTime(),
      value: data,
    };
    handleAdd(obj);
    setData("");
```
