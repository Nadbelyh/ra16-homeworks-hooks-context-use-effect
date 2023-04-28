import React, { useState, useEffect } from "react";

function List({ onUserClick, activeId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then((data) => setUsers(data));
  }, []);

  return (
    <table>
      <tbody>
        {users.map(({ id, name }) => (
          <tr
            active={activeId === id ? true : false}
            key={id}
            onClick={() => onUserClick({ id, name })}
          >
            {name}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
