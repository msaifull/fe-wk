import React, { useState } from "react";
import TextInput from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

function PageSignIn() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "saiful",
      age: 30,
    },
  ]);
  const [type, setType] = useState("save");
  const [isLoading, setIsLoading] = useState(false);
  const [isBool, setIsBool] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const [form, setForm] = useState({
    name: "",
    age: "",
    id: 0
  });

  const getOneUser = (data) => {
    console.log(data);
    setForm({ name: data.name, age: data.age, id:data.id});
    setType("update");
  };

  const handleUpdate = (data) => {
    const _temp = [...users];

    _temp.forEach((user) => {
      if (user.id === data.id) {
        user.name = data.name;
        user.age = data.age;
      }
    });

    setUsers(_temp);
    setType("save");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let error = false;

    if (form.name === "") {
      error = true;
      setError({ status: true, message: "Nama tidak boleh Kosong" });
      return error;
    }
    if (form.age === "") {
      error = true;
      setError({ status: true, message: "Umur tidak boleh Kosong" });
    }
    return error;
  };

  const onSubmit = () => {
    setIsLoading(true);
    if (!validate()) {
      //hit api post
      let _temp = [...users];

      _temp.push({ name: form.name, age: form.age, id: (_temp[_temp.length - 1].id + 1)});
      setUsers(_temp);
      setForm({ name: "", age: "" });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error.status && <Alert message={error.message} type="error" />}

      <h1>Form SignIn</h1>
      <TextInput
        placeholder="Masukan Nama"
        type="text"
        value={form.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <br />
      <TextInput
        placeholder="Masukan Umur"
        type="number"
        value={form.age}
        name="age"
        onChange={(e) => handleChange(e)}
      />
      <Button
        name={`${type === 'save' ? 'Save' : 'update'}`}
        loading={isLoading}
        onClick={() => (type === "save" ? onSubmit() : handleUpdate(form))}
      />
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <Button
                    name="Edit"
                    loading={isLoading}
                    onClick={() => getOneUser(user)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {
    isBool ? (
      <ul>
        <li>{form.name}</li>
        <li>{form.age}</li>
      </ul>
    ):(

    ''
    )
  } */}
    </div>
  );
}

export default PageSignIn;
