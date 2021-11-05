import { useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import "./App.css";
import { GET_ALL_USERS, CREATE_USER, GET_ONE_USER } from "./functions/query";

function App() {
  // refetch обновление Дата
  // доступен пулинг (аналог веб сокетам)
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {
    // pollInterval: 500,
  });
  const { data: oneUser } = useQuery(GET_ONE_USER, {
    variables: {
      id: 1,
    },
  });

  // Функция вызывающая мутацию
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const getAll = (e) => {
    e.preventDefault();
    refetch();
  };

  const addUser = (e) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then(({ data }) => {
      console.log(data);
      setUsername("");
      setAge(0);
    });
  };

  // console.log(data);
  console.log(oneUser);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      <form>
        <input
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={(ev) => setAge(Number(ev.target.value))}
        />
        <div>
          <button onClick={(e) => addUser(e)}>Запросить</button>
          <button onClick={(e) => getAll(e)}>Получить</button>
        </div>
      </form>
      <div>
        {users.map((user,index) => {
          return <div key={index}>{user.username}, {user.id} , {user.age}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
